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
  const [selectedYear, setSelectedYear] = useState(2024);

  // Local-only scouting state. Keys are "{year}:{teamNumber}" so picks/stars
  // stay separate per season.
  const [picks, setPicks] = useState<Record<string, Pick>>({});
  const [stars, setStars] = useState<Record<string, number>>({});

  // The user picks a district by abbreviation; we resolve to the year-specific
  // districtKey from the districts list. That way the selection follows you
  // when you switch years (2024chs → 2025chs) as long as the district exists
  // in both seasons.
  const [selectedAbbr, setSelectedAbbr] = useState<string | null>(null);

  const districtsQ = api.frc.districts.useQuery({ year: selectedYear });
  const districts = useMemo(
    () =>
      (districtsQ.data ?? []).map((d) => ({
        key: d.key,
        abbreviation: d.abbreviation,
        displayName: d.displayName,
        year: d.year,
      })),
    [districtsQ.data],
  );

  const selectedDistrict = useMemo(
    () =>
      selectedAbbr
        ? (districts.find((d) => d.abbreviation === selectedAbbr) ?? null)
        : null,
    [districts, selectedAbbr],
  );
  const selectedDistrictKey = selectedDistrict?.key ?? null;

  const boardQ = api.frc.boardForDistrict.useQuery(
    { districtKey: selectedDistrictKey! },
    { enabled: !!selectedDistrictKey },
  );

  const scheduleQ = api.frc.scheduleForDistrict.useQuery(
    { districtKey: selectedDistrictKey! },
    { enabled: !!selectedDistrictKey && page === "schedule" },
  );

  const extraColumns = useMemo(
    () => buildExtraColumns(selectedYear),
    [selectedYear],
  );

  // Auto-pick a district if the user types its abbreviation exactly.
  useEffect(() => {
    const q = search.trim().toLowerCase();
    if (!q) return;
    const exact = districts.find(
      (d) =>
        d.abbreviation.toLowerCase() === q ||
        d.key.toLowerCase() === q ||
        d.displayName.toLowerCase() === q,
    );
    if (exact && exact.abbreviation !== selectedAbbr) {
      setSelectedAbbr(exact.abbreviation);
    }
  }, [search, districts, selectedAbbr]);

  // Build the row view from the tRPC payload + local pick/star state.
  const teamsForYear: TeamView[] = useMemo(() => {
    const data = boardQ.data;
    if (!data || !selectedDistrict) return [];
    const districtChip = selectedDistrict.abbreviation.toUpperCase();
    return data.teams.map((t) => {
      const localKey = `${data.year}:${t.number}`;
      return {
        _id: t.key, // "frc{number}"
        number: t.number,
        name: t.nickname ?? t.name ?? `Team ${t.number}`,
        region: districtChip,
        avatarUrl: `https://www.thebluealliance.com/avatar/${data.year}/frc${t.number}.png`,
        xVal: 0,
        epa: t.epa ?? 0,
        stars: stars[localKey] ?? 0,
        pickStatus: (picks[localKey] ?? DEFAULT_PICK).status,
        pickedBy: (picks[localKey] ?? DEFAULT_PICK).by,
        awardLog: bucketAwards(t.awards),
      };
    });
  }, [boardQ.data, picks, stars, selectedDistrict]);

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
    if (!boardQ.data) return;
    const number = parseInt(id.replace(/^frc/, ""), 10);
    if (!Number.isFinite(number)) return;
    const localKey = `${boardQ.data.year}:${number}`;
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
    if (!boardQ.data) return;
    const number = parseInt(id.replace(/^frc/, ""), 10);
    if (!Number.isFinite(number)) return;
    const localKey = `${boardQ.data.year}:${number}`;
    setStars((prev) => ({ ...prev, [localKey]: value }));
  };

  const events = scheduleQ.data ?? [];

  const boardEmpty = !selectedDistrictKey
    ? "Search a district above to load teams."
    : boardQ.isLoading
      ? "Loading teams…"
      : "No teams in this district.";

  return (
    <div className="app theme-dark">
      <header className="topbar">
        <Logo onClick={() => setPage("board")} />
        <SearchBar
          value={search}
          onChange={setSearch}
          districts={districts}
          loading={districtsQ.isLoading}
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
              districtAbbr={selectedDistrict?.abbreviation ?? null}
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
