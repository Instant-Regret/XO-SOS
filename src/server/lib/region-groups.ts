import "server-only";

import { db } from "~/server/db";

/**
 * Rebuild each SLFF regional grouping's team list for `year` from its events.
 *
 * A grouping's team list (stored in DistrictTeam under the grouping key, like
 * official districts) = every team on the roster of any of its events, minus
 * teams that belong to an official FIRST district that season (they're drafted
 * on their district board). A team that plays regionals in two groupings is on
 * both lists.
 *
 * Rosters change as teams register, so this runs on every sync. Only writes a
 * list when it changed. Years without RegionGroup rows are left untouched.
 */
export async function syncRegionGroups(year: number) {
  const groups = await db.regionGroup.findMany({ where: { year } });
  if (groups.length === 0) return { year, groups: 0, changed: 0 };

  const [districts, links, rosters] = await Promise.all([
    db.district.findMany({ where: { year }, select: { key: true } }),
    db.districtTeam.findMany({
      where: { districtKey: { startsWith: String(year) } },
      select: { districtKey: true, teamNumbers: true },
    }),
    db.eventTeam.findMany({
      where: { eventKey: { in: groups.flatMap((g) => g.eventKeys) } },
      select: { eventKey: true, teamNumbers: true },
    }),
  ]);

  const officialKeys = new Set(districts.map((d) => d.key));
  const officialTeams = new Set<number>();
  for (const l of links) {
    if (officialKeys.has(l.districtKey)) l.teamNumbers.forEach((n) => officialTeams.add(n));
  }
  const rosterByEvent = new Map(rosters.map((r) => [r.eventKey, r.teamNumbers]));
  const currentByKey = new Map(links.map((l) => [l.districtKey, l.teamNumbers]));

  let changed = 0;
  for (const g of groups) {
    if (officialKeys.has(g.key)) {
      // Never overwrite a real FIRST district's roster.
      console.warn(`[region-groups] ${g.key} collides with an official district; skipped`);
      continue;
    }
    const teams = new Set<number>();
    for (const ek of g.eventKeys) {
      for (const n of rosterByEvent.get(ek) ?? []) {
        if (!officialTeams.has(n)) teams.add(n);
      }
    }
    const teamNumbers = [...teams].sort((a, b) => a - b);
    const before = currentByKey.get(g.key);
    if (
      before &&
      JSON.stringify([...before].sort((a, b) => a - b)) === JSON.stringify(teamNumbers)
    ) {
      continue;
    }
    await db.districtTeam.upsert({
      where: { districtKey: g.key },
      create: { districtKey: g.key, teamNumbers },
      update: { teamNumbers },
    });
    changed++;
  }
  return { year, groups: groups.length, changed };
}
