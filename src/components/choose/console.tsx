import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { BookOpen, Mic, Shield, Volume2, VolumeX } from "lucide-react";
import { REGIONS, SAMPLES, type DialectId } from "@/lib/dialect/lexicon";
import {
  dialectLabel,
  interpret,
  lookupGloss,
  spokenReading,
  type Interpretation,
} from "@/lib/dialect/parse";
import {
  englishVoices,
  speakText,
  startStt,
  stopText,
  sttAvailable,
  ttsAvailable,
  setEarRegion,
  warmEar,
} from "@/lib/dialect/speech";
import { EAR_ID } from "@/lib/dialect/bias";
import { envelope, publishDesk } from "@/lib/aethelos/command";
import { Flag } from "@/components/choose/flag";
import { CANON } from "@/lib/canon";
import { REGION_PROFILES, type RegionId } from "@/lib/region";

function megabytes(bytes: number): string {
  return `${(bytes / 1_000_000).toFixed(1)} MB`;
}

function EarLoad({
  load,
  bytes,
}: {
  load: "loading" | "ready" | "error";
  bytes: { loaded: number; total: number } | null;
}) {
  if (load === "error") {
    return (
      <p className="mt-3 font-sans text-sm text-fg">The ear did not load. The line was not sent. Type it.</p>
    );
  }
  if (load === "ready") {
    return <p className="mt-3 font-sans text-sm text-fg">The ear is on this device.</p>;
  }
  const total = bytes?.total ?? 0;
  const loaded = bytes?.loaded ?? 0;
  const pct = total > 0 ? Math.max(0, Math.min(100, Math.round((loaded / total) * 100))) : 0;
  return (
    <div className="mt-3 max-w-xs">
      <p className="font-sans text-sm text-fg">
        {total > 0 ? `whisper-tiny.en · ${megabytes(loaded)} of ${megabytes(total)}` : "whisper-tiny.en · getting the size"}
      </p>
      <progress className="ear-load mt-1" value={pct} max={100} aria-label="Ear download" />
    </div>
  );
}

