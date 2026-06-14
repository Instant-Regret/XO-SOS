"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";

import { api } from "~/trpc/react";

import { bucketAwards, type Pick } from "./data";
import { DiscordIcon } from "./icons";
import { Leaderboard } from "./leaderboard";
import { SchedulePage } from "./schedule";
import { Sidebar } from "./sidebar";
import { AccountMenu, Logo, SearchBar, YearPicker } from "./topbar";
import type {
  ExtraColumn,
  Filters,
  PageId,
  Sort,
  TeamView,
} from "./types";

function buildExtraColumns(selectedYear: number): ExtraColumn[] {
  const years = [0, 1, 2, 3, 4].map((n) => selectedYear - n);
  return [
    { key: "xrobot", label: "XROBOT" },
    { key: "xawards", label: "XAWARDS" },
    { key: "xsos", label: "XSOS" },
    ...years.map(
      (y) =>
        ({
          key: `y${y}` as `y${number}`,
          label: String(y),
          year: y,
        }) satisfies ExtraColumn,
    ),
  ];
}

const DEFAULT_PICK: Pick = { status: "available", by: null };

// Auth gate: until a session exists, hide the entire board and show only a
// sign-in prompt. Keeping the board in a separate component means none of its
// tRPC queries fire while signed out.
export function ScoutingApp() {
  const { status } = useSession();

  if (status === "authenticated") return <ScoutingBoard />;

  return (
    <div className="auth-gate theme-dark">
      <div className="auth-card">
        <div className="logo-mark auth-logo">
          <span>X</span>
          <span>O</span>
        </div>
        <div className="auth-title">XO Sauce</div>
        <div className="auth-sub">Scouting Board</div>
        {status === "loading" ? (
          <div className="auth-loading">Loading…</div>
        ) : (
          <button
            className="btn btn-primary auth-signin"
            onClick={() => void signIn("discord")}
          >
            <DiscordIcon />
            Sign in with Discord
          </button>
        )}
      </div>
    </div>
  );
}

