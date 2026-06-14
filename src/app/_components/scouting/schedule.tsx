"use client";

import { useMemo, useState } from "react";

import type { ScheduleEvent } from "./types";

function eventCode(key: string) {
  return key.replace(/^\d{4}/, "").toUpperCase();
}

// TBA `week` is 0-indexed (0 → "Week 1"); it's null for championships and
// offseason events, where we fall back to the start date if we have one.
function weekLabel(ev: ScheduleEvent): string | null {
  if (ev.week != null) return `Week ${ev.week + 1}`;
  if (ev.startDate) {
    const d = new Date(ev.startDate);
    if (!Number.isNaN(d.getTime())) {
      return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
    }
  }
  return null;
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
  // A pinned team (set by click) highlights its rows across every column and
  // pulls the events it appears in to the front of the list.
  const [pinnedTeam, setPinnedTeam] = useState<number | null>(null);

  // Pinning takes precedence over hover for highlighting.
  const activeTeam = pinnedTeam ?? hoverTeam;

  const orderedEvents = useMemo(() => {
    if (pinnedTeam == null) return events;
    const has = (ev: ScheduleEvent) =>
      ev.roster.some((r) => r.number === pinnedTeam);
    // Array.prototype.sort is stable, so events keep their original
    // (date) order within the "has team" / "doesn't" groups.
    return [...events].sort((a, b) => Number(has(b)) - Number(has(a)));
  }, [events, pinnedTeam]);

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
        {pinnedTeam != null && (
          <button
            className="schedule-clear"
            onClick={() => setPinnedTeam(null)}
          >
            Pinned {pinnedTeam} · clear
          </button>
        )}
      </div>
      <div
        className="event-columns"
        style={{
          gridTemplateColumns: `repeat(${orderedEvents.length}, minmax(160px, 1fr))`,
        }}
      >
        {orderedEvents.map((ev) => {
          const hasPinned =
            pinnedTeam != null &&
            ev.roster.some((r) => r.number === pinnedTeam);
          const week = weekLabel(ev);
          return (
            <article
              className={`event-col${hasPinned ? " event-col-pinned" : ""}`}
              key={ev.key}
            >
              <header className="event-head">
                <div className="event-name">{eventCode(ev.key)}</div>
                {week && <div className="event-week">{week}</div>}
              </header>
              <div className="event-roster">
                {ev.roster.map((row) => {
                  const isActive = activeTeam !== null && activeTeam === row.number;
                  const dim = activeTeam !== null && !isActive;
                  const isPinned = pinnedTeam !== null && pinnedTeam === row.number;
                  const classes = ["roster-row"];
                  if (isActive) classes.push("roster-hover");
                  if (isPinned) classes.push("roster-pinned");
                  if (dim) classes.push("roster-dim");
                  if (!row.inDistrict) classes.push("roster-guest");
                  return (
                    <div
                      key={row.number}
                      className={classes.join(" ")}
                      onMouseEnter={() => setHoverTeam(row.number)}
                      onMouseLeave={() => setHoverTeam(null)}
                      onClick={() =>
                        setPinnedTeam((prev) =>
                          prev === row.number ? null : row.number,
                        )
                      }
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
          );
        })}
      </div>
    </div>
  );
}
