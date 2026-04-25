"use client";

import { useEffect, useRef, useState } from "react";
import { IconFilter } from "./icons";
import type { Sort } from "./types";

export type FilterSpec = {
  active: boolean;
  content: (ctx: { close: () => void }) => React.ReactNode;
};

export function ColHeader({
  label,
  sortKey,
  sortState,
  onSort,
  filter,
  align,
}: {
  label: string;
  sortKey?: string;
  sortState?: Sort;
  onSort?: (key: string) => void;
  filter?: FilterSpec;
  align?: "right";
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
  const isSorted = sortState?.key === sortKey;
  const dir = isSorted ? sortState?.dir : null;
  return (
    <div className={`col-head ${align === "right" ? "ch-right" : ""}`} ref={ref}>
      <button
        className="col-head-btn"
        onClick={() => onSort && sortKey && onSort(sortKey)}
      >
        {label}
        {onSort && (
          <span className={`sort-arrow ${dir ?? ""}`}>
            {dir === "desc" ? "▼" : dir === "asc" ? "▲" : "↕"}
          </span>
        )}
      </button>
      {filter && (
        <button
          className={`col-filter-btn ${filter.active ? "active" : ""}`}
          onClick={() => setOpen((o) => !o)}
        >
          <IconFilter />
        </button>
      )}
      {open && filter && (
        <div className="col-popup">{filter.content({ close: () => setOpen(false) })}</div>
      )}
    </div>
  );
}
