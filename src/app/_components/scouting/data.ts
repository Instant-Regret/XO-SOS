// Type-only module + a couple of constants. Real data lives in MongoDB and
// is fetched via tRPC; nothing in here hits the database.

export type PickStatus = "available" | "ours" | "taken";
export type Pick = { status: PickStatus; by: string | null };

export type AwardEntry = { year: number; event: string; name?: string };

export type AwardLog = {
  eventWins: AwardEntry[];
  impact: AwardEntry[];
  ei: AwardEntry[];
  technical: AwardEntry[];
};

export const OTHER_PICKERS = [
  "@kai",
  "@rho",
  "@mira",
  "@vex",
  "@juno",
  "@pax",
];

// Years available in the season picker. Mongo holds the year inside every
// district / event key; selecting a year here drives all queries.
export const AVAILABLE_YEARS = [2026, 2025, 2024, 2023, 2022];

// Map TBA award_type integers into the four buckets the design uses.
// 0 = Chairman's / Impact, 1 = Winner, 9 = Engineering Inspiration; the
// "technical" wrench bucket is intentionally narrow — only the six awards
// the scouting team cares about land there.
const TECHNICAL_AWARD_NAMES = [
  "autonomous award",
  "creativity award",
  "excellence in engineering award",
  "industrial design award",
  "innovation in control award",
  "quality award",
];

function isTrackedTechnical(name: string) {
  const n = name.trim().toLowerCase();
  // TBA names are sometimes sponsor-prefixed ("Autonomous Award sponsored by …")
  // so match by prefix rather than equality.
  return TECHNICAL_AWARD_NAMES.some((target) => n.startsWith(target));
}

export function bucketAwards(
  awards: { eventKey: string; awardType: number; name: string; year: number }[],
): AwardLog {
  const log: AwardLog = { eventWins: [], impact: [], ei: [], technical: [] };
  for (const a of awards) {
    const entry: AwardEntry = { year: a.year, event: a.eventKey, name: a.name };
    if (a.awardType === 1) log.eventWins.push(entry);
    else if (a.awardType === 0) log.impact.push(entry);
    else if (a.awardType === 9) log.ei.push(entry);
    else if (isTrackedTechnical(a.name)) log.technical.push(entry);
  }
  return log;
}
