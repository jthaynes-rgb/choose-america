import { useEffect, useRef, useState } from "react";
import { BookOpen, Mic, Shield, Square, Timer, Volume2 } from "lucide-react";
import { REGIONS, SAMPLES, type DialectId } from "@/lib/dialect/lexicon";
import {
  dialectLabel,
  interpret,
  lookupGloss,
  type Interpretation,
} from "@/lib/dialect/parse";

type LedgerItem = {
  id: string;
  at: string;
  raw: string;
  dialects: DialectId[];
  intent: string;
};

type SpeechResult = {
  isFinal: boolean;
  0: { transcript: string };
};

type SpeechEvent = {
  resultIndex: number;
  results: ArrayLike<SpeechResult>;
};

type SpeechError = { error: string };

type Rec = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((ev: SpeechEvent) => void) | null;
  onerror: ((ev: SpeechError) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

const STORE_KEY = "choose-america.v1";

function clock(date: Date): string {
  return date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
}

function speak(line: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(line);
  utter.lang = "en-US";
  window.speechSynthesis.speak(utter);
}

function beep() {
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.frequency.value = 740;
  osc.connect(gain);
  gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0.04, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);
  osc.start();
  osc.stop(ctx.currentTime + 0.22);
  osc.onended = () => void ctx.close();
}

