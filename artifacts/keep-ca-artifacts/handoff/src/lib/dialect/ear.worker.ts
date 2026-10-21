import { env, pipeline } from "@huggingface/transformers";
import { biasPhrases, EAR_ID, keptPiece } from "./bias";

type Inbound = { type: "transcribe"; audio: Float32Array; lift: boolean };
type Outbound =
  | { type: "status"; status: "loading" | "reading" }
  | { type: "text"; text: string }
  | { type: "error"; message: string };

const scope = globalThis as unknown as {
  onmessage: ((event: MessageEvent<Inbound>) => void) | null;
  postMessage: (message: Outbound) => void;
};

env.allowLocalModels = false;
env.allowRemoteModels = true;
if (env.backends.onnx.wasm) {
  env.backends.onnx.wasm.numThreads = 1;
}

type Tokenizer = {
  encode: (text: string, options?: { add_special_tokens?: boolean }) => number[];
  decode: (ids: number[]) => string;
};

type Transcriber = {
  tokenizer: Tokenizer;
  (audio: Float32Array, options?: { logits_processor?: Array<(inputIds: bigint[][], logits: LogitTensor) => LogitTensor> }): Promise<{ text?: string }>;
};

type LogitTensor = {
  data: Float32Array;
  [index: number]: { data: Float32Array };
};

let ear: Promise<Transcriber> | null = null;
let boostIds: number[] | null = null;

function loadEar(): Promise<Transcriber> {
  ear ??= pipeline("automatic-speech-recognition", EAR_ID, {
    dtype: "q8",
    device: "wasm",
  }).then((transcriber) => transcriber as unknown as Transcriber);
  return ear;
}

function liftIds(tokenizer: Tokenizer): number[] {
  if (boostIds) return boostIds;
  const found = new Set<number>();
  for (const phrase of biasPhrases()) {
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

scope.onmessage = (event) => {
  const audio = event.data?.audio;
  if (!audio) {
    scope.postMessage({ type: "error", message: "empty" });
    return;
  }
  scope.postMessage({ type: "status", status: "loading" });
  void loadEar()
    .then(async (transcriber) => {
      scope.postMessage({ type: "status", status: "reading" });
      const ids = event.data.lift ? liftIds(transcriber.tokenizer) : [];
      const output = await transcriber(
        audio,
        ids.length > 0 ? { logits_processor: [liftProcessor(ids)] } : undefined,
      );
      const text = (output.text ?? "").replace(/<\|[^|]+?\|>/g, "").trim();
      scope.postMessage({ type: "text", text });
    })
    .catch(() => {
      ear = null;
      boostIds = null;
      scope.postMessage({ type: "error", message: "ear" });
    });
};
