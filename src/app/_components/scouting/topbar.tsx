"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

import { api } from "~/trpc/react";

import { AVAILABLE_YEARS } from "./data";
import {
  DiscordIcon,
  IconChevronDown,
  IconGear,
  IconList,
  IconOut,
  IconSearch,
  IconUser,
} from "./icons";
import type { DistrictLite, EventLite } from "./types";

// "2026chcmp" → "CHCMP" — drop the leading 4-digit year for display.
function eventCode(key: string) {
  return key.replace(/^\d{4}/, "").toUpperCase();
}

export function Logo({ onClick }: { onClick: () => void }) {
  return (
    <button className="logo" onClick={onClick}>
      <div className="logo-mark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="logo-img" src="/xosos.png" alt="XOSOS" />
      </div>
      <div className="logo-text">
        <div className="logo-title">XOSOS</div>
        <div className="logo-sub">Scouting Board</div>
      </div>
    </button>
  );
}

export function SearchBar({
  value,
  onChange,
  districts,
  events,
  onPickDistrict,
  onPickEvent,
  loading,
}: {
  value: string;
  onChange: (v: string) => void;
  districts: DistrictLite[];
  events: EventLite[];
  onPickDistrict: (d: DistrictLite) => void;
  onPickEvent: (e: EventLite) => void;
  loading?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const q = value.trim().toLowerCase();
  const regionMatches = !q
    ? districts
    : districts.filter(
        (d) =>
          d.abbreviation.toLowerCase().includes(q) ||
          d.displayName.toLowerCase().includes(q) ||
          d.key.toLowerCase().includes(q),
      );
  // Only suggest events once the user has typed something — the full list is
  // thousands of rows. Cap the visible matches so the menu stays usable.
  const eventMatches = !q
    ? []
    : events
        .filter(
          (e) =>
            e.key.toLowerCase().includes(q) ||
            e.name.toLowerCase().includes(q),
        )
        .slice(0, 30);
  return (
    <div className="search" ref={wrapRef}>
      <IconSearch />
      <input
        value={value}
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(true);
        }}
        placeholder="Search regions & events…"
      />
      {value && (
        <button className="search-clear" onClick={() => onChange("")}>
          ×
        </button>
      )}
      {open && (
        <div className="search-menu">
          <div className="search-menu-label">Regions</div>
          {loading && (
            <div
              className="search-item"
              style={{ pointerEvents: "none", color: "var(--ink-3)" }}
            >
              Loading…
            </div>
          )}
          {!loading && regionMatches.length === 0 && (
            <div
              className="search-item"
              style={{ pointerEvents: "none", color: "var(--ink-3)" }}
            >
              No regions match.
            </div>
          )}
          {regionMatches.map((d) => (
            <button
              key={d.key}
              className="search-item"
              onClick={() => {
                onPickDistrict(d);
                setOpen(false);
              }}
            >
              <span className="region-chip">
                {d.abbreviation.toUpperCase()}
              </span>
              <span style={{ color: "var(--ink)" }}>{d.displayName}</span>
            </button>
          ))}

          {q && eventMatches.length > 0 && (
            <>
              <div className="search-menu-label">Events</div>
              {eventMatches.map((e) => (
                <button
                  key={e.key}
                  className="search-item"
                  onClick={() => {
                    onPickEvent(e);
                    setOpen(false);
                  }}
                >
                  <span className="region-chip">{eventCode(e.key)}</span>
                  <span style={{ color: "var(--ink)" }}>{e.name}</span>
                  <span className="search-item-meta">
                    {e.year}
                    {e.week != null ? ` · Wk ${e.week + 1}` : ""}
                  </span>
                </button>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

function relativeTime(date: Date): string {
  const mins = Math.round((Date.now() - date.getTime()) / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.round(hrs / 24);
  return `${days}d ago`;
}

// Shows when the data was last refreshed. Data syncs once a day via cron, so
// this surfaces staleness (amber if it's been more than ~26h, or unknown).
export function SyncIndicator() {
  const q = api.frc.lastSync.useQuery(undefined, {
    refetchInterval: 5 * 60 * 1000,
  });
  const finishedAt = q.data?.finishedAt ?? null;
  const ageHrs = finishedAt
    ? (Date.now() - finishedAt.getTime()) / 3_600_000
    : null;
  const status =
    ageHrs == null ? "unknown" : ageHrs > 26 ? "stale" : "fresh";
  const label = finishedAt ? `Synced ${relativeTime(finishedAt)}` : "No sync yet";

  return (
    <div
      className={`sync-indicator sync-${status}`}
      title={
        finishedAt
          ? `Data last synced ${finishedAt.toLocaleString()}`
          : "No successful sync recorded yet"
      }
    >
      <span className="sync-dot" />
      <span className="sync-label">{label}</span>
    </div>
  );
}

export function YearPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (y: number) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div className="yearpick" ref={ref}>
      <button className="yearpick-btn" onClick={() => setOpen((o) => !o)}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" />
        </svg>
        <span className="yearpick-label">Season</span>
        <span className="yearpick-value">{value}</span>
        <IconChevronDown size={10} />
      </button>
      {open && (
        <div className="yearpick-menu">
          {AVAILABLE_YEARS.map((y) => (
            <button
              key={y}
              className={`yearpick-item ${y === value ? "on" : ""}`}
              onClick={() => {
                onChange(y);
                setOpen(false);
              }}
            >
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

function initials(name: string) {
  return name.trim().charAt(0).toUpperCase() || "?";
}

// Editor for the per-year drafter handles, opened from the account menu.
function DraftersModal({
  year,
  open,
  onClose,
}: {
  year: number;
  open: boolean;
  onClose: () => void;
}) {
  const utils = api.useUtils();
  const draftersQ = api.frc.drafters.useQuery({ year }, { enabled: open });
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    if (open && draftersQ.data) setList(draftersQ.data);
  }, [open, draftersQ.data]);

  const save = api.frc.setDrafters.useMutation({
    onSuccess: async () => {
      await utils.frc.drafters.invalidate({ year });
      onClose();
    },
  });

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">Drafting teams · {year}</div>
        <div className="modal-sub">
          These handles fill the “taken by” options when cycling a pick.
        </div>
        <div className="drafters-list">
          {list.map((d, i) => (
            <div className="drafter-row" key={i}>
              <input
                className="pop-input"
                value={d}
                placeholder="@handle"
                onChange={(e) =>
                  setList((l) =>
                    l.map((x, j) => (j === i ? e.target.value : x)),
                  )
                }
              />
              <button
                className="link"
                onClick={() => setList((l) => l.filter((_, j) => j !== i))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          className="link"
          onClick={() => setList((l) => [...l, ""])}
        >
          + Add drafter
        </button>
        <div className="modal-actions">
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn btn-primary"
            disabled={save.isPending}
            onClick={() =>
              save.mutate({
                year,
                drafters: list.map((s) => s.trim()).filter(Boolean),
              })
            }
          >
            {save.isPending ? "Saving…" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

// Editor for the weighted-4-year prediction weights, opened from the account
// menu. Weights are editable but "Reset to optimal" restores the fitted values.
function WeightsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const utils = api.useUtils();
  const weightsQ = api.frc.weights.useQuery(undefined, { enabled: open });
  const [robot, setRobot] = useState<number[]>([0.5, 0.3, 0.15, 0.05]);
  const [awards, setAwards] = useState<number[]>([0.5, 0.3, 0.15, 0.05]);

  useEffect(() => {
    if (open && weightsQ.data) {
      setRobot(weightsQ.data.actRobot);
      setAwards(weightsQ.data.actAwards);
    }
  }, [open, weightsQ.data]);

  const invalidateBoards = async () => {
    await Promise.all([
      utils.frc.boardForDistrict.invalidate(),
      utils.frc.boardForEvent.invalidate(),
      utils.frc.topTeamsByYear.invalidate(),
      utils.frc.weights.invalidate(),
    ]);
  };

  const save = api.frc.setWeights.useMutation({
    onSuccess: async () => {
      await invalidateBoards();
      onClose();
    },
  });
  const reset = api.frc.resetWeights.useMutation({
    onSuccess: async () => {
      await invalidateBoards();
    },
  });

  if (!open) return null;

  const opt = weightsQ.data;
  const editRow = (
    label: string,
    values: number[],
    set: (v: number[]) => void,
    optimal: number[] | undefined,
  ) => (
    <div className="weights-group">
      <div className="weights-group-label">{label}</div>
      <div className="weights-inputs">
        {values.map((v, i) => (
          <label className="weights-cell" key={i}>
            <span className="weights-cell-label">Y−{i + 1}</span>
            <input
              className="pop-input"
              type="number"
              step="0.01"
              value={v}
              onChange={(e) =>
                set(values.map((x, j) => (j === i ? Number(e.target.value) : x)))
              }
            />
            {optimal && (
              <span className="weights-opt">opt {optimal[i]!.toFixed(2)}</span>
            )}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">Prediction weights</div>
        <div className="modal-sub">
          XVAL blends the last four seasons’ values. These weights are the
          regression-fit optimum; edit to taste, then reset to restore them.
        </div>
        {editRow("XROBOT", robot, setRobot, opt?.optRobot)}
        {editRow("XAWARDS", awards, setAwards, opt?.optAwards)}
        <div className="modal-actions">
          <button
            className="link"
            disabled={reset.isPending}
            onClick={() => reset.mutate()}
          >
            {reset.isPending ? "Resetting…" : "Reset to optimal"}
          </button>
          <div style={{ flex: 1 }} />
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn btn-primary"
            disabled={save.isPending}
            onClick={() => save.mutate({ robot, awards })}
          >
            {save.isPending ? "Saving…" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

export function AccountMenu({ year }: { year: number }) {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const [draftersOpen, setDraftersOpen] = useState(false);
  const [weightsOpen, setWeightsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  if (status === "loading") {
    return <div className="avatar-btn" style={{ opacity: 0.5 }}>…</div>;
  }

  if (!session?.user) {
    return (
      <button className="btn btn-primary" onClick={() => void signIn("discord")}>
        <DiscordIcon />
        Sign in with Discord
      </button>
    );
  }

  const name = session.user.name ?? "Scout";
  const handle = session.user.email ?? "";
  const image = session.user.image ?? null;
  const fallbackColor = "oklch(0.55 0.15 260)";

  return (
    <div className="account" ref={ref}>
      <button className="avatar-btn" onClick={() => setOpen((o) => !o)}>
        <div className="avatar" style={{ background: fallbackColor }}>
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt={name} />
          ) : (
            initials(name)
          )}
        </div>
        <div className="avatar-meta">
          <div className="avatar-name">{name}</div>
          <div className="avatar-handle">{handle}</div>
        </div>
        <IconChevronDown size={12} />
      </button>
      {open && (
        <div className="menu">
          <div className="menu-head">
            <div className="avatar avatar-lg" style={{ background: fallbackColor }}>
              {image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={image} alt={name} />
              ) : (
                initials(name)
              )}
            </div>
            <div>
              <div className="menu-name">{name}</div>
              <div className="menu-handle">{handle} · via Discord</div>
            </div>
          </div>
          <div className="menu-sep" />
          <button className="menu-item">
            <IconUser /> Profile
          </button>
          <button className="menu-item">
            <IconList /> My short list
          </button>
          <button
            className="menu-item"
            onClick={() => {
              setDraftersOpen(true);
              setOpen(false);
            }}
          >
            <IconList /> Drafting teams
          </button>
          <button
            className="menu-item"
            onClick={() => {
              setWeightsOpen(true);
              setOpen(false);
            }}
          >
            <IconGear /> Prediction weights
          </button>
          <div className="menu-sep" />
          <button
            className="menu-item menu-danger"
            onClick={() => void signOut()}
          >
            <IconOut /> Sign out
          </button>
        </div>
      )}
      <DraftersModal
        year={year}
        open={draftersOpen}
        onClose={() => setDraftersOpen(false)}
      />
      <WeightsModal open={weightsOpen} onClose={() => setWeightsOpen(false)} />
    </div>
  );
}