function recognizer(): (new () => Rec) | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: new () => Rec;
    webkitSpeechRecognition?: new () => Rec;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function Console() {
  const [draft, setDraft] = useState("");
  const [interim, setInterim] = useState("");
  const [take, setTake] = useState<Interpretation | null>(null);
  const [executed, setExecuted] = useState<string | null>(null);
  const [ledger, setLedger] = useState<LedgerItem[]>([]);
  const [notes, setNotes] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [listening, setListening] = useState(false);
  const [speechOn, setSpeechOn] = useState(false);
  const [speechOk, setSpeechOk] = useState(false);
  const [micError, setMicError] = useState<string | null>(null);
  const [bins, setBins] = useState<number[]>(() => Array(12).fill(0));
  const [timerEnds, setTimerEnds] = useState<number | null>(null);
  const [timerLabel, setTimerLabel] = useState("");
  const [now, setNow] = useState(() => Date.now());
  const [reduceMotion, setReduceMotion] = useState(false);

  const ledgerRef = useRef<LedgerItem[]>([]);
  const applyRef = useRef<(raw: string) => void>(() => {});
  const streamRef = useRef<MediaStream | null>(null);
  const audioRef = useRef<AudioContext | null>(null);
  const rafRef = useRef(0);
  const recRef = useRef<Rec | null>(null);
  const beeped = useRef(false);

  useEffect(() => {
    ledgerRef.current = ledger;
  }, [ledger]);

  useEffect(() => {
    setSpeechOk(recognizer() !== null);
    try {
      const saved = localStorage.getItem(STORE_KEY);
      if (saved) {
        const data = JSON.parse(saved) as { ledger?: LedgerItem[]; notes?: string[] };
        if (Array.isArray(data.ledger)) setLedger(data.ledger.slice(0, 24));
        if (Array.isArray(data.notes)) {
          setNotes(data.notes.filter((n) => typeof n === "string").slice(0, 40));
        }
      }
    } catch {
      /* closed loop — a bad store is just empty */
    }
    setHydrated(true);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(motion.matches);
    const onMotion = () => setReduceMotion(motion.matches);
    motion.addEventListener("change", onMotion);
    return () => motion.removeEventListener("change", onMotion);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORE_KEY, JSON.stringify({ ledger, notes }));
  }, [hydrated, ledger, notes]);

  useEffect(() => {
    if (!timerEnds) return;
    const id = window.setInterval(() => setNow(Date.now()), 250);
    return () => window.clearInterval(id);
  }, [timerEnds]);

  useEffect(() => {
    if (!timerEnds) return;
    if (now < timerEnds) {
      beeped.current = false;
      return;
    }
    if (!beeped.current) {
      beeped.current = true;
      beep();
      setExecuted("Timer's up.");
      setTimerEnds(null);
    }
  }, [now, timerEnds]);

  function pushLedger(result: Interpretation) {
    if (!result.raw) return;
    const item: LedgerItem = {
      id: `${Date.now()}`,
      at: clock(new Date()),
      raw: result.raw,
      dialects: result.dialects.filter((id) => id !== "widespread").slice(0, 3),
      intent: result.intentLabel,
    };
    setLedger((prev) => [item, ...prev].slice(0, 24));
  }

  function applyLine(rawInput: string) {
    const result = interpret(rawInput);
    setTake(result);
    setDraft(result.raw);
    const cmd = result.command;

    if (cmd.type === "repeat") {
      setExecuted("Repeat.");
      return;
    }
    if (cmd.type === "wipe") {
      setLedger([]);
      setNotes([]);
      setExecuted("Tape clear.");
      return;
    }
    if (cmd.type === "readback") {
      const prior = ledgerRef.current.find((item) => item.raw && item.intent !== "Read the line.");
      if (!prior) {
        setExecuted("Repeat.");
        return;
      }
      speak(prior.raw);
      setExecuted(prior.raw);
      return;
    }
    if (cmd.type === "time") {
      setExecuted(clock(new Date()));
      pushLedger(result);
      return;
    }
    if (cmd.type === "timer") {
      beeped.current = false;
      setTimerLabel(cmd.label);
      setTimerEnds(Date.now() + cmd.ms);
      setExecuted(`${cmd.label}.`);
      pushLedger(result);
      return;
    }
    if (cmd.type === "gloss") {
      setExecuted(lookupGloss(cmd.query) ?? "Not in the book.");
      pushLedger(result);
      return;
    }
    if (cmd.type === "note") {
      setNotes((prev) => [cmd.text, ...prev].slice(0, 40));
      setExecuted("Noted.");
      pushLedger(result);
      return;
    }
    setExecuted("Held.");
    pushLedger(result);
  }

  applyRef.current = applyLine;

  function stopListen() {
    cancelAnimationFrame(rafRef.current);
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    void audioRef.current?.close();
    audioRef.current = null;
    try {
      recRef.current?.stop();
    } catch {
      /* already stopped */
    }
    recRef.current = null;
    setListening(false);
    setInterim("");
    setBins(Array(12).fill(0));
  }

  function startRec() {
    const Ctor = recognizer();
    if (!Ctor) {
      setMicError("No browser recognizer.");
      return;
    }
    const rec = new Ctor();
    rec.lang = "en-US";
    rec.interimResults = true;
    rec.continuous = false;
    rec.onresult = (ev) => {
      let interimText = "";
      let finalText = "";
      for (let i = ev.resultIndex; i < ev.results.length; i += 1) {
        const piece = ev.results[i][0].transcript;
        if (ev.results[i].isFinal) finalText += piece;
        else interimText += piece;
      }
      setInterim(interimText.trim());
      const line = finalText.trim();
      if (line) {
        setInterim("");
        applyRef.current(line);
      }
    };
    rec.onerror = (ev) => {
      if (ev.error === "aborted") return;
      if (ev.error === "not-allowed") setMicError("Mic blocked.");
      else setExecuted("Repeat.");
    };
    rec.onend = () => {
      recRef.current = null;
    };
    recRef.current = rec;
    rec.start();
  }

  async function startListen() {
    setMicError(null);
    if (!navigator.mediaDevices?.getUserMedia) {
      setMicError("No mic.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true },
      });
      streamRef.current = stream;
      const ctx = new AudioContext();
      audioRef.current = ctx;
      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 64;
      source.connect(analyser);
      const data = new Uint8Array(analyser.frequencyBinCount);
      let last = 0;
      const tick = (t: number) => {
        rafRef.current = requestAnimationFrame(tick);
        if (t - last < 80) return;
        last = t;
        analyser.getByteFrequencyData(data);
        const next = Array.from(data.slice(0, 12), (n) => n / 255);
        setBins(next);
      };
      rafRef.current = requestAnimationFrame(tick);
      setListening(true);
      if (speechOn) startRec();
    } catch {
      setMicError("Mic blocked.");
      stopListen();
    }
  }

  useEffect(() => () => stopListen(), []);

  const remain = timerEnds ? Math.max(0, timerEnds - now) : 0;
  const remainLabel =
    remain > 0
      ? `${Math.floor(remain / 60000)}:${String(Math.ceil((remain % 60000) / 1000)).padStart(2, "0")}`
      : "";

  const lead = take?.dialects.find((id) => id !== "widespread");

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-4 py-6 sm:px-8 sm:py-10">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
        <div>
          <p className="font-mono text-xs tracking-widest text-muted uppercase">Voice layer</p>
          <h1 className="mt-1 font-sans text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            Choose America
          </h1>
          <p className="mt-2 max-w-xl text-pretty text-muted">
            American English, as spoken. The line is not corrected. Intent sits beside it.
          </p>
        </div>
        <p className="inline-flex items-center gap-2 border border-line bg-surface px-3 py-2 font-mono text-xs tracking-widest text-fg uppercase">
          <Shield className="size-3.5 text-oxide" aria-hidden="true" />
          Closed loop
        </p>
      </header>

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <section className="min-w-0 border border-line bg-surface p-4 sm:p-5" aria-label="Take">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-mono text-xs tracking-widest text-muted uppercase">Take</h2>
            <span className="font-mono text-xs text-oxide uppercase">
              {listening ? "Listening" : "Idle"}
            </span>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <button
              type="button"
              onClick={() => (listening ? stopListen() : void startListen())}
              aria-pressed={listening}
              className="flex size-20 shrink-0 items-center justify-center rounded-full bg-oxide text-oxide-ink transition-transform duration-150 hover:scale-[1.03] active:scale-95"
            >
              {listening ? (
                <Square className="size-6 fill-current" aria-hidden="true" />
              ) : (
                <Mic className="size-7" aria-hidden="true" />
              )}
              <span className="sr-only">{listening ? "Stop" : "Listen"}</span>
            </button>
            <div className="min-w-0 flex-1">
              <div className="flex h-14 items-end gap-1" aria-hidden="true">
                {(reduceMotion
                  ? [bins.reduce((sum, n) => sum + n, 0) / Math.max(1, bins.length)]
                  : bins
                ).map((n, i) => (
                  <span
                    key={i}
                    className="flex-1 bg-oxide"
                    style={{ height: `${Math.max(4, Math.round(n * 56))}px` }}
                  />
                ))}
              </div>
              <p className="mt-2 font-mono text-xs text-muted">
                {micError ?? "Level only. Audio does not leave this tab."}
              </p>
            </div>
          </div>

          <form
            className="mt-6"
            onSubmit={(event) => {
              event.preventDefault();
              applyLine(draft);
            }}
          >
            <label htmlFor="line" className="font-mono text-xs tracking-widest text-muted uppercase">
              Line
            </label>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <input
                id="line"
                value={interim || draft}
                onChange={(event) => {
                  setInterim("");
                  setDraft(event.target.value);
                }}
                placeholder="As spoken. Slang stays."
                autoComplete="off"
                className="min-h-12 w-full min-w-0 border border-line bg-bg px-3 font-mono text-base text-fg placeholder:text-muted"
              />
              <button
                type="submit"
                className="min-h-12 shrink-0 border border-fg bg-fg px-5 font-mono text-sm tracking-widest text-bg uppercase"
              >
                Run
              </button>
            </div>
          </form>

          <div className="mt-5 border border-line bg-bg p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-xs tracking-widest text-muted uppercase">
                  Browser recognizer
                </p>
                <p className="mt-1 text-sm text-pretty text-muted">
                  {speechOn
                    ? "On. This browser may send audio to its own speech service. This app still does not rewrite the words."
                    : "Off. The mic here only draws a level. Type the line, or turn the recognizer on."}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={speechOn}
                disabled={!speechOk}
                onClick={() => setSpeechOn((on) => !on)}
                className={`mt-0.5 flex h-8 w-14 shrink-0 items-center border px-1 ${speechOn ? "border-oxide bg-oxide" : "border-line bg-inset"} disabled:opacity-40`}
              >
                <span
                  className={`size-5 bg-surface transition-transform ${speechOn ? "translate-x-6" : "translate-x-0"}`}
                />
                <span className="sr-only">Browser speech engine</span>
              </button>
            </div>
            {!speechOk ? (
              <p className="mt-2 font-mono text-xs text-muted">No recognizer in this browser. Type the line.</p>
            ) : null}
          </div>

          <div className="mt-5">
            <p className="font-mono text-xs tracking-widest text-muted uppercase">Field samples</p>
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

        <section className="min-w-0 border border-line bg-surface p-4 sm:p-5" aria-label="Tape">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-mono text-xs tracking-widest text-muted uppercase">Tape</h2>
            {lead ? (
              <span className="font-mono text-xs tracking-wide text-oxide uppercase">
                {dialectLabel(lead)}
              </span>
            ) : (
              <span className="font-mono text-xs text-muted uppercase">No line</span>
            )}
          </div>

          {remain > 0 ? (
            <p className="mt-4 flex items-center justify-between gap-3 border border-oxide bg-bg px-3 py-2 font-mono text-sm text-fg">
              <span className="inline-flex items-center gap-2">
                <Timer className="size-4 text-oxide" aria-hidden="true" />
                {timerLabel}
              </span>
              <span className="tabular-nums">{remainLabel}</span>
            </p>
          ) : null}

          <p className="mt-4 font-mono text-xs tracking-widest text-muted uppercase">Raw</p>
          <p className="mt-2 min-h-16 border-l-2 border-oxide bg-bg px-3 py-3 font-mono text-lg leading-snug text-pretty text-fg">
            {interim ? (
              <span className="text-muted">{interim}</span>
            ) : (
              (take?.raw || "No line yet.")
            )}
          </p>

          <p className="mt-5 font-mono text-xs tracking-widest text-muted uppercase">Signals</p>
          {take && take.signals.length > 0 ? (
            <ul className="mt-2 divide-y divide-line border-y border-line">
              {take.signals.map((signal) => (
                <li key={signal.display} className="py-2">
                  <p className="font-mono text-sm text-fg">{signal.display}</p>
                  <p className="text-sm text-pretty text-muted">
                    {signal.dialects.map(dialectLabel).join(" · ")} — {signal.gloss}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-sm text-muted">
              {take ? "No regional markers. The line still stands." : "Markers show up here. They do not replace the line."}
            </p>
          )}

          <p className="mt-5 font-mono text-xs tracking-widest text-muted uppercase">Intent</p>
          <div className="mt-2 border border-line bg-bg px-3 py-3">
            <p className="text-lg text-fg">{take?.intentLabel ?? "Waiting."}</p>
            <p className="mt-1 text-sm text-pretty text-muted">
              {take?.intentDetail ?? "Run a line. Commands execute here. The wording is left alone."}
            </p>
            {executed ? (
              <p className="mt-3 border-t border-line pt-3 font-mono text-sm text-fg">{executed}</p>
            ) : null}
            {take?.raw ? (
              <button
                type="button"
                onClick={() => speak(take.raw)}
                className="mt-3 inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-widest text-oxide uppercase"
              >
                <Volume2 className="size-4" aria-hidden="true" />
                Read raw
              </button>
            ) : null}
          </div>
        </section>
      </div>

      <section className="mt-6 border border-line bg-surface p-4 sm:p-5" aria-label="Book">
        <div className="flex items-center gap-2">
          <BookOpen className="size-4 text-oxide" aria-hidden="true" />
          <h2 className="font-mono text-xs tracking-widest text-muted uppercase">Field book</h2>
        </div>
        <p className="mt-2 max-w-2xl text-sm text-pretty text-muted">
          A pocket map of American English. Tap a line to run it. Nothing here is a correction.
        </p>
        <div className="mt-3 divide-y divide-line border-y border-line">
          {REGIONS.map((region) => {
            const hot = take?.dialects.includes(region.id) ?? false;
            return (
              <details key={region.id} className="group">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 py-2">
                  <span className="text-fg">{region.name}</span>
                  <span className="truncate font-mono text-xs text-muted">
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
                          <span className="block font-mono text-sm text-fg">{line.text}</span>
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

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="min-w-0 border border-line bg-surface p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-mono text-xs tracking-widest text-muted uppercase">Ledger</h2>
            <button
              type="button"
              onClick={() => {
                setLedger([]);
                setNotes([]);
                setExecuted("Tape clear.");
              }}
              className="min-h-11 font-mono text-xs tracking-widest text-muted uppercase"
            >
              Wipe
            </button>
          </div>
          {ledger.length === 0 ? (
            <p className="mt-3 text-sm text-muted">Nothing held yet.</p>
          ) : (
            <ol className="mt-3 divide-y divide-line border-t border-line">
              {ledger.map((item) => (
                <li key={item.id} className="py-3">
                  <p className="font-mono text-xs text-muted">
                    <span className="tabular-nums">{item.at}</span>
                    {item.dialects.length > 0 ? ` · ${item.dialects.map(dialectLabel).join(", ")}` : ""}
                    {` · ${item.intent}`}
                  </p>
                  <p className="mt-1 font-mono text-sm text-pretty text-fg">{item.raw}</p>
                </li>
              ))}
            </ol>
          )}
        </div>
        <div className="min-w-0 border border-line bg-surface p-4 sm:p-5">
          <h2 className="font-mono text-xs tracking-widest text-muted uppercase">Notes</h2>
          <p className="mt-2 text-sm text-muted">“Remember this: …” keeps the words on this device.</p>
          {notes.length === 0 ? (
            <p className="mt-3 text-sm text-muted">No notes.</p>
          ) : (
            <ul className="mt-3 space-y-2">
              {notes.map((note, index) => (
                <li key={`${note}-${index}`} className="border-l-2 border-oxide bg-bg px-3 py-2 font-mono text-sm text-fg">
                  {note}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
