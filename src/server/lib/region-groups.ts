import "server-only";

import { db } from "~/server/db";

/**
 * Rebuild each SLFF regional grouping's team list for `year`. The list is
 * stored in DistrictTeam under the grouping key, like official districts.
 *
 * - Grouping with an official list (RegionGroup.teamNumbers, imported from
 *   the SLFF region team-list sheet by scripts/import-region-teams.mjs): that
 *   list, plus "newcomers" — teams that registered for a grouped event after
 *   the sheet was made (on no grouping's list and not in an official FIRST
 *   district). A newcomer goes to the grouping of its earliest grouped event,
 *   so each team is still on exactly one list.
 * - Grouping without one: every team on any of its events' rosters, minus
 *   official-district teams (drafted on their district board). A team that
 *   plays regionals in two such groupings is on both.
 *
 * Rosters change as teams register, so this runs on every sync. Only writes a
 * list when it changed. Years without RegionGroup rows are left untouched.
 */
export async function syncRegionGroups(year: number) {
  const groups = await db.regionGroup.findMany({ where: { year } });
  if (groups.length === 0) return { year, groups: 0, changed: 0, newcomers: 0 };

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
  const startByEvent = new Map(
    (
      await db.event.findMany({
        where: { key: { in: groups.flatMap((g) => g.eventKeys) } },
        select: { key: true, startDate: true },
      })
    ).map((e) => [e.key, e.startDate ?? "9999"] as const),
  );

  const officialKeys = new Set(districts.map((d) => d.key));
  const officialTeams = new Set<number>();
  for (const l of links) {
    if (officialKeys.has(l.districtKey)) l.teamNumbers.forEach((n) => officialTeams.add(n));
  }
  const rosterByEvent = new Map(rosters.map((r) => [r.eventKey, r.teamNumbers]));
  const currentByKey = new Map(links.map((l) => [l.districtKey, l.teamNumbers]));

  // Newcomers: on a grouped event's roster but on no official list (and not an
  // official-district team) -> the grouping of their earliest grouped event.
  const listed = new Set(groups.flatMap((g) => g.teamNumbers ?? []));
  const newcomerHome = new Map<number, { key: string; start: string }>();
  if (listed.size > 0) {
    for (const g of groups) {
      for (const ek of g.eventKeys) {
        const start = startByEvent.get(ek) ?? "9999";
        for (const n of rosterByEvent.get(ek) ?? []) {
          if (listed.has(n) || officialTeams.has(n)) continue;
          const cur = newcomerHome.get(n);
          if (!cur || start < cur.start || (start === cur.start && g.key < cur.key)) {
            newcomerHome.set(n, { key: g.key, start });
          }
        }
      }
    }
  }

  let changed = 0;
  let newcomers = 0;
  for (const g of groups) {
    if (officialKeys.has(g.key)) {
      // Never overwrite a real FIRST district's roster.
      console.warn(`[region-groups] ${g.key} collides with an official district; skipped`);
      continue;
    }
    const teams = new Set<number>();
    if (g.teamNumbers?.length) {
      g.teamNumbers.forEach((n) => teams.add(n));
      for (const [n, home] of newcomerHome) {
        if (home.key === g.key) {
          teams.add(n);
          newcomers++;
        }
      }
    } else {
      for (const ek of g.eventKeys) {
        for (const n of rosterByEvent.get(ek) ?? []) {
          if (!officialTeams.has(n)) teams.add(n);
        }
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
  return { year, groups: groups.length, changed, newcomers };
}
