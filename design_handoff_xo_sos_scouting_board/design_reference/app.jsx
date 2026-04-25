const { useState, useMemo, useEffect, useRef } = React;
const { REGIONS, OTHER_PICKERS, TEAMS, EVENTS_BY_YEAR, YEARS } = window.XO;

const PICK_CYCLE = [
  { status: "available", by: null },
  { status: "ours", by: null },
  ...OTHER_PICKERS.map(p => ({ status: "taken", by: p })),
];

function pickLabel(status, by) {
  if (status === "available") return "Available";
  if (status === "ours") return "Our pick";
  return `Taken · ${by}`;
}
function pickDotColor(status) {
  if (status === "ours") return "var(--accent)";
  if (status === "taken") return "var(--ink-3)";
  return "var(--ok)";
}

// Year picker config
const AVAILABLE_YEARS = [2026, 2025, 2024, 2023, 2022];

// Build the extra-column list for a given selected year.
// Window = selectedYear, selectedYear-1, ..., selectedYear-4
function buildExtraColumns(selectedYear) {
  const years = [0, 1, 2, 3, 4].map(n => selectedYear - n);
  return [
    { key: "xrobot",  label: "XROBOT" },
    { key: "xawards", label: "XAWARDS" },
    { key: "xsos",    label: "XSOS" },
    ...years.map(y => ({ key: `y${y}`, label: String(y), year: y })),
  ];
}

// Look up a value for a team/column/year. Year columns key off their own year;
// the rest (xrobot, xawards, xsos) pull from the selected year.
function extraValue(team, col, selectedYear) {
  if (col.key.startsWith("y")) {
    const s = team.statsByYear[col.year];
    return s ? s.finish : "—";
  }
  const s = team.statsByYear[selectedYear];
  if (!s) return "—";
  switch (col.key) {
    case "xrobot":  return s.xrobot.toFixed(1);
    case "xawards": return s.xawards;
    case "xsos":    return s.xsos.toFixed(1);
    default: return "—";
  }
}

// Extract view for selected year
function teamView(team, year) {
  const s = team.statsByYear[year] || {};
  const p = team.picksByYear[year] || { status: "available", by: null };
  return {
    ...team,
    xVal: s.xVal || 0,
    epa: s.epa || 0,
    stars: s.stars || 0,
    pickStatus: p.status,
    pickedBy: p.by,
    awardCounts: {
      eventWins: s.eventWins || 0,
      impact:    s.impact || 0,
      ei:        s.ei || 0,
      technical: s.technical || 0,
    },
    awardLog: team.awardLog || { eventWins: [], impact: [], ei: [], technical: [] },
  };
}

/* =================== Primitives =================== */

