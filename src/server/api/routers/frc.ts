import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const yearInput = z.object({ year: z.number().int() });
const districtInput = z.object({ districtKey: z.string().min(1) });
const eventInput = z.object({ eventKey: z.string().min(1) });
const teamInput = z.object({ teamNumber: z.number().int() });

export const frcRouter = createTRPCRouter({
  districts: publicProcedure
    .input(yearInput)
    .query(({ ctx, input }) =>
      ctx.db.district.findMany({
        where: { year: input.year },
        orderBy: { displayName: "asc" },
      }),
    ),

  // Every region across every year, deduped by abbreviation. The search bar
  // uses this so users can find a region whose abbreviation isn't in the
  // currently-selected season. The District collection isn't always
  // comprehensive — DistrictTeam is the source of truth for which regions
  // exist — so we union both: prefer District rows (they have a displayName)
  // and fall back to parsing the districtKey ("{year}{abbr}") for any
  // DistrictTeam without a matching District row.
  allDistricts: publicProcedure.query(async ({ ctx }) => {
    const [districts, links] = await Promise.all([
      ctx.db.district.findMany({ orderBy: [{ year: "desc" }] }),
      ctx.db.districtTeam.findMany({ select: { districtKey: true } }),
    ]);

    type Entry = {
      key: string;
      abbreviation: string;
      displayName: string;
      year: number;
    };
    const byAbbr = new Map<string, Entry>();

    for (const d of districts) {
      const cur = byAbbr.get(d.abbreviation);
      if (!cur || cur.year < d.year) {
        byAbbr.set(d.abbreviation, {
          key: d.key,
          abbreviation: d.abbreviation,
          displayName: d.displayName,
          year: d.year,
        });
      }
    }

    for (const link of links) {
      const year = parseInt(link.districtKey.slice(0, 4), 10);
      const abbr = link.districtKey.slice(4);
      if (!Number.isFinite(year) || !abbr) continue;
      const cur = byAbbr.get(abbr);
      if (cur && cur.year >= year) continue;
      // Either no entry yet, or a newer year exists in DistrictTeam than in
      // District — fall back to using the abbreviation as the display name.
      if (!cur) {
        byAbbr.set(abbr, {
          key: link.districtKey,
          abbreviation: abbr,
          displayName: abbr.toUpperCase(),
          year,
        });
      }
    }

    return [...byAbbr.values()].sort((a, b) =>
      a.displayName.localeCompare(b.displayName),
    );
  }),

  districtEvents: publicProcedure
    .input(districtInput)
    .query(({ ctx, input }) =>
      ctx.db.event.findMany({
        where: { districtKey: input.districtKey },
        orderBy: { startDate: "asc" },
      }),
    ),

  districtTeams: publicProcedure
    .input(districtInput)
    .query(async ({ ctx, input }) => {
      const link = await ctx.db.districtTeam.findUnique({
        where: { districtKey: input.districtKey },
        select: { teamNumbers: true },
      });
      if (!link) return [];
      return ctx.db.team.findMany({
        where: { number: { in: link.teamNumbers } },
        orderBy: { number: "asc" },
      });
    }),

  regionalEvents: publicProcedure
    .input(yearInput)
    .query(({ ctx, input }) =>
      ctx.db.event.findMany({
        where: { year: input.year, eventType: 0 },
        orderBy: { startDate: "asc" },
      }),
    ),

  eventTeams: publicProcedure
    .input(eventInput)
    .query(async ({ ctx, input }) => {
      const link = await ctx.db.eventTeam.findUnique({
        where: { eventKey: input.eventKey },
        select: { teamNumbers: true },
      });
      if (!link) return [];
      return ctx.db.team.findMany({
        where: { number: { in: link.teamNumbers } },
        orderBy: { number: "asc" },
      });
    }),

  teamAwards: publicProcedure
    .input(teamInput)
    .query(async ({ ctx, input }) => {
      const doc = await ctx.db.award.findUnique({
        where: { teamNumber: input.teamNumber },
        select: { awards: true },
      });
      return (doc?.awards ?? [])
        .slice()
        .sort(
          (a, b) => b.year - a.year || a.eventKey.localeCompare(b.eventKey),
        );
    }),

  team: publicProcedure
    .input(teamInput)
    .query(({ ctx, input }) =>
      ctx.db.team.findUnique({ where: { number: input.teamNumber } }),
    ),

  // Bulk fetch for the leaderboard: every team in a district, with their EPA
  // for the year derived from the districtKey, plus their full award history.
  boardForDistrict: publicProcedure
    .input(districtInput)
    .query(async ({ ctx, input }) => {
      const year = parseInt(input.districtKey.slice(0, 4), 10);
      const link = await ctx.db.districtTeam.findUnique({
        where: { districtKey: input.districtKey },
        select: { teamNumbers: true },
      });
      if (!link || link.teamNumbers.length === 0) {
        return { year, districtKey: input.districtKey, teams: [] };
      }
      const numbers = link.teamNumbers;

      const [teams, epaDocs, awardDocs, avatarDocs] = await Promise.all([
        ctx.db.team.findMany({
          where: { number: { in: numbers } },
          orderBy: { number: "asc" },
        }),
        ctx.db.teamEpa.findMany({
          where: { teamNumber: { in: numbers } },
          select: { teamNumber: true, epas: true },
        }),
        ctx.db.award.findMany({
          where: { teamNumber: { in: numbers } },
          select: { teamNumber: true, awards: true },
        }),
        ctx.db.teamAvatar.findMany({
          where: { teamNumber: { in: numbers } },
          select: { teamNumber: true, avatars: true },
        }),
      ]);

      const epaByTeam = new Map<number, number | null>();
      for (const row of epaDocs) {
        const entry = row.epas.find((e) => e.year === year);
        epaByTeam.set(row.teamNumber, entry?.epaUnitless ?? null);
      }

      const awardsByTeam = new Map<
        number,
        { eventKey: string; awardType: number; name: string; year: number }[]
      >();
      for (const row of awardDocs) {
        awardsByTeam.set(row.teamNumber, row.awards);
      }

      const avatarByTeam = new Map<number, string | null>();
      for (const row of avatarDocs) {
        const exact = row.avatars.find((a) => a.year === year);
        const fallback =
          exact ??
          [...row.avatars]
            .sort((a, b) => b.year - a.year)
            .find((a) => a.year <= year) ??
          null;
        avatarByTeam.set(row.teamNumber, fallback?.base64 ?? null);
      }

      return {
        year,
        districtKey: input.districtKey,
        teams: teams.map((t) => ({
          number: t.number,
          key: t.key,
          nickname: t.nickname,
          name: t.name,
          city: t.city,
          stateProv: t.stateProv,
          country: t.country,
          epa: epaByTeam.get(t.number) ?? null,
          avatarB64: avatarByTeam.get(t.number) ?? null,
          awards: awardsByTeam.get(t.number) ?? [],
        })),
      };
    }),

  // Global top-100 leaderboard for a season — drives the default landing view
  // when no district has been searched.
  topTeamsByYear: publicProcedure
    .input(z.object({ year: z.number().int(), limit: z.number().int().min(1).max(500).optional() }))
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 100;
      const epaDocs = await ctx.db.teamEpa.findMany({
        select: { teamNumber: true, epas: true },
      });

      const ranked = epaDocs
        .map((row) => {
          const entry = row.epas.find((e) => e.year === input.year);
          return entry ? { teamNumber: row.teamNumber, epa: entry.epaUnitless } : null;
        })
        .filter((x): x is { teamNumber: number; epa: number } => x !== null)
        .sort((a, b) => b.epa - a.epa)
        .slice(0, limit);

      const numbers = ranked.map((r) => r.teamNumber);
      if (numbers.length === 0) {
        return { year: input.year, teams: [] };
      }

      const [teams, awardDocs, avatarDocs, districtLinks] = await Promise.all([
        ctx.db.team.findMany({ where: { number: { in: numbers } } }),
        ctx.db.award.findMany({
          where: { teamNumber: { in: numbers } },
          select: { teamNumber: true, awards: true },
        }),
        ctx.db.teamAvatar.findMany({
          where: { teamNumber: { in: numbers } },
          select: { teamNumber: true, avatars: true },
        }),
        ctx.db.districtTeam.findMany({
          where: { districtKey: { startsWith: String(input.year) } },
          select: { districtKey: true, teamNumbers: true },
        }),
      ]);

      // The districtKey is "{year}{abbr}" (e.g. "2024chs"); strip the year
      // prefix to get the chip text. Scoping the findMany above to the year
      // means each team appears in at most one entry.
      const districtByTeam = new Map<number, string>();
      for (const link of districtLinks) {
        const abbr = link.districtKey.slice(4);
        for (const n of link.teamNumbers) {
          if (numbers.includes(n)) districtByTeam.set(n, abbr);
        }
      }

      const teamByNumber = new Map(teams.map((t) => [t.number, t]));
      const awardsByTeam = new Map<
        number,
        { eventKey: string; awardType: number; name: string; year: number }[]
      >();
      for (const row of awardDocs) {
        awardsByTeam.set(row.teamNumber, row.awards);
      }
      const avatarByTeam = new Map<number, string | null>();
      for (const row of avatarDocs) {
        const exact = row.avatars.find((a) => a.year === input.year);
        const fallback =
          exact ??
          [...row.avatars]
            .sort((a, b) => b.year - a.year)
            .find((a) => a.year <= input.year) ??
          null;
        avatarByTeam.set(row.teamNumber, fallback?.base64 ?? null);
      }

      return {
        year: input.year,
        teams: ranked.map((r) => {
          const t = teamByNumber.get(r.teamNumber);
          return {
            number: r.teamNumber,
            key: t?.key ?? `frc${r.teamNumber}`,
            nickname: t?.nickname ?? null,
            name: t?.name ?? null,
            city: t?.city ?? null,
            stateProv: t?.stateProv ?? null,
            country: t?.country ?? null,
            districtAbbr: districtByTeam.get(r.teamNumber) ?? null,
            epa: r.epa,
            avatarB64: avatarByTeam.get(r.teamNumber) ?? null,
            awards: awardsByTeam.get(r.teamNumber) ?? [],
          };
        }),
      };
    }),

  // Schedule: every event where at least one team in this district is on the
  // roster, restricted to the district's year. Returns full rosters with an
  // inDistrict flag so the UI can highlight or chip the visiting teams.
  scheduleForDistrict: publicProcedure
    .input(districtInput)
    .query(async ({ ctx, input }) => {
      const year = parseInt(input.districtKey.slice(0, 4), 10);
      if (!Number.isFinite(year)) return [];

      const link = await ctx.db.districtTeam.findUnique({
        where: { districtKey: input.districtKey },
        select: { teamNumbers: true },
      });
      if (!link || link.teamNumbers.length === 0) return [];
      const districtNumbers = link.teamNumbers;

      const eventTeams = await ctx.db.eventTeam.findMany({
        where: { teamNumbers: { hasSome: districtNumbers } },
      });
      if (eventTeams.length === 0) return [];

      const events = await ctx.db.event.findMany({
        where: {
          key: { in: eventTeams.map((et) => et.eventKey) },
          year,
        },
        orderBy: { startDate: "asc" },
      });

      const rosterByEvent = new Map<string, number[]>();
      const rosterNumberSet = new Set<number>();
      for (const et of eventTeams) {
        rosterByEvent.set(et.eventKey, et.teamNumbers);
        for (const n of et.teamNumbers) rosterNumberSet.add(n);
      }

      const rosterNumbers = [...rosterNumberSet];
      const [teams, epaDocs] = await Promise.all([
        ctx.db.team.findMany({
          where: { number: { in: rosterNumbers } },
          select: { number: true, nickname: true },
        }),
        ctx.db.teamEpa.findMany({
          where: { teamNumber: { in: rosterNumbers } },
          select: { teamNumber: true, epas: true },
        }),
      ]);
      const nicknameByNumber = new Map<number, string | null>();
      for (const t of teams) nicknameByNumber.set(t.number, t.nickname);
      const epaByNumber = new Map<number, number>();
      for (const row of epaDocs) {
        const entry = row.epas.find((e) => e.year === year);
        if (entry) epaByNumber.set(row.teamNumber, entry.epaUnitless);
      }

      const districtSet = new Set(districtNumbers);

      return events.map((ev) => {
        const roster = (rosterByEvent.get(ev.key) ?? [])
          .map((n) => ({
            number: n,
            nickname: nicknameByNumber.get(n) ?? null,
            inDistrict: districtSet.has(n),
            epa: epaByNumber.get(n) ?? null,
          }))
          .sort((a, b) => (b.epa ?? -Infinity) - (a.epa ?? -Infinity));
        return {
          key: ev.key,
          name: ev.name,
          year: ev.year,
          startDate: ev.startDate,
          endDate: ev.endDate,
          roster,
        };
      });
    }),
});
