"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { AwardEntry, AwardLog, PickStatus } from "./data";
import { BannerSvg, TrophySvg, WrenchSvg } from "./icons";

export function pickLabel(status: PickStatus, by: string | null) {
  if (status === "available") return "Available";
  if (status === "ours") return "Ours";
  // Taken: show only who has the team (the dot already signals "taken").
  return by ?? "";
}

export function pickDotColor(status: PickStatus) {
  if (status === "ours") return "var(--accent)";
  if (status === "taken") return "var(--bad)";
  return "var(--ok)";
}

export function Star({
  filled,
  onClick,
  onHover,
  size = 14,
}: {
  filled: boolean;
  onClick?: () => void;
  onHover?: () => void;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      onClick={onClick}
      onMouseEnter={onHover}
      style={{ cursor: onClick ? "pointer" : "default", display: "block" }}
    >
      <path
        d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6 5.9 21l1.5-6.8L2.2 9.5l6.9-.7L12 2.5z"
        fill={filled ? "var(--star)" : "none"}
        stroke={filled ? "var(--star)" : "var(--border-strong)"}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarRating({
  value,
  onChange,
  readOnly,
  size = 14,
  max = 5,
}: {
  value: number;
  onChange?: (v: number) => void;
  readOnly?: boolean;
  size?: number;
  max?: number;
}) {
  const [hover, setHover] = useState(0);
  const eff = hover || value;
  return (
    <div className="stars" onMouseLeave={() => setHover(0)}>
      {Array.from({ length: max }, (_, i) => i + 1).map((n) => (
        <Star
          key={n}
          size={size}
          filled={n <= eff}
          onClick={
            readOnly || !onChange ? undefined : () => onChange(value === n ? 0 : n)
          }
          onHover={readOnly ? undefined : () => setHover(n)}
        />
      ))}
    </div>
  );
}

export function PickPill({
  status,
  pickedBy,
  onClick,
}: {
  status: PickStatus;
  pickedBy: string | null;
  onClick: () => void;
}) {
  return (
    <button
      className={`pick pick-${status}`}
      onClick={onClick}
      title="Click to cycle pickers"
    >
      <span className="pick-dot" style={{ background: pickDotColor(status) }} />
      {status !== "available" && pickLabel(status, pickedBy)}
    </button>
  );
}

export function TeamMark({
  team,
}: {
  team: { number: number; avatarUrl: string };
}) {
  const [errored, setErrored] = useState(false);
  const num = team.number;
  const hue = 215 + ((num * 37) % 360);
  if (errored || !team.avatarUrl) {
    return (
      <div
        className="team-mark team-mark-fallback"
        style={{
          background: `oklch(0.32 0.06 ${hue})`,
          color: `oklch(0.85 0.08 ${hue})`,
        }}
      >
        {num}
      </div>
    );
  }
  return (
    <div className="team-mark team-mark-avatar">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={team.avatarUrl}
        alt={`Team ${num} avatar`}
        onError={() => setErrored(true)}
      />
    </div>
  );
}

function groupByYear(entries: AwardEntry[]) {
  const map = new Map<number, AwardEntry[]>();
  for (const e of entries) {
    const list = map.get(e.year);
    if (list) list.push(e);
    else map.set(e.year, [e]);
  }
  return [...map.entries()]
    .sort(([a], [b]) => b - a)
    .map(([year, items]) => ({ year, items }));
}

function AwardIcon({
  entries,
  kind,
  subkind,
  label,
}: {
  entries: AwardEntry[];
  kind: "trophy" | "banner" | "tool";
  subkind?: string;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const popRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Fixed-viewport coords for the portalled tooltip; null until measured.
  const [pos, setPos] = useState<{
    left: number;
    top: number;
    placement: "top" | "bottom";
  } | null>(null);

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  // Small delay so moving from the icon to the tooltip (a 6px gap) doesn't
  // close it — lets you hover in to scroll a long list.
  const hide = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 90);
  };

  // The tooltip is rendered in a portal on <body> with fixed positioning so it
  // escapes the leaderboard's scroll container (which clips overflow). Placement
  // is chosen against the viewport, where fixed elements actually live.
  useLayoutEffect(() => {
    if (!open) {
      setPos(null);
      return;
    }
    const wrap = wrapRef.current;
    const pop = popRef.current;
    if (!wrap || !pop) return;
    const icon = wrap.getBoundingClientRect();
    const rect = pop.getBoundingClientRect();
    const margin = 8;
    const spaceAbove = icon.top - margin;
    const spaceBelow = window.innerHeight - icon.bottom - margin;
    const placement =
      rect.height > spaceAbove && spaceBelow > spaceAbove ? "bottom" : "top";
    const top = placement === "top" ? icon.top - 6 : icon.bottom + 6;
    const half = rect.width / 2;
    let left = icon.left + icon.width / 2;
    left = Math.min(
      window.innerWidth - margin - half,
      Math.max(margin + half, left),
    );
    setPos({ left, top, placement });
  }, [open]);

  if (!entries || entries.length === 0) return null;
  const groups = groupByYear(entries);

  const svg =
    kind === "trophy" ? <TrophySvg /> : kind === "banner" ? <BannerSvg /> : <WrenchSvg />;

  return (
    <div
      ref={wrapRef}
      className={`award-icon award-${subkind ?? kind}`}
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      {svg}
      <span className="banner-count">{entries.length}</span>
      {open &&
        createPortal(
          <div
            ref={popRef}
            className="award-pop award-pop-fixed"
            style={{
              position: "fixed",
              left: pos?.left ?? -9999,
              top: pos?.top ?? -9999,
              bottom: "auto",
              transform: `translate(-50%, ${(pos?.placement ?? "top") === "top" ? "-100%" : "0"})`,
              visibility: pos ? "visible" : "hidden",
            }}
            onMouseEnter={show}
            onMouseLeave={hide}
          >
            <div className="award-pop-title">{label}</div>
            <ul className="award-pop-list">
              {groups.map((g) => (
                <li key={g.year}>
                  <span className="award-pop-year">{g.year}</span>
                  <div className="award-pop-events">
                    {g.items.map((e, i) => (
                      <div key={i} className="award-pop-event-row">
                        <span className="award-pop-event">{e.event}</span>
                        {e.name && <span className="award-pop-sub">{e.name}</span>}
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>,
          document.body,
        )}
    </div>
  );
}

export function AwardsCell({ log }: { log: AwardLog }) {
  const empty =
    !log.eventWins.length &&
    !log.impact.length &&
    !log.ei.length &&
    !log.technical.length;
  if (empty) return <span className="awards-empty">—</span>;
  return (
    <div className="awards-cell">
      <AwardIcon entries={log.eventWins} kind="trophy" subkind="trophy" label="Event wins" />
      <AwardIcon entries={log.impact} kind="banner" subkind="impact" label="Impact / Chairman's awards" />
      <AwardIcon entries={log.ei} kind="banner" subkind="ei" label="Engineering Inspiration" />
      <AwardIcon entries={log.technical} kind="tool" subkind="tool" label="Technical awards" />
    </div>
  );
}
