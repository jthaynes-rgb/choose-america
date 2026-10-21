type SpeechResult = {
  isFinal: boolean;
  0: { transcript: string };
};

type SpeechEvent = {
  resultIndex: number;
  results: ArrayLike<SpeechResult>;
};

type Rec = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  processLocally: boolean;
  onresult: ((ev: SpeechEvent) => void) | null;
  onerror: ((ev: { error: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

type LocalCtor = {
  new (): Rec;
  available?: (options: { langs: string[]; processLocally: boolean }) => Promise<string>;
  install?: (options: { langs: string[]; processLocally: boolean }) => Promise<boolean>;
};

export type EarStatus = "hearing" | "loading" | "reading";

export type SttHandlers = {
  onInterim: (text: string) => void;
  onFinal: (text: string) => void;
  onEnd: () => void;
  onError: (code: string) => void;
  onStatus?: (status: EarStatus) => void;
  onNet?: (count: number) => void;
};

const RATE = 16000;
const MAX_MS = 12000;

function recognitionCtor(): LocalCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: LocalCtor;
    webkitSpeechRecognition?: LocalCtor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function sttAvailable(): boolean {
  if (typeof window === "undefined") return false;
  return typeof navigator.mediaDevices?.getUserMedia === "function" || recognitionCtor() !== null;
}

function withTimeout<T>(work: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("timeout")), ms);
    work.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error: unknown) => {
        clearTimeout(timer);
        reject(error instanceof Error ? error : new Error("failed"));
      },
    );
  });
}

async function localPackReady(ctor: LocalCtor, handlers: SttHandlers): Promise<boolean> {
  let probe: Rec;
  try {
    probe = new ctor();
  } catch {
    return false;
  }
  if (!("processLocally" in probe) || !ctor.available) return false;
  try {
    let status = await withTimeout(ctor.available({ langs: ["en-US"], processLocally: true }), 2000);
    if (status === "available") return true;
    if (status !== "downloadable" && status !== "downloading") return false;
    if (!ctor.install) return false;
    handlers.onStatus?.("loading");
    const installed = await ctor.install({ langs: ["en-US"], processLocally: true });
    if (!installed) return false;
    status = await withTimeout(ctor.available({ langs: ["en-US"], processLocally: true }), 2000);
    return status === "available";
  } catch {
    return false;
  }
}

function startLocal(handlers: SttHandlers): (() => void) | null {
  const Ctor = recognitionCtor();
  if (!Ctor) return null;
  let rec: Rec;
  try {
    rec = new Ctor();
  } catch {
    return null;
  }
  if (!("processLocally" in rec)) return null;
  rec.processLocally = true;
  rec.lang = "en-US";
  rec.continuous = false;
  rec.interimResults = true;
  rec.onresult = (ev) => {
    let interim = "";
    let finalText = "";
    for (let i = ev.resultIndex; i < ev.results.length; i += 1) {
      const piece = ev.results[i][0].transcript;
      if (ev.results[i].isFinal) finalText += piece;
      else interim += piece;
    }
    if (interim.trim()) handlers.onInterim(interim.trim());
    if (finalText.trim()) handlers.onFinal(finalText.trim());
  };
  rec.onerror = (ev) => {
    if (ev.error === "aborted") return;
    handlers.onError(ev.error === "network" ? "ear" : ev.error);
  };
  rec.onend = () => handlers.onEnd();
  try {
    rec.start();
  } catch {
    return null;
  }
  handlers.onStatus?.("hearing");
  return () => {
    try {
      rec.stop();
    } catch {
      /* already stopped */
    }
  };
}

function mix(chunks: Float32Array[]): Float32Array {
  const length = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const mixed = new Float32Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    mixed.set(chunk, offset);
    offset += chunk.length;
  }
  return mixed;
}

function to16k(input: Float32Array, fromRate: number): Float32Array {
  if (fromRate === RATE) return input;
  const ratio = fromRate / RATE;
  const length = Math.max(0, Math.floor(input.length / ratio));
  const out = new Float32Array(length);
  for (let i = 0; i < length; i += 1) {
    const pos = i * ratio;
    const left = Math.floor(pos);
    const right = Math.min(left + 1, input.length - 1);
    const blend = pos - left;
    out[i] = input[left] * (1 - blend) + input[right] * blend;
  }
  return out;
}

import { regionProfile, type RegionId } from "@/lib/region";

type EarInbound =
  | { type: "warmup" }
  | { type: "transcribe"; audio: Float32Array; phrases: string[]; prompt: string };