export function Console() {
  const [draft, setDraft] = useState("");
  const [interim, setInterim] = useState("");
  const [take, setTake] = useState<Interpretation | null>(null);
  const [gloss, setGloss] = useState<string | null>(null);
  const [reply, setReply] = useState<string | null>(null);
  const [listening, setListening] = useState(false);
  const [talking, setTalking] = useState(false);
  const [sttOk, setSttOk] = useState(false);
  const [micNote, setMicNote] = useState<string | null>(null);
  const [speaking, setSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceURI, setVoiceURI] = useState<string>("");
  const [region, setRegion] = useState<RegionId | null>(null);
  const [netCalls, setNetCalls] = useState(0);
  const [earLoad, setEarLoad] = useState<"loading" | "ready" | "error">("loading");
  const [earBytes, setEarBytes] = useState<{ loaded: number; total: number } | null>(null);
  const talkRef = useRef(false);
  const stopRef = useRef<(() => void) | null>(null);
  const applyRef = useRef<(raw: string, talk?: boolean) => void>(() => {});
  const takeRef = useRef<Interpretation | null>(null);

  useEffect(() => {
    takeRef.current = take;
  }, [take]);

  useEffect(() => {
    return warmEar({
      onProgress: (progress) => {
        setEarLoad("loading");
        setEarBytes({ loaded: progress.loaded, total: progress.total });
      },
      onReady: () => setEarLoad("ready"),
      onError: () => setEarLoad("error"),
    });
  }, []);

  useEffect(() => {
    try {
      localStorage.removeItem("choose-america.v1");
    } catch {
      /* nothing kept */
    }
    setSttOk(sttAvailable());
    if (!ttsAvailable()) return;
    const load = () => {
      const next = englishVoices();
      setVoices(next);
      setVoiceURI((current) => current || next.find((voice) => voice.lang === "en-US")?.voiceURI || next[0]?.voiceURI || "");
    };
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", load);
  }, []);

  useEffect(() => {
    setEarRegion(region);
  }, [region]);

  useEffect(
    () => () => {
      stopRef.current?.();
      stopText();
    },
    [],
  );

  useEffect(() => {
    if (!take) {
      publishDesk(null);
      return;
    }
    publishDesk(envelope(take, "line"));
  }, [take]);

  function readRaw(line: string) {
    if (!line.trim()) return;
    setSpeaking(true);
    speakText(line, voiceURI || null, () => setSpeaking(false));
  }

  function applyLine(rawInput: string, talk = false) {
    const result = interpret(rawInput);
    if (result.command.type === "escape" || result.command.type === "tot") {
      const held = takeRef.current;
      setInterim("");
      setDraft(held?.raw ?? "");
      if (result.command.type === "escape") {
        stopText();
        setSpeaking(false);
        setReply("Escape. The line stays.");
        if (held) publishDesk(envelope(held, "escape"));
        if (talk) readRaw("Escape. The line stays.");
        return;
      }
      setReply("The line stays.");
      return;
    }
    setTake(result);
    takeRef.current = result;
    setInterim("");
    setDraft(result.command.type === "drop" ? "" : result.raw);
    const glossText =
      result.command.type === "gloss" ? (lookupGloss(result.command.query) ?? "Not in the book.") : null;
    setGloss(glossText);
    if (result.command.type === "readback") {
      const prior = takeRef.current?.raw;
      setReply(prior ?? "Repeat.");
      if (prior) readRaw(prior);
      return;
    }
    const spoken = spokenReading(result, glossText);
    setReply(talk ? spoken : null);
    if (talk && result.command.type !== "drop") readRaw(spoken);
  }

  applyRef.current = applyLine;

  function stopMic() {
    talkRef.current = false;
    stopRef.current?.();
    stopRef.current = null;
    setListening(false);
    setTalking(false);
    setInterim("");
  }

  function startMic(talk: boolean) {
    stopRef.current?.();
    stopRef.current = null;
    setMicNote(null);
    setNetCalls(0);
    stopText();
    setSpeaking(false);
    talkRef.current = talk;
    const stop = startStt({
      onInterim: (text) => setInterim(text),
      onFinal: (text) => {
        setInterim("");
        applyRef.current(text, talkRef.current);
      },
      onEnd: () => {
        stopRef.current = null;
        setListening(false);
        setTalking(false);
        talkRef.current = false;
      },
      onError: (code) => {
        setListening(false);
        setTalking(false);
        talkRef.current = false;
        setInterim("");
        if (code === "not-allowed" || code === "service-not-allowed") setMicNote("Mic blocked.");
        else if (code === "unavailable") setMicNote("No on-device ear in this window. Type the line.");
        else if (code === "ear") setMicNote("The ear did not load. The line was not sent. Type it.");
        else if (code === "language-not-supported") setMicNote("No on-device English pack. Type the line.");
        else setMicNote("Repeat.");
      },
      onStatus: (status) => {
        if (status === "loading") setMicNote("Loading the on-device ear. The line stays here.");
        else if (status === "reading") setMicNote("Reading the line on this device.");
        else setMicNote("Hearing on this device.");
      },
      onNet: (count) => setNetCalls(count),
    });
    if (!stop) return;
    stopRef.current = stop;
    setListening(true);
    setTalking(talk);
  }

  const lead = take?.dialects[0];
  const shown = interim || take?.raw || "No line yet.";

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-4 py-6 sm:px-8 sm:py-10">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
        <div>
          <p className="font-sans text-xs tracking-widest text-muted uppercase">One channel</p>
          <h1 className="mt-1 flex flex-wrap items-center gap-3 font-title text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            <Flag />
            Choose America
            <span className="font-sans text-sm font-medium text-oxide">Beta</span>
          </h1>
          <p className="mt-2 max-w-xl text-pretty text-gold">{CANON}</p>
          <nav className="mt-3 flex gap-4 font-sans text-xs tracking-widest text-muted uppercase">
            <Link to="/america" className="text-fg">
              America
            </Link>
            <Link to="/ethos">Ethos</Link>
            <Link to="/privacy">Privacy</Link>
          </nav>
        </div>
        <p className="inline-flex items-center gap-2 border border-line bg-surface px-3 py-2 font-sans text-xs tracking-widest text-fg uppercase">
          <Shield className="size-3.5 text-oxide" aria-hidden="true" />
          {speaking ? "Speaking" : listening ? (talking ? "Talk" : "Listening") : "On this device"}
        </p>
      </header>

      <section className="mb-6 border border-line bg-surface p-4 sm:p-5" aria-label="Desk">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-title text-2xl text-fg">Desk</h2>
            <p className="mt-2 max-w-xl text-sm text-pretty text-fg">
              Codex v1. Hold the line. One channel. No personal account.
            </p>
          </div>
          <button
            type="button"
            onClick={() => applyLine("escape")}
            className="min-h-11 border border-line bg-bg px-4 font-sans text-xs tracking-widest text-fg uppercase"
          >
            Escape
          </button>
        </div>
      </section>

      <section className="mb-6 border border-line bg-surface p-4 sm:p-5" aria-label="Region">
        <h2 className="font-title text-2xl text-fg">Region</h2>
        <p className="mt-2 text-sm text-pretty text-muted">
          None uses the base ear. A region is a bias layer, not a fine-tune. It does not rewrite the line.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={region === null}
            onClick={() => setRegion(null)}
            className="min-h-11 border border-line bg-bg px-3 font-sans text-xs tracking-widest text-fg uppercase"
          >
            None
          </button>
          {REGION_PROFILES.map((profile) => (
            <button
              key={profile.id}
              type="button"
              aria-pressed={region === profile.id}
              onClick={() => setRegion(profile.id)}
              className="min-h-11 border border-line bg-bg px-3 text-left text-sm text-fg"
            >
              {profile.name}
              {profile.experimental ? " · experimental" : ""}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm text-pretty text-muted">
          {region ? REGION_PROFILES.find((profile) => profile.id === region)?.note : "Base model. No regional lift."}
        </p>
      </section>

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <section className="min-w-0 border border-line bg-surface p-4 sm:p-5" aria-label="Line">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-title text-2xl text-fg">Line</h2>
            <span className="font-sans text-xs text-oxide uppercase">
              {talking ? "Talk open" : listening ? "Mic open" : "Mic idle"}
            </span>
          </div>
          <form
            className="mt-4"
            onSubmit={(event) => {
              event.preventDefault();
              stopMic();
              applyLine(draft);
            }}
          >
            <label htmlFor="line" className="sr-only">
              Line
            </label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                id="line"
                value={interim || draft}
                onChange={(event) => {
                  setInterim("");
                  setDraft(event.target.value);
                }}
                placeholder="As spoken. The words stay."
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                inputMode="text"
                className="min-h-12 w-full min-w-0 border border-line bg-bg px-3 font-sans text-base text-fg placeholder:text-muted"
              />
              <button
                type="button"
                onPointerDown={(event) => {
                  if (event.button !== 0) return;
                  event.currentTarget.setPointerCapture(event.pointerId);
                  startMic(false);
                }}
                onPointerUp={() => stopMic()}
                onPointerCancel={() => stopMic()}
                disabled={!sttOk}
                aria-pressed={listening && !talking}
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-oxide px-4 text-oxide-ink disabled:opacity-40"
              >
                <Mic className="size-5" aria-hidden="true" />
                <span className="font-sans text-sm tracking-widest uppercase">Hold to speak</span>
              </button>
              <button
                type="button"
                onClick={() => (listening ? stopMic() : startMic(true))}
                disabled={!sttOk || !ttsAvailable()}
                aria-pressed={talking}
                className="inline-flex min-h-12 shrink-0 items-center justify-center border border-fg bg-fg px-4 font-sans text-sm tracking-widest text-bg uppercase disabled:opacity-40"
              >
                {talking ? "Stop" : "Talk"}
              </button>
              <button
                type="submit"
                className="min-h-12 shrink-0 border border-line bg-surface px-5 font-sans text-sm tracking-widest text-fg uppercase"
              >
                Hold
              </button>
            </div>
          </form>
          <p className="mt-3 font-sans text-sm text-fg" aria-live="polite">
            {netCalls === 0 ? (
              <span className="text-gold">Nothing left this device.</span>
            ) : (
              `${netCalls} network calls during this take.`
            )}
          </p>
          <EarLoad load={earLoad} bytes={earBytes} />
          <p className="mt-3 text-sm text-pretty text-muted">
            {micNote ??
              "Hold to speak. The words stay as spoken. Weights may be fetched once from Hugging Face. The wasm comes from the app host. The line is not sent."}
          </p>
          <div className="mt-5">
            <p className="font-sans text-xs tracking-widest text-muted uppercase">Field samples</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {SAMPLES.map((sample) => (
                <li key={sample}>
                  <button
                    type="button"
                    onClick={() => applyLine(sample)}
                    className="min-h-11 max-w-full border border-line bg-bg px-3 py-2 text-left text-sm text-fg hover:border-oxide"
                  >
                    {sample}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="min-w-0 border border-line bg-surface p-4 sm:p-5" aria-label="Reading">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-title text-2xl text-fg">Reading</h2>
            <span className="font-sans text-xs tracking-wide text-oxide uppercase">
              {lead ? dialectLabel(lead) : "No line"}
            </span>
          </div>
          <p className="mt-4 font-sans text-xs tracking-widest text-muted uppercase">Raw</p>
          <p className={`mt-2 min-h-16 border-l-2 border-oxide bg-bg px-3 py-3 font-sans text-lg leading-snug text-pretty ${interim ? "text-muted" : "text-fg"}`}>
            {shown}
          </p>
          <p className="mt-5 font-sans text-xs tracking-widest text-muted uppercase">Signals</p>
          {take && take.signals.length > 0 ? (
            <ul className="mt-2 divide-y divide-line border-y border-line">
              {take.signals.map((signal) => (
                <li key={signal.display} className="py-2">
                  <p className="font-sans text-sm text-fg">{signal.display}</p>
                  <p className="text-sm text-pretty text-muted">
                    {signal.dialects.map((id: DialectId) => dialectLabel(id)).join(" · ")} — {signal.gloss}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-sm text-muted">
              {take ? "No regional markers in the four." : "Markers show up here. They do not replace the line."}
            </p>
          )}
          <p className="mt-5 font-sans text-xs tracking-widest text-muted uppercase">Weights</p>
          <div className="mt-2 border border-line bg-bg px-3 py-3">
            <p className="font-sans text-sm text-fg">{EAR_ID}</p>
            <p className="mt-1 text-sm text-pretty text-muted">
              Not fine-tuned. {region ? "This region biases words the ear was already close to." : "No region selected. Base model."}{" "}
              A fine-tune would change the weights and would have to keep the audio. This tab does neither. Weights may be fetched once from Hugging Face. The wasm comes from the app host.
            </p>
          </div>
          <p className="mt-5 font-sans text-xs tracking-widest text-muted uppercase">Voice</p>
          <div className="mt-2 border border-line bg-bg px-3 py-3">
            <p className="text-lg text-fg">{take?.intentLabel ?? "Waiting."}</p>
            <p className="mt-1 text-sm text-pretty text-muted">
              {take?.intentDetail ?? "One line. The device voice reads the same words."}
            </p>
            {gloss ? <p className="mt-3 border-t border-line pt-3 font-sans text-sm text-fg">{gloss}</p> : null}
            {reply ? <p className="mt-3 border-t border-line pt-3 font-sans text-sm text-pretty text-fg">{reply}</p> : null}
            {voices.length > 0 ? (
              <label className="mt-3 block">
                <span className="font-sans text-xs tracking-widest text-muted uppercase">Device voice</span>
                <select
                  value={voiceURI}
                  onChange={(event) => setVoiceURI(event.target.value)}
                  className="mt-1 min-h-11 w-full border border-line bg-surface px-2 font-sans text-sm text-fg"
                >
                  {voices.map((voice) => (
                    <option key={voice.voiceURI} value={voice.voiceURI}>
                      {voice.name}
                    </option>
                  ))}
                </select>
              </label>
            ) : null}
            <div className="mt-3 flex flex-wrap gap-2">
              {take?.raw ? (
                <>
                  <button
                    type="button"
                    onClick={() => readRaw(take.raw)}
                    disabled={!ttsAvailable()}
                    className="inline-flex min-h-11 items-center gap-2 border border-oxide px-3 font-sans text-xs tracking-widest text-oxide uppercase disabled:opacity-40"
                  >
                    <Volume2 className="size-4" aria-hidden="true" />
                    Read raw
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const spoken = spokenReading(take, gloss);
                      setReply(spoken);
                      readRaw(spoken);
                    }}
                    disabled={!ttsAvailable()}
                    className="inline-flex min-h-11 items-center gap-2 border border-fg px-3 font-sans text-xs tracking-widest text-fg uppercase disabled:opacity-40"
                  >
                    <Volume2 className="size-4" aria-hidden="true" />
                    Speak reading
                  </button>
                </>
              ) : null}
              <button
                type="button"
                onClick={() => {
                  stopText();
                  setSpeaking(false);
                }}
                disabled={!speaking}
                className="inline-flex min-h-11 items-center gap-2 border border-line px-3 font-sans text-xs tracking-widest text-fg uppercase disabled:opacity-40"
              >
                <VolumeX className="size-4" aria-hidden="true" />
                Stop
              </button>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-6 border border-line bg-surface p-4 sm:p-5" aria-label="Book">
        <div className="flex items-center gap-2">
          <BookOpen className="size-4 text-oxide" aria-hidden="true" />
          <h2 className="font-title text-2xl text-fg">Four regions</h2>
        </div>
        <div className="mt-3 divide-y divide-line border-y border-line">
          {REGIONS.map((region) => {
            const hot = take?.dialects.includes(region.id) ?? false;
            return (
              <details key={region.id} className="group">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 py-2">
                  <span className="text-fg">{region.name}</span>
                  <span className="truncate font-sans text-xs text-muted">
                    {hot ? "In this line" : region.where}
                  </span>
                </summary>
                <div className="pb-4">
                  <p className="text-sm text-pretty text-muted">{region.note}</p>
                  <ul className="mt-3 space-y-2">
                    {region.lines.map((line) => (
                      <li key={line.text}>
                        <button
                          type="button"
                          onClick={() => applyLine(line.text)}
                          className="w-full min-h-11 border border-line bg-bg px-3 py-2 text-left hover:border-oxide"
                        >
                          <span className="block font-sans text-sm text-fg">{line.text}</span>
                          <span className="mt-1 block text-sm text-pretty text-muted">{line.why}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            );
          })}
        </div>
      </section>
    </main>
  );
}
