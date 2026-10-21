import {
  DIALECT_NAME,
  MARKERS,
  type DialectId,
  type Marker,
} from "./lexicon";

export type Signal = {
  display: string;
  dialects: DialectId[];
  gloss: string;
};

export type Command =
  | { type: "repeat" }
  | { type: "drop" }
  | { type: "readback" }
  | { type: "gloss"; query: string }
  | { type: "escape" }
  | { type: "tot" }
  | { type: "hold" };

export type Interpretation = {
  raw: string;
  signals: Signal[];
  dialects: DialectId[];
  command: Command;
  intentLabel: string;
  intentDetail: string;
};

const FILLER = /^(?:uh|um|hmm|mm|er|ah|huh|hm)(?:\s+(?:uh|um|hmm|mm|er|ah|huh|hm))*$/;

const MAILBOX = /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/i;
const PHONE = /(?:\+?\d{1,3}[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]\d{4}\b/;
const PASSWORD = /\bpass(?:word|code)\b/i;

export function kept(input: string): boolean {
  return !MAILBOX.test(input) && !PHONE.test(input) && !PASSWORD.test(input);
}

export function fold(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘]/g, "'")
    .replace(/[^a-z0-9'\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function soften(input: string): string {
  return input
    .replace(/[’‘]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

const sortedMarkers: { marker: Marker; phrase: string }[] = MARKERS.flatMap(
  (marker) =>
    marker.phrases.map((phrase) => ({
      marker,
      phrase: fold(phrase),
    })),
).sort((a, b) => b.phrase.length - a.phrase.length);

export function findSignals(folded: string): Signal[] {
  if (!folded) return [];
  const text = ` ${folded} `;
  const occupied: [number, number][] = [];
  const seen = new Set<string>();
  const signals: Signal[] = [];

  for (const { marker, phrase } of sortedMarkers) {
    if (!phrase) continue;
    const needle = ` ${phrase} `;
    let from = 0;
    while (from < text.length) {
      const idx = text.indexOf(needle, from);
      if (idx === -1) break;
      const start = idx + 1;
      const end = idx + needle.length - 1;
      const overlap = occupied.some(([a, b]) => start < b && end > a);
      if (!overlap && !seen.has(marker.display)) {
        occupied.push([start, end]);
        seen.add(marker.display);
        signals.push({
          display: marker.display,
          dialects: marker.dialects,
          gloss: marker.gloss,
        });
      }
      from = idx + Math.max(1, needle.length - 1);
    }
  }

  return signals;
}

function dialectRank(signals: Signal[]): DialectId[] {
  const score = new Map<DialectId, number>();
  for (const signal of signals) {
    for (const id of signal.dialects) {
      score.set(id, (score.get(id) ?? 0) + 1);
    }
  }
  return [...score.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([id]) => id);
}

function commandFor(raw: string, folded: string): Command {
  if (!kept(raw)) return { type: "drop" };
  if (!folded || FILLER.test(folded)) return { type: "repeat" };
  if (/\b(read (?:that|it) back|say (?:that|it) again|run it back)\b/.test(folded)) {
    return { type: "readback" };
  }
  if (folded === "escape" || folded === "back to the line") return { type: "escape" };
  if (folded === "tot" || folded === "text only" || folded === "open tot") return { type: "tot" };
  const gloss =
    folded.match(/\bwhat(?:'s| is| does|s)\s+(.+?)\s+mean\b/) ??
    folded.match(/\bwhat do(?:es)?\s+(.+?)\s+mean\b/);
  if (gloss?.[1]) return { type: "gloss", query: gloss[1].trim() };
  return { type: "hold" };
}

function intentFor(command: Command, signals: Signal[]): {
  intentLabel: string;
  intentDetail: string;
} {
  switch (command.type) {
    case "repeat":
      return { intentLabel: "Repeat.", intentDetail: "Nothing intelligible in that take." };
    case "drop":
      return { intentLabel: "Not kept.", intentDetail: "A mailbox, a password, or a phone number is not kept." };
    case "readback":
      return {
        intentLabel: "Read the line.",
        intentDetail: "This device says the same words. They do not leave.",
      };
    case "gloss":
      return {
        intentLabel: "Gloss.",
        intentDetail: "The word stays. The reading is local.",
      };
    case "escape":
      return {
        intentLabel: "Escape.",
        intentDetail: "Back to the line. The desk is not armed.",
      };
    case "tot":
      return {
        intentLabel: "Text only.",
        intentDetail: "The held line is set as text. It stays on this device.",
      };
    case "hold":
      return {
        intentLabel: "Held.",
        intentDetail:
          signals.length > 0
            ? "The line stays. Signals are a reading, not a rewrite."
            : "The line stays. No regional markers in the four.",
      };
    default:
      return { intentLabel: "Held.", intentDetail: "The line stays." };
  }
}

export function interpret(rawInput: string): Interpretation {
  const raw = soften(rawInput);
  if (!kept(raw)) {
    return {
      raw: "",
      signals: [],
      dialects: [],
      command: { type: "drop" },
      intentLabel: "Not kept.",
      intentDetail: "A mailbox, a password, or a phone number is not kept.",
    };
  }
  const folded = fold(raw);
  const signals = findSignals(folded);
  const command = commandFor(raw, folded);
  const { intentLabel, intentDetail } = intentFor(command, signals);
  return {
    raw,
    signals,
    dialects: dialectRank(signals),
    command,
    intentLabel,
    intentDetail,
  };
}

export function lookupGloss(query: string): string | null {
  const folded = fold(query);
  if (!folded) return null;
  let best: { len: number; gloss: string } | null = null;
  for (const marker of MARKERS) {
    for (const phrase of marker.phrases) {
      const p = fold(phrase);
      if (!p) continue;
      if (folded === p || folded.includes(p) || p.includes(folded)) {
        if (!best || p.length > best.len) best = { len: p.length, gloss: marker.gloss };
      }
    }
  }
  return best?.gloss ?? null;
}

export function dialectLabel(id: DialectId): string {
  return DIALECT_NAME[id];
}

export function spokenReading(result: Interpretation, gloss: string | null): string {
  if (result.command.type === "repeat") return "Repeat.";
  if (result.command.type === "drop") return "Not kept.";
  if (result.command.type === "readback") return result.raw;
  if (result.command.type === "escape") return "Escape. The line stays.";
  if (result.command.type === "tot") return result.raw || "No line yet.";
  if (result.command.type === "gloss") {
    return `${result.raw}. ${gloss ?? "Not in the book."}`;
  }
  const region = result.dialects[0] ? dialectLabel(result.dialects[0]) : "No regional markers";
  const marks = result.signals
    .slice(0, 3)
    .map((signal) => `${signal.display}. ${signal.gloss}`)
    .join(" ");
  return marks ? `${result.raw}. ${region}. ${marks}` : `${result.raw}. ${region}.`;
}
