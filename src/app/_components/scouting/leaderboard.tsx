"use client";

import { ColHeader } from "./col-header";
import { AwardsCell, PickPill, StarRating, TeamMark } from "./primitives";
import type { ExtraColumn, Filters, Sort, TeamView } from "./types";

// Extra-column cell text. XROBOT/XAWARDS are the predicted (or full-season)
// point values; XSOS is a 0-100 schedule percentile; the y{year} columns are
// that season's raw XVAL. Missing data renders a long dash.
function extraValue(team: TeamView, col: ExtraColumn): string {
  switch (col.key) {
    case "xrobot":
      return team.xRobot ? team.xRobot.toFixed(1) : "—";
    case "xawards":
      return team.xAwards ? team.xAwards.toFixed(1) : "—";
    case "xsos":
      return team.xsos == null ? "—" : String(team.xsos);
    default: {
      const y = col.year;
      if (y == null) return "—";
      const v = team.yearVals[y];
      return v == null ? "—" : v.toFixed(1);
    }
  }
}

export function Leaderboard({
  teams,
  allTeams,
  filters,
  setFilters,
  sort,
  setSort,
  extraColumns,
  onCyclePick,
  onSetStars,
  emptyMessage,
  canPick,
  pinnedTeams,
  colorByTeam,
  onTogglePin,
}: {
  teams: TeamView[];
  allTeams: TeamView[];
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  sort: Sort;
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
  extraColumns: ExtraColumn[];
  onCyclePick: (id: string) => void;
  onSetStars: (id: string, stars: number) => void;
  emptyMessage?: string;
  // Picks are editable only on a region board; elsewhere the column is a
  // read-only list of owners.
  canPick: boolean;
  // Pinning teams here drives the schedule's per-team highlight/colors.
  pinnedTeams: Set<number>;
  colorByTeam: Map<number, string>;
  onTogglePin: (n: number) => void;
}) {
  // Statbotics "unitless" EPA runs on a ~1500-avg, ~2000-top scale, so a raw
  // percentage bar would peg every team at 100%. Scale each bar against the
  // strongest team in view instead so the bars are actually comparable.
  const maxEpa = Math.max(1, ...allTeams.map((t) => t.epa));
  // XVAL point totals aren't a 0-100 scale, so size the bar against the
  // strongest team in view (same treatment as EPA).
  const maxX = Math.max(1, ...allTeams.map((t) => t.xVal));

  // Numeric value behind each extra column, for the heatmap gradient.
  const extraNumeric = (t: TeamView, col: ExtraColumn): number | null => {
    switch (col.key) {
      case "xrobot":
        return t.xRobot || null;
      case "xawards":
        return t.xAwards || null;
      case "xsos":
        return t.xsos;
      default:
        return col.year != null ? t.yearVals[col.year] ?? null : null;
    }
  };
  // Per-column min/max across the ranked field so each column's gradient is
  // self-scaled (conditional-formatting style).
  const extraRanges = new Map<string, { min: number; max: number }>();
  for (const col of extraColumns) {
    let min = Infinity;
    let max = -Infinity;
    for (const t of allTeams) {
      const v = extraNumeric(t, col);
      if (v == null) continue;
      if (v < min) min = v;
      if (v > max) max = v;
    }
    extraRanges.set(col.key, { min, max });
  }
  // Transparent accent tint scaling with the value (6%→40% of the accent).
  const extraBg = (t: TeamView, col: ExtraColumn): string | undefined => {
    const v = extraNumeric(t, col);
    const range = extraRanges.get(col.key);
    if (v == null || !range || range.max <= range.min) return undefined;
    const norm = (v - range.min) / (range.max - range.min);
    return `color-mix(in oklch, var(--accent) ${Math.round(6 + norm * 34)}%, transparent)`;
  };
  const toggleSort = (key: string) => {
    setSort((s) =>
      s.key === key
        ? { key, dir: s.dir === "desc" ? "asc" : "desc" }
        : {
            key,
            dir: ["name", "tag", "region", "pickStatus"].includes(key)
              ? "asc"
              : "desc",
          },
    );
  };
  return (
    <div className="board-scroll">
      <div className="board">
        <div className="board-head">
          <div className="col-rank">#</div>
          <div className="col-team">
            <ColHeader
              label="Team"
              sortKey="name"
              sortState={sort}
              onSort={toggleSort}
              filter={{
                active: !!filters.search,
                content: ({ close }) => (
                  <div className="pop">
                    <div className="pop-label">Team name contains</div>
                    <input
                      className="pop-input"
                      autoFocus
                      value={filters.search ?? ""}
                      onChange={(e) =>
                        setFilters((f) => ({
                          ...f,
                          search: e.target.value || null,
                        }))
                      }
                      placeholder="Name…"
                    />
                    <div className="pop-actions">
                      <button
                        className="link"
                        onClick={() => {
                          setFilters((f) => ({ ...f, search: null }));
                          close();
                        }}
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                ),
              }}
            />
          </div>
          <div className="col-region">
            <ColHeader
              label="Region"
              sortKey="region"
              sortState={sort}
              onSort={toggleSort}
            />
          </div>
          <div className="col-xval">
            <ColHeader
              label="xVal"
              sortKey="xVal"
              sortState={sort}
              onSort={toggleSort}
              align="right"
              filter={{
                active: filters.minX > 0,
                content: ({ close }) => (
                  <div className="pop">
                    <div className="pop-label">
                      Min xVal: <b>{filters.minX || 0}</b>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      step={1}
                      value={filters.minX || 0}
                      onChange={(e) =>
                        setFilters((f) => ({ ...f, minX: +e.target.value }))
                      }
                    />
                    <div className="pop-actions">
                      <button
                        className="link"
                        onClick={() => {
                          setFilters((f) => ({ ...f, minX: 0 }));
                          close();
                        }}
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                ),
              }}
            />
          </div>
          <div className="col-epa">
            <ColHeader
              label="EPA"
              sortKey="epa"
              sortState={sort}
              onSort={toggleSort}
              align="right"
            />
          </div>
          <div className="col-stars">
            <ColHeader
              label="Rating"
              sortKey="stars"
              sortState={sort}
              onSort={toggleSort}
              filter={{
                active: filters.minStars > 0,
                content: ({ close }) => (
                  <div className="pop">
                    <div className="pop-label">Minimum stars</div>
                    <StarRating
                      value={filters.minStars || 0}
                      onChange={(v) =>
                        setFilters((f) => ({ ...f, minStars: v }))
                      }
                      max={3}
                      size={18}
                    />
                    <div className="pop-actions">
                      <button
                        className="link"
                        onClick={() => {
                          setFilters((f) => ({ ...f, minStars: 0 }));
                          close();
                        }}
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                ),
              }}
            />
          </div>
          <div className="col-pick">
            <ColHeader
              label="Pick"
              sortKey="pickStatus"
              sortState={sort}
              onSort={toggleSort}
              filter={{
                active: !!filters.pickStatus,
                content: ({ close }) => (
                  <div className="pop">
                    <div className="pop-label">Show</div>
                    <div className="pop-chips">
                      {(
                        [
                          ["", "All"],
                          ["available", "Available"],
                          ["ours", "Our picks"],
                          ["taken", "Taken"],
                        ] as const
                      ).map(([v, label]) => (
                        <button
                          key={v}
                          className={`chipbtn ${(filters.pickStatus ?? "") === v ? "chipbtn-on" : ""}`}
                          onClick={() => {
                            setFilters((f) => ({
                              ...f,
                              pickStatus: (v || null) as Filters["pickStatus"],
                            }));
                            close();
                          }}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                ),
              }}
            />
          </div>
          {extraColumns.map((c) => (
            <div key={c.key} className="col-extra">
              <ColHeader
                label={c.label}
                sortKey={c.key}
                sortState={sort}
                onSort={toggleSort}
                align="right"
              />
            </div>
          ))}
          <div className="col-awards">
            <div className="col-head">
              <span className="col-head-btn" style={{ cursor: "default" }}>
                Awards
              </span>
            </div>
          </div>
        </div>

        {teams.length === 0 && (
          <div className="empty">
            {emptyMessage ?? "No teams match these filters."}
          </div>
        )}

        {teams.map((t) => {
          const rank = allTeams.findIndex((x) => x._id === t._id) + 1;
          const isPinned = pinnedTeams.has(t.number);
          const pinColor = colorByTeam.get(t.number);
          return (
            <div
              key={t._id}
              className={`row${isPinned ? " row-pinned" : ""}`}
              style={
                isPinned
                  ? ({ "--pin": pinColor } as React.CSSProperties)
                  : undefined
              }
            >
              <div className="col-rank">
                <span className="rank">{String(rank).padStart(2, "0")}</span>
              </div>
              <div
                className="col-team col-team-pin"
                onClick={() => onTogglePin(t.number)}
                title={isPinned ? "Unpin from schedule" : "Pin to schedule"}
              >
                <TeamMark team={t} />
                <div className="team-info">
                  <div className="team-name">{t.number}</div>
                  <div className="team-tag">{t.name}</div>
                </div>
              </div>
              <div className="col-region">
                <span className="region-chip">{t.region}</span>
              </div>
              <div className="col-xval">
                <div className="xval-num">{t.xVal.toFixed(1)}</div>
                <div className="xval-bar">
                  <div
                    className="xval-fill"
                    style={{
                      width: `${Math.max(0, Math.min(100, (t.xVal / maxX) * 100))}%`,
                    }}
                  />
                </div>
              </div>
              <div className="col-epa epa-col">
                <div className="epa-num">{t.epa.toFixed(1)}</div>
                <div className="xval-bar">
                  <div
                    className="xval-fill epa-fill"
                    style={{
                      width: `${Math.max(0, Math.min(100, (t.epa / maxEpa) * 100))}%`,
                    }}
                  />
                </div>
              </div>
              <div className="col-stars">
                <StarRating
                  value={t.stars}
                  onChange={(v) => onSetStars(t._id, v)}
                  max={3}
                />
              </div>
              <div className="col-pick">
                {canPick ? (
                  <PickPill
                    status={t.pickStatus}
                    pickedBy={t.pickedBy}
                    onClick={() => onCyclePick(t._id)}
                  />
                ) : t.owners.length > 0 ? (
                  <div className="owners-cell">
                    {t.owners.map((o) => (
                      <span
                        key={o}
                        className={`owner-chip ${o === "Ours" ? "owner-ours" : ""}`}
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="owners-empty">—</span>
                )}
              </div>
              {extraColumns.map((c) => (
                <div
                  key={c.key}
                  className="col-extra extra-cell"
                  style={{ background: extraBg(t, c) }}
                >
                  {extraValue(t, c)}
                </div>
              ))}
              <div className="col-awards">
                <AwardsCell log={t.awardLog} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
