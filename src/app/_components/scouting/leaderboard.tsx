"use client";

import { ColHeader } from "./col-header";
import { AwardsCell, PickPill, StarRating, TeamMark } from "./primitives";
import type { ExtraColumn, Filters, Sort, TeamView } from "./types";

// All "extra" columns are placeholders right now: xRobot/xAwards/xSOS aren't in
// Mongo and the per-year finish columns have no source either, so every cell
// renders a long dash.
function extraValue(_team: TeamView, _col: ExtraColumn) {
  return "—";
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
}) {
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
              label="District"
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
              label="Pick status"
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
          return (
            <div key={t._id} className="row">
              <div className="col-rank">
                <span className="rank">{String(rank).padStart(2, "0")}</span>
              </div>
              <div className="col-team">
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
                  <div className="xval-fill" style={{ width: `${t.xVal}%` }} />
                </div>
              </div>
              <div className="col-epa epa-col">
                <div className="epa-num">{t.epa.toFixed(1)}</div>
                <div className="xval-bar">
                  <div
                    className="xval-fill epa-fill"
                    style={{ width: `${Math.min(100, t.epa)}%` }}
                  />
                </div>
              </div>
              <div className="col-stars">
                <StarRating
                  value={t.stars}
                  onChange={(v) => onSetStars(t._id, v)}
                />
              </div>
              <div className="col-pick">
                <PickPill
                  status={t.pickStatus}
                  pickedBy={t.pickedBy}
                  onClick={() => onCyclePick(t._id)}
                />
              </div>
              {extraColumns.map((c) => (
                <div key={c.key} className="col-extra extra-cell">
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
