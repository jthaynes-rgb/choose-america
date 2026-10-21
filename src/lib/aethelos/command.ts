import { dialectLabel, type Interpretation } from "@/lib/dialect/parse";

export const DESK = {
  codex: "v1",
  channel: "one",
  account: "none",
  armed: false,
} as const;

export type DeskPlace = "line" | "escape" | "tot";

export type CommandEnvelope = {
  codex: "v1";
  channel: "one";
  account: "none";
  armed: false;
  place: DeskPlace;
  raw: string;
  region: string | null;
  command: Interpretation["command"]["type"];
  kept: boolean;
};

export function envelope(result: Interpretation, place: DeskPlace): CommandEnvelope {
  const lead = result.dialects[0];
  return {
    codex: DESK.codex,
    channel: DESK.channel,
    account: DESK.account,
    armed: false,
    place,
    raw: result.command.type === "drop" ? "" : result.raw,
    region: lead ? dialectLabel(lead) : null,
    command: result.command.type,
    kept: result.command.type !== "drop" && result.raw.length > 0,
  };
}

export function publishDesk(next: CommandEnvelope | null) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("aethelos-command", { detail: next }));
}
