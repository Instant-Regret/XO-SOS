"use client";

import { useState } from "react";

import type { ScheduleEvent } from "./types";

function eventCode(key: string) {
  return key.replace(/^\d{4}/, "").toUpperCase();
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
      <div
        className="event-columns"
        style={{
          gridTemplateColumns: `repeat(${events.length}, 1fr)`,
        }}
      >
        {events.map((ev) => (
          <article className="event-col" key={ev.key}>
            <header className="event-head">
              <div className="event-name">{eventCode(ev.key)}</div>
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
                    {!row.inDistrict && (
                      <span className="roster-guest-chip">G</span>
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
