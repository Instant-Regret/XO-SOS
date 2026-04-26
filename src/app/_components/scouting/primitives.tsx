"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { AwardEntry, AwardLog, PickStatus } from "./data";
import { BannerSvg, TrophySvg, WrenchSvg } from "./icons";

export function pickLabel(status: PickStatus, by: string | null) {
  if (status === "available") return "Available";
  if (status === "ours") return "Our pick";
  return `Taken · ${by ?? ""}`;
}

export function pickDotColor(status: PickStatus) {
  if (status === "ours") return "var(--accent)";
  if (status === "taken") return "var(--ink-3)";
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
}: {
  value: number;
  onChange?: (v: number) => void;
  readOnly?: boolean;
  size?: number;
}) {
  const [hover, setHover] = useState(0);
  const eff = hover || value;
  return (
    <div className="stars" onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((n) => (
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
      {pickLabel(status, pickedBy)}
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
  const popRef = useRef<HTMLDivElement | null>(null);
  const [shift, setShift] = useState(0);
  const [placement, setPlacement] = useState<"top" | "bottom">("top");

  useLayoutEffect(() => {
    if (!open) {
      setShift(0);
      setPlacement("top");
      return;
    }
    const el = popRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const margin = 8;
    let dx = 0;
    if (rect.right > vw - margin) dx = vw - margin - rect.right;
    else if (rect.left < margin) dx = margin - rect.left;
    if (dx !== 0) setShift(dx);
    if (rect.top < margin) setPlacement("bottom");
  }, [open]);

  if (!entries || entries.length === 0) return null;
  const groups = groupByYear(entries);

  const svg =
    kind === "trophy" ? <TrophySvg /> : kind === "banner" ? <BannerSvg /> : <WrenchSvg />;

  return (
    <div
      className={`award-icon award-${subkind ?? kind}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {svg}
      <span className="banner-count">{entries.length}</span>
      {open && (
        <div
          ref={popRef}
          className={`award-pop award-pop-${placement}`}
          style={{ transform: `translateX(calc(-50% + ${shift}px))` }}
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
        </div>
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
