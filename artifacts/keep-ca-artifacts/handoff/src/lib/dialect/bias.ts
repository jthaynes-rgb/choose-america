import { MARKERS } from "./lexicon";

export const EAR_ID = "Xenova/whisper-tiny.en";

const DENY = new Set([
  "a",
  "an",
  "and",
  "at",
  "for",
  "i",
  "if",
  "in",
  "is",
  "it",
  "of",
  "on",
  "that",
  "the",
  "to",
  "up",
  "you",
]);

export function biasPhrases(): string[] {
  return [...new Set(MARKERS.map((marker) => marker.display))];
}

export function keptPiece(piece: string): boolean {
  const word = piece.replace(/\s+/g, "").replace(/^▁/, "").toLowerCase();
  return word.length >= 2 && !DENY.has(word);
}
