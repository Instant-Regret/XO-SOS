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
  pinnedTeams,
  colorByTeam,
  onTogglePin,
}: {
  districtAbbr: string | null;
  districtKey: string | null;
  events: ScheduleEvent[];
  loading?: boolean;
  // Pin state is lifted to the app so it's shared with the board and persists
  // across tab switches.
  pinnedTeams: Set<number>;
  colorByTeam: Map<number, string>;
  onTogglePin: (n: number) => void;
}) {
  const [hoverTeam, setHoverTeam] = useState<number | null>(null);

  const orderedEvents = useMemo(() => {
    // Three tiers, each kept in week order (stable sort):
    //   0 — events containing a pinned team (pulled to the left)
    //   1 — regular district events
    //   2 — "away" events (mostly out-of-district guests), floated right
    // So pinning a team brings its events left, even away events, while
    // un-pinned away events stay on the right.
    const isHighGuest = (ev: ScheduleEvent) =>
      ev.roster.length > 0 &&
      ev.roster.filter((r) => !r.inDistrict).length / ev.roster.length > 0.5;
    const tier = (ev: ScheduleEvent) => {
      if (ev.roster.some((r) => pinnedTeams.has(r.number))) return 0;
      return isHighGuest(ev) ? 2 : 1;
    };
    return [...events].sort((a, b) => tier(a) - tier(b));
  }, [events, pinnedTeams]);

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
        {pinnedTeams.size > 0 && (
          <div className="schedule-pins">
            {[...pinnedTeams]
              .sort((a, b) => a - b)
              .map((n) => (
                <button
                  key={n}
                  className="schedule-pin-chip"
                  style={
                    { "--pin": colorByTeam.get(n) } as React.CSSProperties
                  }
                  onClick={() => onTogglePin(n)}
                  title="Unpin"
                >
                  {n} ×
                </button>
              ))}
          </div>
        )}
      </div>
      <div
        className="event-columns"
        style={{
          gridTemplateColumns: `repeat(${orderedEvents.length}, minmax(160px, 1fr))`,
        }}
      >
        {orderedEvents.map((ev) => {
          const hasPinned = ev.roster.some((r) => pinnedTeams.has(r.number));
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
                {ev.roster.map((row, i) => {
                  const isPinned = pinnedTeams.has(row.number);
                  const pinColor = colorByTeam.get(row.number);
                  const isHover = !isPinned && hoverTeam === row.number;
                  const dim =
                    (pinnedTeams.size > 0 || hoverTeam !== null) &&
                    !isPinned &&
                    !isHover;
                  const classes = ["roster-row"];
                  if (isHover) classes.push("roster-hover");
                  if (isPinned) classes.push("roster-pinned");
                  if (dim) classes.push("roster-dim");
                  if (!row.inDistrict) classes.push("roster-guest");
                  return (
                    <div
                      key={row.number}
                      className={classes.join(" ")}
                      style={
                        isPinned
                          ? ({ "--pin": pinColor } as React.CSSProperties)
                          : undefined
                      }
                      onMouseEnter={() => setHoverTeam(row.number)}
                      onMouseLeave={() => setHoverTeam(null)}
                      onClick={() => onTogglePin(row.number)}
                    >
                      <span className="roster-rank">{i + 1}</span>
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
