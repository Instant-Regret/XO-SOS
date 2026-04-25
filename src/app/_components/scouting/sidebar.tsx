"use client";

import { IconCal, IconGrid, IconLock, IconStar } from "./icons";
import type { Filters, PageId, TeamView } from "./types";

export function Sidebar({
  page,
  setPage,
  teams,
  filters,
  setFilters,
  eventCount,
}: {
  page: PageId;
  setPage: (p: PageId) => void;
  teams: TeamView[];
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  eventCount: number;
}) {
  const oursCount = teams.filter((t) => t.pickStatus === "ours").length;
  const takenCount = teams.filter((t) => t.pickStatus === "taken").length;
  const isActive = (id: PageId) => page === id && !filters.pickStatus;
  const isStatus = (s: "ours" | "taken") =>
    page === "board" && filters.pickStatus === s;

  return (
    <nav className="navbar">
      <button
        className={`nav-row ${isActive("board") ? "nav-active" : ""}`}
        onClick={() => {
          setPage("board");
          setFilters((f) => ({ ...f, pickStatus: null }));
        }}
      >
        <IconGrid />
        <span>Teams</span>
        <span className="nav-count">{teams.length}</span>
      </button>
      <button
        className={`nav-row ${page === "schedule" ? "nav-active" : ""}`}
        onClick={() => setPage("schedule")}
      >
        <IconCal />
        <span>Schedule</span>
        <span className="nav-count">{eventCount}</span>
      </button>
      <button
        className={`nav-row ${isStatus("ours") ? "nav-active" : ""}`}
        onClick={() => {
          setPage("board");
          setFilters((f) => ({ ...f, pickStatus: "ours" }));
        }}
      >
        <IconStar />
        <span>Our picks</span>
        <span className="nav-count">{oursCount}</span>
      </button>
      <button
        className={`nav-row ${isStatus("taken") ? "nav-active" : ""}`}
        onClick={() => {
          setPage("board");
          setFilters((f) => ({ ...f, pickStatus: "taken" }));
        }}
      >
        <IconLock />
        <span>Taken</span>
        <span className="nav-count">{takenCount}</span>
      </button>
    </nav>
  );
}
