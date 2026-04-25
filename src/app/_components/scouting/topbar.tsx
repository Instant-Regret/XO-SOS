"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

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
import type { DistrictLite } from "./types";

export function Logo({ onClick }: { onClick: () => void }) {
  return (
    <button className="logo" onClick={onClick}>
      <div className="logo-mark">
        <span>X</span>
        <span>O</span>
      </div>
      <div className="logo-text">
        <div className="logo-title">XO Sauce</div>
        <div className="logo-sub">Scouting Board</div>
      </div>
    </button>
  );
}

export function SearchBar({
  value,
  onChange,
  districts,
  onPickDistrict,
  loading,
}: {
  value: string;
  onChange: (v: string) => void;
  districts: DistrictLite[];
  onPickDistrict: (d: DistrictLite) => void;
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
  const suggestions = !q
    ? districts
    : districts.filter(
        (d) =>
          d.abbreviation.toLowerCase().includes(q) ||
          d.displayName.toLowerCase().includes(q) ||
          d.key.toLowerCase().includes(q),
      );
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
        placeholder="Search districts…"
      />
      {value && (
        <button className="search-clear" onClick={() => onChange("")}>
          ×
        </button>
      )}
      {open && (
        <div className="search-menu">
          <div className="search-menu-label">Districts</div>
          {loading && (
            <div
              className="search-item"
              style={{ pointerEvents: "none", color: "var(--ink-3)" }}
            >
              Loading…
            </div>
          )}
          {!loading && suggestions.length === 0 && (
            <div
              className="search-item"
              style={{ pointerEvents: "none", color: "var(--ink-3)" }}
            >
              No districts for this season.
            </div>
          )}
          {suggestions.map((d) => (
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
        </div>
      )}
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

export function AccountMenu() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
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
          <button className="menu-item">
            <IconGear /> Preferences
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
    </div>
  );
}
