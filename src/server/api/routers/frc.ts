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

      const [teams, epaDocs, awardDocs] = await Promise.all([
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
          awards: awardsByTeam.get(t.number) ?? [],
        })),
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

      const teams = await ctx.db.team.findMany({
        where: { number: { in: [...rosterNumberSet] } },
        select: { number: true, nickname: true },
      });
      const nicknameByNumber = new Map<number, string | null>();
      for (const t of teams) nicknameByNumber.set(t.number, t.nickname);

      const districtSet = new Set(districtNumbers);

      return events.map((ev) => ({
        key: ev.key,
        name: ev.name,
        year: ev.year,
        startDate: ev.startDate,
        endDate: ev.endDate,
        roster: (rosterByEvent.get(ev.key) ?? []).map((n) => ({
          number: n,
          nickname: nicknameByNumber.get(n) ?? null,
          inDistrict: districtSet.has(n),
        })),
      }));
    }),
});