function Star({ filled, onClick, onHover, size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      onClick={onClick} onMouseEnter={onHover}
      style={{ cursor: onClick ? "pointer" : "default", display: "block" }}>
      <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6 5.9 21l1.5-6.8L2.2 9.5l6.9-.7L12 2.5z"
        fill={filled ? "var(--star)" : "none"}
        stroke={filled ? "var(--star)" : "var(--border-strong)"}
        strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function StarRating({ value, onChange, readOnly, size = 14 }) {
  const [hover, setHover] = useState(0);
  const eff = hover || value;
  return (
    <div className="stars" onMouseLeave={() => setHover(0)}>
      {[1,2,3,4,5].map(n => (
        <Star key={n} size={size} filled={n <= eff}
          onClick={readOnly ? undefined : () => onChange(value === n ? 0 : n)}
          onHover={readOnly ? undefined : () => setHover(n)} />
      ))}
    </div>
  );
}
function PickPill({ status, pickedBy, onClick }) {
  return (
    <button className={`pick pick-${status}`} onClick={onClick} title="Click to cycle pickers">
      <span className="pick-dot" style={{ background: pickDotColor(status) }} />
      {pickLabel(status, pickedBy)}
    </button>
  );
}
function TeamMark({ team }) {
  // The Blue Alliance avatar URL — falls back to a tinted number tile if the image fails.
  const [errored, setErrored] = useState(false);
  const num = team.number;
  const hue = 215 + ((num * 37) % 360);
  if (errored || !team.avatarUrl) {
    return (
      <div className="team-mark team-mark-fallback"
        style={{ background: `oklch(0.32 0.06 ${hue})`, color: `oklch(0.85 0.08 ${hue})` }}>
        {num}
      </div>
    );
  }
  return (
    <div className="team-mark team-mark-avatar">
      <img src={team.avatarUrl} alt={`Team ${num} avatar`}
        onError={() => setErrored(true)} />
    </div>
  );
}

/* Award icon with hover popover listing year + event for each instance */
function AwardIcon({ entries, kind, subkind, label }) {
  const [open, setOpen] = useState(false);
  if (!entries || entries.length === 0) return null;
  const sorted = [...entries].sort((a, b) => b.year - a.year);

  let svg = null;
  if (kind === "trophy") {
    // Trophy SVG
    svg = (
      <svg viewBox="0 0 24 28" width="20" height="22" aria-hidden="true">
        <path d="M6 3 H18 V9 a6 6 0 0 1 -12 0 Z" fill="currentColor" stroke="rgba(0,0,0,0.3)" strokeWidth="0.6"/>
        <path d="M6 5 H2 V8 a3 3 0 0 0 4 3" fill="none" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M18 5 H22 V8 a3 3 0 0 1 -4 3" fill="none" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="10" y="15" width="4" height="5" fill="currentColor"/>
        <rect x="7" y="20" width="10" height="3" rx="0.5" fill="currentColor"/>
        <rect x="5" y="23" width="14" height="3" rx="0.5" fill="currentColor"/>
      </svg>
    );
  } else if (kind === "banner") {
    svg = (
      <svg viewBox="0 0 22 28" width="18" height="22" aria-hidden="true">
        <path d="M2 1 H20 V21 L11 17 L2 21 Z" fill="currentColor" stroke="rgba(0,0,0,0.25)" strokeWidth="0.6"/>
        <path d="M2 1 H20 V4 H2 Z" fill="rgba(255,255,255,0.18)"/>
      </svg>
    );
  } else if (kind === "tool") {
    // Wrench / tool SVG
    svg = (
      <svg viewBox="0 0 24 24" width="18" height="20" aria-hidden="true">
        <path d="M14.7 2.3a5 5 0 0 0-6.6 6.4L2 14.8 4.2 17l6-6.1a5 5 0 0 0 6.5-6.6l-3 3-2.1-.4-.4-2.1 3-3z"
              fill="currentColor" stroke="rgba(0,0,0,0.25)" strokeWidth="0.6" strokeLinejoin="round"/>
      </svg>
    );
  }

  return (
    <div className={`award-icon award-${subkind || kind}`}
         onMouseEnter={() => setOpen(true)}
         onMouseLeave={() => setOpen(false)}>
      {svg}
      <span className="banner-count">{entries.length}</span>
      {open && (
        <div className="award-pop">
          <div className="award-pop-title">{label}</div>
          <ul className="award-pop-list">
            {sorted.map((e, i) => (
              <li key={i}>
                <span className="award-pop-year">{e.year}</span>
                <span className="award-pop-event">{e.event}</span>
                {e.name && <span className="award-pop-sub">{e.name}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function AwardsCell({ log }) {
  const empty = !log.eventWins.length && !log.impact.length && !log.ei.length && !log.technical.length;
  if (empty) return <span className="awards-empty">—</span>;
  return (
    <div className="awards-cell">
      <AwardIcon entries={log.eventWins} kind="trophy" subkind="trophy" label="Event wins" />
      <AwardIcon entries={log.impact}    kind="banner" subkind="impact" label="Impact / Chairman's awards" />
      <AwardIcon entries={log.ei}        kind="banner" subkind="ei"     label="Engineering Inspiration" />
      <AwardIcon entries={log.technical} kind="tool"   subkind="tool"   label="Technical awards" />
    </div>
  );
}

/* =================== Header =================== */

function Logo({ onClick }) {
  return (
    <button className="logo" onClick={onClick}>
      <div className="logo-mark"><span>X</span><span>O</span></div>
      <div className="logo-text">
        <div className="logo-title">XO Sauce</div>
        <div className="logo-sub">Scouting Board</div>
      </div>
    </button>
  );
}

function SearchBar({ value, onChange, onPickRegion }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  useEffect(() => {
    const h = (e) => { if (!wrapRef.current?.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const q = value.trim().toLowerCase();
  const suggestions = !q ? REGIONS : REGIONS.filter(r => r.toLowerCase().includes(q));
  return (
    <div className="search" ref={wrapRef}>
      <svg width="16" height="16" viewBox="0 0 24 24" className="search-icon">
        <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
      <input value={value} onFocus={() => setOpen(true)}
        onChange={(e) => { onChange(e.target.value); setOpen(true); }}
        placeholder="Search regions…" />
      {value && <button className="search-clear" onClick={() => onChange("")}>×</button>}
      {open && suggestions.length > 0 && (
        <div className="search-menu">
          <div className="search-menu-label">Regions</div>
          {suggestions.map(r => (
            <button key={r} className="search-item" onClick={() => { onPickRegion(r); setOpen(false); }}>
              <span className="region-chip">{r}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function YearPicker({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div className="yearpick" ref={ref}>
      <button className="yearpick-btn" onClick={() => setOpen(o => !o)}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/>
        </svg>
        <span className="yearpick-label">Season</span>
        <span className="yearpick-value">{value}</span>
        <svg width="10" height="10" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </button>
      {open && (
        <div className="yearpick-menu">
          {AVAILABLE_YEARS.map(y => (
            <button key={y} className={`yearpick-item ${y === value ? "on" : ""}`}
              onClick={() => { onChange(y); setOpen(false); }}>
              <span>{y}</span>
              {y === value && <span className="yearpick-check">✓</span>}
              {y === 2026 && <span className="yearpick-tag">current</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function AccountMenu({ session, onSignIn, onSignOut }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  if (!session) {
    return <button className="btn btn-primary" onClick={onSignIn}><DiscordIcon/>Sign in with Discord</button>;
  }
  return (
    <div className="account" ref={ref}>
      <button className="avatar-btn" onClick={() => setOpen(o => !o)}>
        <div className="avatar" style={{ background: session.color }}>{session.name[0].toUpperCase()}</div>
        <div className="avatar-meta">
          <div className="avatar-name">{session.name}</div>
          <div className="avatar-handle">{session.handle}</div>
        </div>
        <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </button>
      {open && (
        <div className="menu">
          <div className="menu-head">
            <div className="avatar avatar-lg" style={{ background: session.color }}>{session.name[0].toUpperCase()}</div>
            <div><div className="menu-name">{session.name}</div><div className="menu-handle">{session.handle} · via Discord</div></div>
          </div>
          <div className="menu-sep" />
          <button className="menu-item"><IconUser/> Profile</button>
          <button className="menu-item"><IconList/> My short list</button>
          <button className="menu-item"><IconGear/> Preferences</button>
          <div className="menu-sep" />
          <button className="menu-item menu-danger" onClick={onSignOut}><IconOut/> Sign out</button>
        </div>
      )}
    </div>
  );
}
function DiscordIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: 6}}><path d="M20 4.5A17 17 0 0 0 15.6 3l-.2.4a13 13 0 0 0-6.8 0L8.4 3A17 17 0 0 0 4 4.5C1.6 8.3 1 12 1.3 15.6a17 17 0 0 0 5.2 2.6l.9-1.4c-.9-.3-1.8-.7-2.6-1.2l.6-.5a12 12 0 0 0 13.2 0l.6.5c-.8.5-1.7.9-2.6 1.2l.9 1.4a17 17 0 0 0 5.2-2.6c.4-4.2-.6-7.9-3-11.1zM8.5 13.3c-1 0-1.8-.9-1.8-2 0-1.1.8-2 1.8-2s1.8.9 1.8 2c0 1.1-.8 2-1.8 2zm7 0c-1 0-1.8-.9-1.8-2 0-1.1.8-2 1.8-2s1.8.9 1.8 2c0 1.1-.8 2-1.8 2z"/></svg>;
}
const IconUser = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>;
const IconList = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 6h16M4 12h16M4 18h10"/></svg>;
const IconGear = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></svg>;
const IconOut = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3M10 17l-5-5 5-5M5 12h12"/></svg>;
const IconCal  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>;
const IconGrid = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/></svg>;
const IconStar = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6 5.9 21l1.5-6.8L2.2 9.5l6.9-.7L12 2.5z"/></svg>;
const IconLock = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>;

/* =================== Sidebar =================== */

function Sidebar({ page, setPage, teams, filters, setFilters, eventCount }) {
  const oursCount = teams.filter(t => t.pickStatus === "ours").length;
  const takenCount = teams.filter(t => t.pickStatus === "taken").length;
  const isActive = (id) => page === id && !filters.pickStatus;
  const isStatus = (s) => page === "board" && filters.pickStatus === s;

  return (
    <nav className="navbar">
      <button
        className={`nav-row ${isActive("board") ? "nav-active" : ""}`}
        onClick={() => { setPage("board"); setFilters(f => ({ ...f, pickStatus: null })); }}
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
        onClick={() => { setPage("board"); setFilters(f => ({ ...f, pickStatus: "ours" })); }}
      >
        <IconStar />
        <span>Our picks</span>
        <span className="nav-count">{oursCount}</span>
      </button>
      <button
        className={`nav-row ${isStatus("taken") ? "nav-active" : ""}`}
        onClick={() => { setPage("board"); setFilters(f => ({ ...f, pickStatus: "taken" })); }}
      >
        <IconLock />
        <span>Taken</span>
        <span className="nav-count">{takenCount}</span>
      </button>
    </nav>
  );
}

/* =================== Column header =================== */

function ColHeader({ label, sortKey, sortState, onSort, filter, align }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const isSorted = sortState?.key === sortKey;
  const dir = isSorted ? sortState.dir : null;
  return (
    <div className={`col-head ${align === "right" ? "ch-right" : ""}`} ref={ref}>
      <button className="col-head-btn" onClick={() => onSort && onSort(sortKey)}>
        {label}
        {onSort && <span className={`sort-arrow ${dir || ""}`}>{dir === "desc" ? "▼" : dir === "asc" ? "▲" : "↕"}</span>}
      </button>
      {filter && (
        <button className={`col-filter-btn ${filter.active ? "active" : ""}`} onClick={() => setOpen(o => !o)}>
          <svg width="11" height="11" viewBox="0 0 12 12"><path d="M1.5 2h9l-3.5 4v4L5 11V6L1.5 2z" fill="currentColor"/></svg>
        </button>
      )}
      {open && filter && <div className="col-popup">{filter.content({ close: () => setOpen(false) })}</div>}
    </div>
  );
}

/* =================== Leaderboard (board page) =================== */

function Leaderboard({ teams, allTeams, filters, setFilters, sort, setSort, extraColumns, selectedYear, onCyclePick, onSetStars }) {
  const toggleSort = (key) => {
    setSort(s => s.key === key
      ? { key, dir: s.dir === "desc" ? "asc" : "desc" }
      : { key, dir: ["name","tag","region","pickStatus"].includes(key) ? "asc" : "desc" });
  };
  return (
    <div className="board-scroll">
    <div className="board">
      <div className="board-head">
        <div className="col-rank">#</div>
        <div className="col-team"><ColHeader label="Team" sortKey="name" sortState={sort} onSort={toggleSort}
          filter={{
            active: !!filters.search,
            content: ({ close }) => (
              <div className="pop">
                <div className="pop-label">Team name contains</div>
                <input className="pop-input" autoFocus value={filters.search || ""}
                  onChange={e => setFilters(f => ({ ...f, search: e.target.value || null }))} placeholder="Name…" />
                <div className="pop-actions"><button className="link" onClick={() => { setFilters(f => ({ ...f, search: null })); close(); }}>Clear</button></div>
              </div>
            )
          }}/></div>
        <div className="col-region"><ColHeader label="Region" sortKey="region" sortState={sort} onSort={toggleSort}
          filter={{
            active: !!filters.region,
            content: ({ close }) => (
              <div className="pop">
                <div className="pop-label">Region</div>
                <div className="pop-chips">
                  <button className={`chipbtn ${!filters.region ? "chipbtn-on" : ""}`} onClick={() => { setFilters(f => ({ ...f, region: null })); close(); }}>All</button>
                  {REGIONS.map(r => (
                    <button key={r} className={`chipbtn ${filters.region === r ? "chipbtn-on" : ""}`}
                      onClick={() => { setFilters(f => ({ ...f, region: r })); close(); }}>{r}</button>
                  ))}
                </div>
              </div>
            )
          }}/></div>
        <div className="col-xval"><ColHeader label="xVal" sortKey="xVal" sortState={sort} onSort={toggleSort} align="right"
          filter={{
            active: filters.minX > 0,
            content: ({ close }) => (
              <div className="pop">
                <div className="pop-label">Min xVal: <b>{filters.minX || 0}</b></div>
                <input type="range" min="0" max="100" step="1" value={filters.minX || 0}
                  onChange={e => setFilters(f => ({ ...f, minX: +e.target.value }))} />
                <div className="pop-actions"><button className="link" onClick={() => { setFilters(f => ({ ...f, minX: 0 })); close(); }}>Clear</button></div>
              </div>
            )
          }}/></div>
        <div className="col-epa"><ColHeader label="EPA" sortKey="epa" sortState={sort} onSort={toggleSort} align="right" /></div>
        <div className="col-stars"><ColHeader label="Rating" sortKey="stars" sortState={sort} onSort={toggleSort}
          filter={{
            active: filters.minStars > 0,
            content: ({ close }) => (
              <div className="pop">
                <div className="pop-label">Minimum stars</div>
                <StarRating value={filters.minStars || 0} onChange={v => setFilters(f => ({ ...f, minStars: v }))} size={18}/>
                <div className="pop-actions"><button className="link" onClick={() => { setFilters(f => ({ ...f, minStars: 0 })); close(); }}>Clear</button></div>
              </div>
            )
          }}/></div>
        <div className="col-pick"><ColHeader label="Pick status" sortKey="pickStatus" sortState={sort} onSort={toggleSort}
          filter={{
            active: !!filters.pickStatus,
            content: ({ close }) => (
              <div className="pop">
                <div className="pop-label">Show</div>
                <div className="pop-chips">
                  {[["", "All"], ["available","Available"], ["ours","Our picks"], ["taken","Taken"]].map(([v, label]) => (
                    <button key={v} className={`chipbtn ${(filters.pickStatus || "") === v ? "chipbtn-on" : ""}`}
                      onClick={() => { setFilters(f => ({ ...f, pickStatus: v || null })); close(); }}>{label}</button>
                  ))}
                </div>
              </div>
            )
          }}/></div>
        {extraColumns.map(c => (
          <div key={c.key} className="col-extra">
            <ColHeader label={c.label} sortKey={c.key} sortState={sort} onSort={toggleSort} />
          </div>
        ))}
        <div className="col-awards"><div className="col-head"><span className="col-head-btn" style={{cursor:"default"}}>Awards</span></div></div>
      </div>

      {teams.length === 0 && <div className="empty">No teams match these filters.</div>}

      {teams.map(t => {
        const rank = allTeams.findIndex(x => x._id === t._id) + 1;
        return (
          <div key={t._id} className="row">
            <div className="col-rank"><span className="rank">{String(rank).padStart(2, "0")}</span></div>
            <div className="col-team">
              <TeamMark team={t} />
              <div className="team-info">
                <div className="team-name">{t.number}</div>
                <div className="team-tag">{t.name}</div>
              </div>
            </div>
            <div className="col-region"><span className="region-chip">{t.region}</span></div>
            <div className="col-xval">
              <div className="xval-num">{t.xVal.toFixed(1)}</div>
              <div className="xval-bar"><div className="xval-fill" style={{ width: `${t.xVal}%` }} /></div>
            </div>
            <div className="col-epa epa-col">
              <div className="epa-num">{t.epa.toFixed(1)}</div>
              <div className="xval-bar"><div className="xval-fill epa-fill" style={{ width: `${Math.min(100, t.epa)}%` }} /></div>
            </div>
            <div className="col-stars"><StarRating value={t.stars} onChange={v => onSetStars(t._id, v)} /></div>
            <div className="col-pick"><PickPill status={t.pickStatus} pickedBy={t.pickedBy} onClick={() => onCyclePick(t._id)} /></div>
            {extraColumns.map(c => (
              <div key={c.key} className="col-extra extra-cell">
                {extraValue(t, c, selectedYear)}
              </div>
            ))}
            <div className="col-awards"><AwardsCell log={t.awardLog} /></div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

/* =================== Schedule page =================== */

function SchedulePage({ teamById, regionFilter, events }) {
  const [hoverTeam, setHoverTeam] = useState(null);
  const filtered = regionFilter ? events.filter(e => e.region === regionFilter) : [];

  if (!regionFilter) {
    return <div className="schedule"><div className="empty">Search a region above to view its schedule.</div></div>;
  }
  if (filtered.length === 0) {
    return <div className="schedule"><div className="empty">No events for {regionFilter}.</div></div>;
  }

  return (
    <div className="schedule">
      <div className="schedule-head">
        <span className="region-chip region-chip-lg">{regionFilter}</span>
        <span className="region-block-count">{filtered.length} event{filtered.length !== 1 ? "s" : ""}</span>
      </div>
      <div className="event-columns">
        {filtered.map(ev => (
          <article className="event-col" key={ev._id}>
            <header className="event-head">
              <div className="event-name">{ev.name}</div>
              <div className="event-date">{ev.date}</div>
            </header>
            <div className="event-roster">
              {ev.roster.map(tid => {
                const t = teamById[tid];
                if (!t) return null;
                const isHover = hoverTeam && hoverTeam === tid;
                const dim = hoverTeam && !isHover;
                const classes = ["roster-row"];
                if (isHover) classes.push("roster-hover");
                if (dim) classes.push("roster-dim");
                if (t.region !== ev.region) classes.push("roster-guest");
                return (
                  <div key={tid}
                    className={classes.join(" ")}
                    onMouseEnter={() => setHoverTeam(tid)}
                    onMouseLeave={() => setHoverTeam(null)}
                  >
                    <span className="roster-tag">{t.number}</span>
                    <span className="roster-name">{t.name}</span>
                    {t.region !== ev.region && <span className="roster-guest-chip">{t.region}</span>}
                    <span className={`roster-pick pick-${t.pickStatus}`}>
                      {t.pickStatus === "ours" ? "★" : t.pickStatus === "taken" ? "×" : ""}
                    </span>
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

/* =================== App =================== */

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#3b82f6",
  "theme": "dark"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(DEFAULTS);
  const [session, setSession] = useState({ name: "Rowan", handle: "rowan#7421", color: "oklch(0.55 0.15 260)" });
  const [page, setPage] = useState("board");

  // teams is a local mutable copy carrying picksByYear + statsByYear overrides
  const [teams, setTeams] = useState(TEAMS);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ region: null, pickStatus: null, minStars: 0, minX: 0, search: null });
  const [sort, setSort] = useState({ key: "xVal", dir: "desc" });
  const [selectedYear, setSelectedYear] = useState(2026);
  const extraColumns = useMemo(() => buildExtraColumns(selectedYear), [selectedYear]);

  // Flatten teams into the selected-year view (what the table/filters see)
  const teamsForYear = useMemo(
    () => teams.map(t => teamView(t, selectedYear)),
    [teams, selectedYear]
  );
  const events = EVENTS_BY_YEAR[selectedYear] || [];

  useEffect(() => {
    const q = search.trim().toLowerCase();
    if (!q) { setFilters(f => f.region === null ? f : { ...f, region: null }); return; }
    const exact = REGIONS.find(r => r.toLowerCase() === q);
    if (exact) setFilters(f => ({ ...f, region: exact }));
  }, [search]);

  const sorted = useMemo(() => {
    const arr = [...teamsForYear];
    const { key, dir } = sort;
    arr.sort((a, b) => {
      // year columns
      if (/^y\d{4}$/.test(key)) {
        const yr = +key.slice(1);
        const av = a.statsByYear[yr]?.finish || "";
        const bv = b.statsByYear[yr]?.finish || "";
        return dir === "desc" ? bv.localeCompare(av) : av.localeCompare(bv);
      }
      // extra stat columns from selected year
      if (["xrobot", "xawards", "xsos"].includes(key)) {
        const av = a.statsByYear[selectedYear]?.[key] ?? 0;
        const bv = b.statsByYear[selectedYear]?.[key] ?? 0;
        return dir === "desc" ? bv - av : av - bv;
      }
      if (key === "awards") {
        // legacy text-awards key — no longer rendered as a column. fallback no-op.
        return 0;
      }
      if (key === "epa") {
        const av = a.statsByYear[selectedYear]?.epa ?? 0;
        const bv = b.statsByYear[selectedYear]?.epa ?? 0;
        return dir === "desc" ? bv - av : av - bv;
      }
      const av = a[key], bv = b[key];
      if (av === undefined || bv === undefined) return 0;
      if (typeof av === "number") return dir === "desc" ? bv - av : av - bv;
      return dir === "desc" ? String(bv).localeCompare(String(av)) : String(av).localeCompare(String(bv));
    });
    return arr;
  }, [teamsForYear, sort, selectedYear]);

  const rankedByXVal = useMemo(() => [...teamsForYear].sort((a, b) => b.xVal - a.xVal), [teamsForYear]);
  const teamById = useMemo(() => Object.fromEntries(teamsForYear.map(t => [t._id, t])), [teamsForYear]);

  const visible = useMemo(() => {
    let result = sorted.filter(t => {
      if (filters.region && t.region !== filters.region) return false;
      if (filters.pickStatus && t.pickStatus !== filters.pickStatus) return false;
      if (filters.minStars && t.stars < filters.minStars) return false;
      if (filters.minX && t.xVal < filters.minX) return false;
      if (filters.search && !t.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
      return true;
    });
    if (filters.pickStatus === "ours") {
      result = [...result].sort((a, b) => a.region.localeCompare(b.region) || b.xVal - a.xVal);
    }
    if (filters.pickStatus === "taken") {
      result = [...result].sort((a, b) => a.region.localeCompare(b.region) || a.name.localeCompare(b.name));
    }
    return result;
  }, [sorted, filters]);

  const cyclePick = (id) => {
    setTeams(ts => ts.map(t => {
      if (t._id !== id) return t;
      const cur = t.picksByYear[selectedYear] || { status: "available", by: null };
      const idx = PICK_CYCLE.findIndex(p => p.status === cur.status && p.by === (cur.by || null));
      const next = PICK_CYCLE[(Math.max(0, idx) + 1) % PICK_CYCLE.length];
      return {
        ...t,
        picksByYear: { ...t.picksByYear, [selectedYear]: { status: next.status, by: next.by } },
      };
    }));
  };
  const setStars = (id, stars) => setTeams(ts => ts.map(t => {
    if (t._id !== id) return t;
    const cur = t.statsByYear[selectedYear] || {};
    return {
      ...t,
      statsByYear: { ...t.statsByYear, [selectedYear]: { ...cur, stars } },
    };
  }));

  return (
    <div className={`app theme-${tweaks.theme}`} style={{ "--accent-raw": tweaks.accent }}>
      <header className="topbar">
        <Logo onClick={() => setPage("board")} />
        <SearchBar value={search} onChange={setSearch}
          onPickRegion={(r) => { setSearch(r); setFilters(f => ({ ...f, region: r })); }} />
        <div className="topbar-right">
          <YearPicker value={selectedYear} onChange={setSelectedYear} />
          <AccountMenu session={session}
            onSignIn={() => setSession({ name: "Rowan", handle: "rowan#7421", color: "oklch(0.55 0.15 260)" })}
            onSignOut={() => setSession(null)} />
        </div>
      </header>

      <Sidebar page={page} setPage={setPage} teams={teamsForYear} filters={filters} setFilters={setFilters} eventCount={events.length} />

      <div className="shell">
        <main className="main">
          {page === "board" && (
            <Leaderboard
              teams={visible} allTeams={rankedByXVal}
              filters={filters} setFilters={setFilters}
              sort={sort} setSort={setSort}
              extraColumns={extraColumns}
              selectedYear={selectedYear}
              onCyclePick={cyclePick} onSetStars={setStars} />
          )}
          {page === "schedule" && (
            <SchedulePage
              teamById={teamById}
              regionFilter={filters.region}
              events={events} />
          )}
        </main>
      </div>

      <TweaksPanel>
        <TweakSection title="Appearance">
          <TweakRadio label="Theme" value={tweaks.theme} onChange={v => setTweak("theme", v)}
            options={[{ value: "dark", label: "Dark" }, { value: "light", label: "Light" }]} />
          <TweakColor label="Accent" value={tweaks.accent} onChange={v => setTweak("accent", v)} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