function ScoutingBoard() {
  const [page, setPage] = useState<PageId>("board");
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Filters>({
    pickStatus: null,
    minStars: 0,
    minX: 0,
    search: null,
  });
  const [sort, setSort] = useState<Sort>({ key: "epa", dir: "desc" });
  const [selectedYear, setSelectedYear] = useState(2026);


  // The user picks a district by abbreviation; we resolve to the year-specific
  // districtKey from the districts list. That way the selection follows you
  // when you switch years (2024chs → 2025chs) as long as the district exists
  // in both seasons.
  const [selectedAbbr, setSelectedAbbr] = useState<string | null>(null);

  // A specific event picked from the search bar. Takes precedence over the
  // region selection for the board view.
  const [selectedEventKey, setSelectedEventKey] = useState<string | null>(null);

  const allDistrictsQ = api.frc.allDistricts.useQuery();
  const allEventsQ = api.frc.allEvents.useQuery();
  const allDistricts = useMemo(
    () =>
      (allDistrictsQ.data ?? []).map((d) => ({
        key: d.key,
        abbreviation: d.abbreviation,
        displayName: d.displayName,
        year: d.year,
      })),
    [allDistrictsQ.data],
  );

  // Region selection is purely by abbreviation; the per-year districtKey is
  // just "{year}{abbr}". Constructing it directly (instead of resolving via
  // the District collection) means regions that only exist in the
  // DistrictTeam collection for a given year still load — boardForDistrict
  // returns empty teams if nothing matches, and the user gets the empty
  // state instead of silently falling back to the global top-100.
  const selectedDistrictKey = selectedAbbr
    ? `${selectedYear}${selectedAbbr}`
    : null;

  const boardForEventQ = api.frc.boardForEvent.useQuery(
    { eventKey: selectedEventKey! },
    { enabled: !!selectedEventKey },
  );

  const boardQ = api.frc.boardForDistrict.useQuery(
    { districtKey: selectedDistrictKey! },
    { enabled: !!selectedDistrictKey && !selectedEventKey },
  );

  const topQ = api.frc.topTeamsByYear.useQuery(
    { year: selectedYear, limit: 100 },
    { enabled: !selectedDistrictKey && !selectedEventKey },
  );

  const scheduleQ = api.frc.scheduleForDistrict.useQuery(
    { districtKey: selectedDistrictKey! },
    { enabled: !!selectedDistrictKey && page === "schedule" },
  );

  // Board identity for collaborative picks. scopeKey is the board itself (so a
  // team's pick state is independent per district / event / global view), and
  // scopeYear is the season it belongs to.
  const scopeKey = selectedEventKey
    ? selectedEventKey
    : selectedDistrictKey
      ? selectedDistrictKey
      : `global-${selectedYear}`;
  const scopeYear = selectedEventKey
    ? parseInt(selectedEventKey.slice(0, 4), 10)
    : selectedDistrictKey
      ? parseInt(selectedDistrictKey.slice(0, 4), 10)
      : selectedYear;

  const draftersQ = api.frc.drafters.useQuery({ year: scopeYear });
  const drafters = useMemo(() => draftersQ.data ?? [], [draftersQ.data]);

  // Shared draft state, polled so every scout converges on the same picks.
  const picksQ = api.frc.picksForScope.useQuery(
    { scopeKey },
    { refetchInterval: 8000, refetchOnWindowFocus: true },
  );
  const picksByTeam = useMemo(() => {
    const m = new Map<number, Pick>();
    for (const p of picksQ.data ?? []) {
      m.set(p.teamNumber, {
        status: p.status as Pick["status"],
        by: p.by ?? null,
      });
    }
    return m;
  }, [picksQ.data]);

  // Pick cycle: available → ours → taken by each drafter, built from the
  // per-year drafter list.
  const pickCycle = useMemo<Pick[]>(
    () => [
      { status: "available", by: null },
      { status: "ours", by: null },
      ...drafters.map((d) => ({ status: "taken" as const, by: d })),
    ],
    [drafters],
  );

  const utils = api.useUtils();
  const setPickM = api.frc.setPick.useMutation({
    // Optimistic update so the clicking scout sees the change instantly; other
    // scouts pick it up on the next poll.
    onMutate: async (vars) => {
      await utils.frc.picksForScope.cancel({ scopeKey: vars.scopeKey });
      const prev = utils.frc.picksForScope.getData({ scopeKey: vars.scopeKey });
      utils.frc.picksForScope.setData({ scopeKey: vars.scopeKey }, (old) => {
        const list = old ? [...old] : [];
        const next = {
          teamNumber: vars.teamNumber,
          status: vars.status,
          by: vars.status === "taken" ? (vars.by ?? null) : null,
        };
        const idx = list.findIndex((p) => p.teamNumber === vars.teamNumber);
        if (idx >= 0) list[idx] = next;
        else list.push(next);
        return list;
      });
      return { prev };
    },
    onError: (_err, vars, ctx) => {
      if (ctx?.prev) {
        utils.frc.picksForScope.setData({ scopeKey: vars.scopeKey }, ctx.prev);
      }
    },
    onSettled: (_data, _err, vars) => {
      void utils.frc.picksForScope.invalidate({ scopeKey: vars.scopeKey });
    },
  });

  // Shared star ratings, keyed by season and polled like picks.
  const ratingsQ = api.frc.ratingsForYear.useQuery(
    { year: scopeYear },
    { refetchInterval: 8000, refetchOnWindowFocus: true },
  );
  const ratingsByTeam = useMemo(() => {
    const m = new Map<number, number>();
    for (const r of ratingsQ.data ?? []) m.set(r.teamNumber, r.stars);
    return m;
  }, [ratingsQ.data]);

  const setRatingM = api.frc.setRating.useMutation({
    onMutate: async (vars) => {
      await utils.frc.ratingsForYear.cancel({ year: vars.year });
      const prev = utils.frc.ratingsForYear.getData({ year: vars.year });
      utils.frc.ratingsForYear.setData({ year: vars.year }, (old) => {
        const list = old ? [...old] : [];
        const idx = list.findIndex((r) => r.teamNumber === vars.teamNumber);
        const next = { teamNumber: vars.teamNumber, stars: vars.stars };
        if (idx >= 0) list[idx] = next;
        else list.push(next);
        return list;
      });
      return { prev };
    },
    onError: (_err, vars, ctx) => {
      if (ctx?.prev) {
        utils.frc.ratingsForYear.setData({ year: vars.year }, ctx.prev);
      }
    },
    onSettled: (_data, _err, vars) => {
      void utils.frc.ratingsForYear.invalidate({ year: vars.year });
    },
  });

  const extraColumns = useMemo(
    () => buildExtraColumns(selectedYear),
    [selectedYear],
  );

  // Auto-pick a district if the user types its abbreviation exactly. When the
  // search is cleared, drop the selection so the board falls back to the
  // global top-100 view.
  useEffect(() => {
    const q = search.trim().toLowerCase();
    if (!q) {
      if (selectedAbbr !== null) setSelectedAbbr(null);
      if (selectedEventKey !== null) setSelectedEventKey(null);
      return;
    }
    const exact = allDistricts.find(
      (d) =>
        d.abbreviation.toLowerCase() === q ||
        d.key.toLowerCase() === q ||
        d.displayName.toLowerCase() === q,
    );
    if (exact && exact.abbreviation !== selectedAbbr) {
      setSelectedAbbr(exact.abbreviation);
      setSelectedEventKey(null);
    }
  }, [search, allDistricts, selectedAbbr, selectedEventKey]);

  // Build the row view from whichever tRPC payload is active (district board
  // when one is selected, else global top-100) plus local pick/star state.
  const teamsForYear: TeamView[] = useMemo(() => {
    const buildAvatarUrl = (year: number, number: number, b64: string | null) =>
      b64
        ? `data:image/png;base64,${b64}`
        : `https://www.thebluealliance.com/avatar/${year}/frc${number}.png`;

    if (selectedEventKey) {
      const data = boardForEventQ.data;
      if (!data) return [];
      const eventChip = selectedEventKey.replace(/^\d{4}/, "").toUpperCase();
      return data.teams.map((t) => {
        return {
          _id: t.key,
          number: t.number,
          name: t.nickname ?? t.name ?? `Team ${t.number}`,
          region: eventChip,
          avatarUrl: buildAvatarUrl(data.year, t.number, t.avatarB64),
          xVal: 0,
          epa: t.epa ?? 0,
          stars: ratingsByTeam.get(t.number) ?? 0,
          pickStatus: (picksByTeam.get(t.number) ?? DEFAULT_PICK).status,
          pickedBy: (picksByTeam.get(t.number) ?? DEFAULT_PICK).by,
          awardLog: bucketAwards(t.awards),
        };
      });
    }

    if (selectedAbbr) {
      const data = boardQ.data;
      if (!data) return [];
      const districtChip = selectedAbbr.toUpperCase();
      return data.teams.map((t) => {
        return {
          _id: t.key,
          number: t.number,
          name: t.nickname ?? t.name ?? `Team ${t.number}`,
          region: districtChip,
          avatarUrl: buildAvatarUrl(data.year, t.number, t.avatarB64),
          xVal: 0,
          epa: t.epa ?? 0,
          stars: ratingsByTeam.get(t.number) ?? 0,
          pickStatus: (picksByTeam.get(t.number) ?? DEFAULT_PICK).status,
          pickedBy: (picksByTeam.get(t.number) ?? DEFAULT_PICK).by,
          awardLog: bucketAwards(t.awards),
        };
      });
    }
    const data = topQ.data;
    if (!data) return [];
    return data.teams.map((t) => {
      return {
        _id: t.key,
        number: t.number,
        name: t.nickname ?? t.name ?? `Team ${t.number}`,
        region: t.districtAbbr ? t.districtAbbr.toUpperCase() : "—",
        avatarUrl: buildAvatarUrl(data.year, t.number, t.avatarB64),
        xVal: 0,
        epa: t.epa ?? 0,
        stars: ratingsByTeam.get(t.number) ?? 0,
        pickStatus: (picksByTeam.get(t.number) ?? DEFAULT_PICK).status,
        pickedBy: (picksByTeam.get(t.number) ?? DEFAULT_PICK).by,
        awardLog: bucketAwards(t.awards),
      };
    });
  }, [
    boardForEventQ.data,
    boardQ.data,
    topQ.data,
    picksByTeam,
    ratingsByTeam,
    selectedAbbr,
    selectedEventKey,
  ]);

  const sorted = useMemo(() => {
    const arr = [...teamsForYear];
    const { key, dir } = sort;
    arr.sort((a, b) => {
      const av = (a as unknown as Record<string, unknown>)[key];
      const bv = (b as unknown as Record<string, unknown>)[key];
      if (av === undefined || bv === undefined) return 0;
      if (typeof av === "number" && typeof bv === "number") {
        return dir === "desc" ? bv - av : av - bv;
      }
      return dir === "desc"
        ? String(bv).localeCompare(String(av))
        : String(av).localeCompare(String(bv));
    });
    return arr;
  }, [teamsForYear, sort]);

  const rankedByEpa = useMemo(
    () => [...teamsForYear].sort((a, b) => b.epa - a.epa),
    [teamsForYear],
  );

  const visible = useMemo(() => {
    let result = sorted.filter((t) => {
      if (filters.pickStatus && t.pickStatus !== filters.pickStatus) return false;
      if (filters.minStars && t.stars < filters.minStars) return false;
      if (filters.minX && t.xVal < filters.minX) return false;
      if (
        filters.search &&
        !t.name.toLowerCase().includes(filters.search.toLowerCase())
      )
        return false;
      return true;
    });
    if (filters.pickStatus === "ours") {
      result = [...result].sort((a, b) => b.epa - a.epa);
    }
    if (filters.pickStatus === "taken") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }
    return result;
  }, [sorted, filters]);

  const cyclePick = (id: string) => {
    const number = parseInt(id.replace(/^frc/, ""), 10);
    if (!Number.isFinite(number)) return;
    const cur = picksByTeam.get(number) ?? DEFAULT_PICK;
    const idx = pickCycle.findIndex(
      (p) => p.status === cur.status && (p.by ?? null) === (cur.by ?? null),
    );
    const next = pickCycle[(Math.max(0, idx) + 1) % pickCycle.length]!;
    setPickM.mutate({
      scopeKey,
      year: scopeYear,
      teamNumber: number,
      status: next.status,
      by: next.by,
    });
  };

  const setStarsFor = (id: string, value: number) => {
    const number = parseInt(id.replace(/^frc/, ""), 10);
    if (!Number.isFinite(number)) return;
    setRatingM.mutate({ year: scopeYear, teamNumber: number, stars: value });
  };

  const events = scheduleQ.data ?? [];

  const boardEmpty = selectedEventKey
    ? boardForEventQ.isLoading
      ? "Loading teams…"
      : "No teams for this event."
    : selectedDistrictKey
      ? boardQ.isLoading
        ? "Loading teams…"
        : "No teams in this district."
      : topQ.isLoading
        ? "Loading top teams…"
        : "No teams found for this season.";

  return (
    <div className="app theme-dark">
      <header className="topbar">
        <Logo onClick={() => setPage("board")} />
        <SearchBar
          value={search}
          onChange={setSearch}
          districts={allDistricts}
          events={allEventsQ.data ?? []}
          loading={allDistrictsQ.isLoading}
          onPickDistrict={(d) => {
            setSelectedEventKey(null);
            setSelectedAbbr(d.abbreviation);
            setSearch(d.abbreviation.toUpperCase());
          }}
          onPickEvent={(e) => {
            setSelectedAbbr(null);
            setSelectedEventKey(e.key);
            setSearch(e.key.replace(/^\d{4}/, "").toUpperCase());
          }}
        />
        <div className="topbar-right">
          <YearPicker value={selectedYear} onChange={setSelectedYear} />
          <AccountMenu year={selectedYear} />
        </div>
      </header>

      <Sidebar
        page={page}
        setPage={setPage}
        teams={teamsForYear}
        filters={filters}
        setFilters={setFilters}
        eventCount={events.length}
      />

      <div className="shell">
        <main className="main">
          {page === "board" && (
            <Leaderboard
              teams={visible}
              allTeams={rankedByEpa}
              filters={filters}
              setFilters={setFilters}
              sort={sort}
              setSort={setSort}
              extraColumns={extraColumns}
              onCyclePick={cyclePick}
              onSetStars={setStarsFor}
              emptyMessage={boardEmpty}
            />
          )}
          {page === "schedule" && (
            <SchedulePage
              districtAbbr={selectedAbbr}
              districtKey={selectedDistrictKey}
              events={events}
              loading={scheduleQ.isLoading}
            />
          )}
        </main>
      </div>
    </div>
  );
}
