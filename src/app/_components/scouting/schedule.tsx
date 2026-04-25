"use client";

import { useState } from "react";

import type { ScheduleEvent } from "./types";

function formatDateRange(start: string | null, end: string | null) {
  if (!start && !end) return "";
  if (start && end && start !== end) return `${start} – ${end}`;
  return start ?? end ?? "";
}

export function SchedulePage({
  districtAbbr,
  districtKey,
  events,
  loading,
}: {
  districtAbbr: string | null;
  districtKey: string | null;
  events: ScheduleEvent[];
  loading?: boolean;
}) {
  const [hoverTeam, setHoverTeam] = useState<number | null>(null);

  if (!districtKey) {
    return (
      <div className="schedule">
        <div className="empty">
          Search a district above to view its schedule.
        </div>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="schedule">
        <div className="empty">Loading schedule…</div>
      </div>
    );
  }
  if (events.length === 0) {
    return (
      <div className="schedule">
        <div className="empty">
          No events for {districtAbbr ?? districtKey}.
        </div>
      </div>
    );
  }

  return (
    <div className="schedule">
      <div className="schedule-head">
        <span className="region-chip region-chip-lg">
          {(districtAbbr ?? districtKey).toUpperCase()}
        </span>
        <span className="region-block-count">
          {events.length} event{events.length !== 1 ? "s" : ""}
        </span>
      </div>
      <div className="event-columns">
        {events.map((ev) => (
          <article className="event-col" key={ev.key}>
            <header className="event-head">
              <div className="event-name">{ev.name}</div>
              <div className="event-date">
                {formatDateRange(ev.startDate, ev.endDate)}
              </div>
            </header>
            <div className="event-roster">
              {ev.roster.map((row) => {
                const isHover = hoverTeam !== null && hoverTeam === row.number;
                const dim = hoverTeam !== null && !isHover;
                const classes = ["roster-row"];
                if (isHover) classes.push("roster-hover");
                if (dim) classes.push("roster-dim");
                if (!row.inDistrict) classes.push("roster-guest");
                return (
                  <div
                    key={row.number}
                    className={classes.join(" ")}
                    onMouseEnter={() => setHoverTeam(row.number)}
                    onMouseLeave={() => setHoverTeam(null)}
                  >
                    <span className="roster-tag">{row.number}</span>
                    <span className="roster-name">
                      {row.nickname ?? `Team ${row.number}`}
                    </span>
                    {!row.inDistrict && (
                      <span className="roster-guest-chip">GUEST</span>
                    )}
                    <span className="roster-pick" />
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