type EarOutbound =
  | { type: "status"; status: "loading" | "reading" }
  | { type: "progress"; loaded: number; total: number; progress: number }
  | { type: "ready" }
  | { type: "net" }
  | { type: "text"; text: string }
  | { type: "error"; message: string };

export type EarProgress = { loaded: number; total: number; progress: number };

let earWorker: Worker | null = null;
let earRegion: RegionId | null = null;

export function setEarRegion(id: RegionId | null) {
  earRegion = id;
}

function ear(): Worker {
  if (!earWorker) {
    earWorker = new Worker(new URL("./ear.worker.ts", import.meta.url), { type: "module" });
  }
  return earWorker;
}

export function warmEar(handlers: {
  onProgress: (progress: EarProgress) => void;
  onReady: () => void;
  onError: () => void;
}): () => void {
  let worker: Worker;
  try {
    worker = ear();
  } catch {
    handlers.onError();
    return () => {};
  }
  let settled = false;
  const stop = () => {
    settled = true;
    window.clearTimeout(timer);
    worker.removeEventListener("message", onMessage);
  };
  const onMessage = (event: MessageEvent<EarOutbound>) => {
    if (settled) return;
    const message = event.data;
    if (!message || message.type === "status" || message.type === "net") return;
    if (message.type === "progress") {
      handlers.onProgress(message);
      return;
    }
    if (message.type === "ready") {
      stop();
      handlers.onReady();
      return;
    }
    if (message.type === "error") {
      stop();
      handlers.onError();
    }
  };
  const timer = window.setTimeout(() => {
    if (settled) return;
    stop();
    handlers.onError();
  }, 125_000);
  worker.addEventListener("message", onMessage);
  worker.addEventListener("error", () => {
    if (settled) return;
    stop();
    handlers.onError();
  });
  worker.addEventListener("messageerror", () => {
    if (settled) return;
    stop();
    handlers.onError();
  });
  worker.postMessage({ type: "warmup" } satisfies EarInbound);
  return stop;
}

function transcribeHere(audio: Float32Array, handlers: SttHandlers, cancelled: () => boolean) {
  let worker: Worker;
  try {
    worker = ear();
  } catch {
    handlers.onError("ear");
    handlers.onEnd();
    return;
  }
  let settled = false;
  let timer = 0;
  const stopWait = () => window.clearTimeout(timer);
  const onMessage = (event: MessageEvent<EarOutbound>) => {
    if (settled) return;
    const message = event.data;
    if (!message || message.type === "status" || message.type === "net" || message.type === "progress" || message.type === "ready") {
      if (message?.type === "status") handlers.onStatus?.(message.status);
      if (message?.type === "net") handlers.onNet?.(1);
      return;
    }
    settled = true;
    stopWait();
    worker.removeEventListener("message", onMessage);
    worker.removeEventListener("error", giveUp);
    worker.removeEventListener("messageerror", giveUp);
    if (cancelled()) {
      handlers.onEnd();
      return;
    }
    if (message.type === "error") {
      handlers.onError("ear");
      handlers.onEnd();
      return;
    }
    if (!message.text) {
      handlers.onError("no-speech");
      handlers.onEnd();
      return;
    }
    handlers.onFinal(message.text);
    handlers.onEnd();
  };
  const giveUp = () => {
    if (settled) return;
    settled = true;
    stopWait();
    worker.removeEventListener("message", onMessage);
    worker.removeEventListener("error", giveUp);
    worker.removeEventListener("messageerror", giveUp);
    handlers.onError("ear");
    handlers.onEnd();
  };
  worker.addEventListener("message", onMessage);
  timer = window.setTimeout(giveUp, 45_000);
  worker.addEventListener("error", giveUp);
  worker.addEventListener("messageerror", giveUp);
  const copy = audio.slice();
  const profile = regionProfile(earRegion);
  worker.postMessage(
    {
      type: "transcribe",
      audio: copy,
      phrases: profile?.phrases ?? [],
      prompt: profile?.prompt ?? "",
    } satisfies EarInbound,
    [copy.buffer],
  );
}

