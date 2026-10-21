import { env, pipeline } from "@huggingface/transformers";
import { EAR_ID, keptPiece } from "./bias";

type Inbound =
  | { type: "warmup" }
  | { type: "transcribe"; audio: Float32Array; phrases: string[]; prompt: string };
type Outbound =
  | { type: "status"; status: "loading" | "reading" }
  | { type: "progress"; loaded: number; total: number; progress: number }
  | { type: "ready" }
  | { type: "net" }
  | { type: "text"; text: string }
  | { type: "error"; message: string };

const scope = globalThis as unknown as {
  onmessage: ((event: MessageEvent<Inbound>) => void) | null;
  postMessage: (message: Outbound) => void;
  fetch: typeof fetch;
};

env.allowLocalModels = false;
env.allowRemoteModels = true;
env.useBrowserCache = true;
const wasm = env.backends.onnx?.wasm as {
  numThreads?: number;
  proxy?: boolean;
  wasmPaths?: string | { wasm?: string; mjs?: string };
} | undefined;
if (wasm) {
  wasm.numThreads = 1;
  wasm.proxy = false;
  wasm.wasmPaths = "/ort/";
}

const pageFetch = scope.fetch.bind(globalThis);
scope.fetch = ((...args: Parameters<typeof fetch>) => {
  scope.postMessage({ type: "net" });
  return pageFetch(...args);
}) as typeof fetch;

type Tokenizer = {
  encode: (text: string, options?: { add_special_tokens?: boolean }) => number[];
  decode: (ids: number[]) => string;
};

type Transcriber = {
  tokenizer: Tokenizer;
  (
    audio: Float32Array,
    options?: {
      prompt_ids?: number[];
      logits_processor?: Array<(inputIds: bigint[][], logits: LogitTensor) => LogitTensor>;
    },
  ): Promise<{ text?: string }>;
};

type LogitTensor = {
  data: Float32Array;
  [index: number]: { data: Float32Array };
};

let ear: Promise<Transcriber> | null = null;
let boostKey = "";
let boostIds: number[] = [];

function failEar() {
  ear = null;
  boostKey = "";
  boostIds = [];
  scope.postMessage({ type: "error", message: "ear" });
}

function loadEar(): Promise<Transcriber> {
  if (ear) return ear;
  try {
    const pending = pipeline("automatic-speech-recognition", EAR_ID, {
      dtype: "q8",
      device: "wasm",
      progress_callback: (info) => {
        if (info.status !== "progress_total") return;
        scope.postMessage({
          type: "progress",
          loaded: info.loaded,
          total: info.total,
          progress: info.progress,
        });
      },
    }).then((transcriber) => transcriber as unknown as Transcriber);
    ear = pending.catch((error: unknown) => {
      ear = null;
      boostKey = "";
      boostIds = [];
      throw error;
    });
    return ear;
  } catch (error) {
    ear = null;
    return Promise.reject(error);
  }
}

function liftIds(tokenizer: Tokenizer, phrases: string[]): number[] {
  const key = phrases.join("|");
  if (key === boostKey) return boostIds;
  const found = new Set<number>();
  for (const phrase of phrases) {
    let ids: number[] = [];
    try {
      ids = tokenizer.encode(phrase, { add_special_tokens: false });
    } catch {
      continue;
    }
    for (const id of ids) {
      let piece = "";
      try {
        piece = tokenizer.decode([id]);
      } catch {
        continue;
      }
      if (keptPiece(piece)) found.add(id);
    }
  }
  boostKey = key;
  boostIds = [...found];
  return boostIds;
}

function liftProcessor(ids: number[]) {
  return (_inputIds: bigint[][], logits: LogitTensor) => {
    const rows = _inputIds.length || 1;
    for (let row = 0; row < rows; row += 1) {
      const data = logits[row]?.data ?? logits.data;
      let top = -Infinity;
      for (let i = 0; i < data.length; i += 1) {
        if (data[i] > top) top = data[i];
      }
      const floor = top - 3;
      for (const id of ids) {
        if (data[id] !== undefined && data[id] >= floor) data[id] += 1.25;
      }
    }
    return logits;
  };
}

function promptIds(tokenizer: Tokenizer, prompt: string): number[] {
  if (!prompt.trim()) return [];
  try {
    return tokenizer.encode(prompt, { add_special_tokens: false }).slice(0, 80);
  } catch {
    return [];
  }
}

const EAR_MS = 45_000;

function within(work: Promise<unknown>): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      ear = null;
      boostKey = "";
      boostIds = [];
      reject(new Error("timeout"));
    }, EAR_MS);
    work.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error: unknown) => {
        clearTimeout(timer);
        reject(error instanceof Error ? error : new Error("ear"));
      },
    );
  });
}
scope.onmessage = (event) => {
  try {
    if (event.data?.type === "warmup") {
      scope.postMessage({ type: "status", status: "loading" });
      void within(loadEar())
        .then(() => {
          scope.postMessage({ type: "ready" });
        })
        .catch(() => {
          failEar();
        });
      return;
    }
    const audio = event.data?.audio;
    if (!audio) {
      scope.postMessage({ type: "error", message: "empty" });
      return;
    }
    const phrases = event.data.phrases ?? [];
    const prompt = event.data.prompt ?? "";
    scope.postMessage({ type: "status", status: "loading" });
    void within(
      loadEar().then(async (transcriber) => {
        scope.postMessage({ type: "status", status: "reading" });
        const ids = phrases.length > 0 ? liftIds(transcriber.tokenizer, phrases) : [];
        const primed = promptIds(transcriber.tokenizer, prompt);
        const processor = ids.length > 0 ? [liftProcessor(ids)] : undefined;
        let output: { text?: string };
        try {
          output = await transcriber(audio, {
            ...(primed.length > 0 ? { prompt_ids: primed } : {}),
            ...(processor ? { logits_processor: processor } : {}),
          });
        } catch {
          output = await transcriber(audio, processor ? { logits_processor: processor } : undefined);
        }
        const text = (output.text ?? "").replace(/<\|[^|]+?\|>/g, "").trim();
        scope.postMessage({ type: "text", text });
      }),
    ).catch(() => {
      failEar();
    });
  } catch {
    failEar();
  }
};

