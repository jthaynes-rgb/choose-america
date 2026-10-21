import { MARKERS, type DialectId } from "@/lib/dialect/lexicon";

export type RegionId = DialectId;

export type RegionProfile = {
  id: RegionId;
  name: string;
  note: string;
  experimental: boolean;
  phrases: string[];
  prompt: string;
};

const NOTES: Record<RegionId, { name: string; note: string; experimental: boolean }> = {
  gulf: {
    name: "Gulf Coast",
    note: "Creole-influenced: vowel nasalization, rhythm, loanwords. Thin open data. Experimental.",
    experimental: true,
  },
  appalachian: {
    name: "Appalachian",
    note: "Historical elisions and cadence.",
    experimental: false,
  },
  atlantic: {
    name: "Atlantic Coastal",
    note: "R-coloring variation.",
    experimental: false,
  },
  urban: {
    name: "Urban",
    note: "Pacing.",
    experimental: false,
  },
};

function phrasesFor(id: RegionId): string[] {
  return MARKERS.filter((marker) => marker.dialects.includes(id)).map((marker) => marker.display);
}

export const REGION_PROFILES: RegionProfile[] = (Object.keys(NOTES) as RegionId[]).map((id) => {
  const phrases = phrasesFor(id);
  return {
    id,
    name: NOTES[id].name,
    note: NOTES[id].note,
    experimental: NOTES[id].experimental,
    phrases,
    prompt: phrases.slice(0, 12).join(", "),
  };
});

export function regionProfile(id: RegionId | null): RegionProfile | null {
  if (!id) return null;
  return REGION_PROFILES.find((profile) => profile.id === id) ?? null;
}