function startCapture(handlers: SttHandlers): () => void {
  let closed = false;
  let hearing = false;
  let stream: MediaStream | null = null;
  let context: AudioContext | null = null;
  const chunks: Float32Array[] = [];
  let timer = 0;

  const finish = () => {
    if (closed) return;
    closed = true;
    window.clearTimeout(timer);
    stream?.getTracks().forEach((track) => track.stop());
    const recorded = mix(chunks);
    const rate = context?.sampleRate ?? RATE;
    void context?.close();
    if (recorded.length < rate * 0.25) {
      handlers.onError("no-speech");
      handlers.onEnd();
      return;
    }
    handlers.onStatus?.("reading");
    transcribeHere(to16k(recorded, rate), handlers, () => false);
  };

  void (async () => {
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: { channelCount: 1, echoCancellation: true, noiseSuppression: false },
      });
    } catch {
      handlers.onError("not-allowed");
      handlers.onEnd();
      return;
    }
    if (closed) {
      stream.getTracks().forEach((track) => track.stop());
      return;
    }
    context = new AudioContext();
    const source = context.createMediaStreamSource(stream);
    const processor = context.createScriptProcessor(4096, 1, 1);
    const mute = context.createGain();
    mute.gain.value = 0;
    processor.onaudioprocess = (event) => {
      if (closed) return;
      chunks.push(new Float32Array(event.inputBuffer.getChannelData(0)));
    };
    source.connect(processor);
    processor.connect(mute);
    mute.connect(context.destination);
    hearing = true;
    handlers.onStatus?.("hearing");
    timer = window.setTimeout(finish, MAX_MS);
  })();

  return () => {
    if (!hearing) {
      closed = true;
      stream?.getTracks().forEach((track) => track.stop());
      return;
    }
    finish();
  };
}

function watchOutbound(onHit: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const origFetch = window.fetch.bind(window);
  window.fetch = ((...args: Parameters<typeof fetch>) => {
    onHit();
    return origFetch(...args);
  }) as typeof fetch;
  const origOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (this: XMLHttpRequest, ...args: unknown[]) {
    onHit();
    return (origOpen as (...inner: unknown[]) => void).apply(this, args);
  } as typeof XMLHttpRequest.prototype.open;
  const beacon = navigator.sendBeacon?.bind(navigator);
  if (beacon) {
    navigator.sendBeacon = (...args: Parameters<typeof navigator.sendBeacon>) => {
      onHit();
      return beacon(...args);
    };
  }
  return () => {
    window.fetch = origFetch;
    XMLHttpRequest.prototype.open = origOpen;
    if (beacon) navigator.sendBeacon = beacon;
  };
}

export function startStt(handlers: SttHandlers): () => void {
  const gate: { dropped: boolean; stop: (() => void) | null } = { dropped: false, stop: null };
  let net = 0;
  const bump = () => {
    net += 1;
    handlers.onNet?.(net);
  };
  const stopWatch = watchOutbound(bump);
  const wrapped: SttHandlers = {
    ...handlers,
    onNet: bump,
    onEnd: () => {
      stopWatch();
      handlers.onEnd();
    },
  };

  void (async () => {
    const ctor = recognitionCtor();
    const local = ctor ? await localPackReady(ctor, wrapped) : false;
    if (gate.dropped) {
      stopWatch();
      return;
    }
    if (local) {
      const stop = startLocal(wrapped);
      if (stop) {
        if (gate.dropped) stop();
        else gate.stop = stop;
        return;
      }
    }
    if (gate.dropped) {
      stopWatch();
      return;
    }
    if (typeof navigator.mediaDevices?.getUserMedia !== "function") {
      wrapped.onError("unavailable");
      wrapped.onEnd();
      return;
    }
    const stop = startCapture(wrapped);
    if (gate.dropped) stop();
    else gate.stop = stop;
  })();

  return () => {
    gate.dropped = true;
    gate.stop?.();
  };
}

export function ttsAvailable(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function englishVoices(): SpeechSynthesisVoice[] {
  if (!ttsAvailable()) return [];
  const voices = window.speechSynthesis.getVoices();
  const english = voices.filter((voice) => voice.lang.toLowerCase().startsWith("en"));
  return english.length > 0 ? english : voices;
}

export function speakText(line: string, voiceURI: string | null, onend: () => void): void {
  if (!ttsAvailable() || !line.trim()) {
    onend();
    return;
  }
  const synth = window.speechSynthesis;
  synth.cancel();
  const utter = new SpeechSynthesisUtterance(line);
  utter.lang = "en-US";
  const voice = englishVoices().find((item) => item.voiceURI === voiceURI) ?? null;
  if (voice) {
    utter.voice = voice;
    utter.lang = voice.lang;
  }
  utter.onend = onend;
  utter.onerror = () => onend();
  synth.speak(utter);
}

export function stopText(): void {
  if (!ttsAvailable()) return;
  window.speechSynthesis.cancel();
}
