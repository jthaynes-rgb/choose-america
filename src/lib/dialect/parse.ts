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
  | { type: "wipe" }
  | { type: "readback" }
  | { type: "time" }
  | { type: "timer"; ms: number; label: string }
  | { type: "gloss"; query: string }
  | { type: "note"; text: string }
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

const NUMBER_WORDS: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  fifteen: 15,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
};

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

  if (/\bcome with$/.test(folded) || /\bcoming with$/.test(folded)) {
    signals.push({
      display: "come with",
      dialects: ["upper-midwest"],
      gloss: "Motion verb plus with, and no object. You coming with? is complete.",
    });
  }

  return signals;
}

function dialectRank(signals: Signal[]): DialectId[] {
  const score = new Map<DialectId, number>();
  for (const signal of signals) {
    for (const id of signal.dialects) {
      const weight = id === "widespread" ? 0.25 : 1;
      score.set(id, (score.get(id) ?? 0) + weight);
    }
  }
  return [...score.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([id]) => id);
}

function durationLabel(ms: number): string {
  const total = Math.round(ms / 1000);
  if (total < 60) return `${total} second${total === 1 ? "" : "s"}`;
  const minutes = Math.round(total / 60);
  if (total < 3600) return `${minutes} minute${minutes === 1 ? "" : "s"}`;
  const hours = Math.round(total / 3600);
  return `${hours} hour${hours === 1 ? "" : "s"}`;
}

function parseDuration(folded: string): { ms: number; label: string } | null {
  const unit =
    "(seconds?|secs?|minutes?|mins?|hours?|hrs?)";
  const digit = folded.match(
    new RegExp(
      `(?:set (?:a |the )?timer(?: for)?|timer|give me|wake me in|in)\\s+(\\d+)\\s*${unit}`,
    ),
  );
  const word = folded.match(
    new RegExp(
      `(?:set (?:a |the )?timer(?: for)?|timer|give me|wake me in|in)\\s+(${Object.keys(NUMBER_WORDS).join("|")})\\s*${unit}`,
    ),
  );
  const hit = digit ?? word;
  if (!hit) return null;
  const amount = digit ? Number(hit[1]) : NUMBER_WORDS[hit[1]];
  if (!Number.isFinite(amount) || amount <= 0) return null;
  const unitWord = hit[2];
  const ms = /hour|hr/.test(unitWord)
    ? amount * 3600000
    : /min/.test(unitWord)
      ? amount * 60000
      : amount * 1000;
  if (ms > 24 * 3600000) return null;
  return { ms, label: durationLabel(ms) };
}

function commandFor(raw: string, folded: string): Command {
  if (!folded || FILLER.test(folded)) return { type: "repeat" };
  if (/\b(wipe the tape|clear the (?:tape|board|log|ledger)|dump the tape)\b/.test(folded)) {
    return { type: "wipe" };
  }
  if (/\b(read (?:that|it) back|say (?:that|it) again|run it back)\b/.test(folded)) {
    return { type: "readback" };
  }
  if (
    /\b(what time is it|what's the time|whats the time|got the time|what time you got|what time y'all got|y'all got the time|you got the time)\b/.test(
      folded,
    )
  ) {
    return { type: "time" };
  }
  const duration = parseDuration(folded);
  if (duration) return { type: "timer", ms: duration.ms, label: duration.label };

  const gloss =
    folded.match(/\bwhat(?:'s| is| does|s)\s+(.+?)\s+mean\b/) ??
    folded.match(/\bwhat do(?:es)?\s+(.+?)\s+mean\b/);
  if (gloss?.[1]) return { type: "gloss", query: gloss[1].trim() };

  const noted = soften(raw).match(
    /\b(?:remember|jot|write down|put down|note)\b(?:\s+(?:this|that))?\s*:?\s+(.+)$/i,
  );
  if (noted?.[1]?.trim()) return { type: "note", text: noted[1].trim() };

  return { type: "hold" };
}

function intentFor(command: Command, signals: Signal[]): {
  intentLabel: string;
  intentDetail: string;
} {
  switch (command.type) {
    case "repeat":
      return { intentLabel: "Repeat.", intentDetail: "Nothing intelligible in that take." };
    case "wipe":
      return { intentLabel: "Tape clear.", intentDetail: "Ledger and notes wiped on this device." };
    case "readback":
      return {
        intentLabel: "Read the line.",
        intentDetail: "Device voice says the same words. It will not sound like the speaker.",
      };
    case "time":
      return { intentLabel: "Time.", intentDetail: "Local clock. No network." };
    case "timer":
      return {
        intentLabel: "Timer.",
        intentDetail: `${command.label}. Stays on this page.`,
      };
    case "gloss":
      return {
        intentLabel: "Gloss.",
        intentDetail: `Look up “${command.query}”. The word stays.`,
      };
    case "note":
      return { intentLabel: "Noted.", intentDetail: "Saved on this device only." };
    case "hold":
      return {
        intentLabel: "Held.",
        intentDetail:
          signals.length > 0
            ? "No command in it. Signals are possibilities, not a rewrite."
            : "No command in it. No regional markers. Still American English.",
      };
    default:
      return { intentLabel: "Held.", intentDetail: "No command in it." };
  }
}

export function interpret(rawInput: string): Interpretation {
  const raw = soften(rawInput);
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
  if (/\bcome with\b/.test(folded) || folded === "come with") {
    const gloss = "Motion verb plus with, and no object. You coming with? is complete.";
    if (!best || best.len < 8) return gloss;
  }
  return best?.gloss ?? null;
}

export function dialectLabel(id: DialectId): string {
  return DIALECT_NAME[id];
}
