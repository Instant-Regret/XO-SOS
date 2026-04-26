"use client";

import { useEffect, useMemo, useState } from "react";

import { api } from "~/trpc/react";

import { OTHER_PICKERS, bucketAwards, type Pick } from "./data";
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

const PICK_CYCLE: Pick[] = [
  { status: "available", by: null },
  { status: "ours", by: null },
  ...OTHER_PICKERS.map((p) => ({ status: "taken" as const, by: p })),
];

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

export function ScoutingApp() {
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

  // Local-only scouting state. Keys are "{year}:{teamNumber}" so picks/stars
  // stay separate per season.
  const [picks, setPicks] = useState<Record<string, Pick>>({});
  const [stars, setStars] = useState<Record<string, number>>({});

  // The user picks a district by abbreviation; we resolve to the year-specific
  // districtKey from the districts list. That way the selection follows you
  // when you switch years (2024chs → 2025chs) as long as the district exists
  // in both seasons.
  const [selectedAbbr, setSelectedAbbr] = useState<string | null>(null);

  const allDistrictsQ = api.frc.allDistricts.useQuery();
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

  const boardQ = api.frc.boardForDistrict.useQuery(
    { districtKey: selectedDistrictKey! },
    { enabled: !!selectedDistrictKey },
  );

  const topQ = api.frc.topTeamsByYear.useQuery(
    { year: selectedYear, limit: 100 },
    { enabled: !selectedDistrictKey },
  );

  const scheduleQ = api.frc.scheduleForDistrict.useQuery(
    { districtKey: selectedDistrictKey! },
    { enabled: !!selectedDistrictKey && page === "schedule" },
  );

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
    }
  }, [search, allDistricts, selectedAbbr]);

  // Build the row view from whichever tRPC payload is active (district board
  // when one is selected, else global top-100) plus local pick/star state.
  const teamsForYear: TeamView[] = useMemo(() => {
    const buildAvatarUrl = (year: number, number: number, b64: string | null) =>
      b64
        ? `data:image/png;base64,${b64}`
        : `https://www.thebluealliance.com/avatar/${year}/frc${number}.png`;

    if (selectedAbbr) {
      const data = boardQ.data;
      if (!data) return [];
      const districtChip = selectedAbbr.toUpperCase();
      return data.teams.map((t) => {
        const localKey = `${data.year}:${t.number}`;
        return {
          _id: t.key,
          number: t.number,
          name: t.nickname ?? t.name ?? `Team ${t.number}`,
          region: districtChip,
          avatarUrl: buildAvatarUrl(data.year, t.number, t.avatarB64),
          xVal: 0,
          epa: t.epa ?? 0,
          stars: stars[localKey] ?? 0,
          pickStatus: (picks[localKey] ?? DEFAULT_PICK).status,
          pickedBy: (picks[localKey] ?? DEFAULT_PICK).by,
          awardLog: bucketAwards(t.awards),
        };
      });
    }
    const data = topQ.data;
    if (!data) return [];
    return data.teams.map((t) => {
      const localKey = `${data.year}:${t.number}`;
      return {
        _id: t.key,
        number: t.number,
        name: t.nickname ?? t.name ?? `Team ${t.number}`,
        region: t.districtAbbr ? t.districtAbbr.toUpperCase() : "—",
        avatarUrl: buildAvatarUrl(data.year, t.number, t.avatarB64),
        xVal: 0,
        epa: t.epa ?? 0,
        stars: stars[localKey] ?? 0,
        pickStatus: (picks[localKey] ?? DEFAULT_PICK).status,
        pickedBy: (picks[localKey] ?? DEFAULT_PICK).by,
        awardLog: bucketAwards(t.awards),
      };
    });
  }, [boardQ.data, topQ.data, picks, stars, selectedAbbr]);

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

  const activeYear = boardQ.data?.year ?? topQ.data?.year ?? selectedYear;

  const cyclePick = (id: string) => {
    const number = parseInt(id.replace(/^frc/, ""), 10);
    if (!Number.isFinite(number)) return;
    const localKey = `${activeYear}:${number}`;
    setPicks((prev) => {
      const cur = prev[localKey] ?? DEFAULT_PICK;
      const idx = PICK_CYCLE.findIndex(
        (p) => p.status === cur.status && p.by === (cur.by ?? null),
      );
      const next = PICK_CYCLE[(Math.max(0, idx) + 1) % PICK_CYCLE.length]!;
      return { ...prev, [localKey]: { status: next.status, by: next.by } };
    });
  };

  const setStarsFor = (id: string, value: number) => {
    const number = parseInt(id.replace(/^frc/, ""), 10);
    if (!Number.isFinite(number)) return;
    const localKey = `${activeYear}:${number}`;
    setStars((prev) => ({ ...prev, [localKey]: value }));
  };

  const events = scheduleQ.data ?? [];

  const boardEmpty = selectedDistrictKey
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
          loading={allDistrictsQ.isLoading}
          onPickDistrict={(d) => {
            setSelectedAbbr(d.abbreviation);
            setSearch(d.abbreviation.toUpperCase());
          }}
        />
        <div className="topbar-right">
          <YearPicker value={selectedYear} onChange={setSelectedYear} />
          <AccountMenu />
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
