# Handoff: XO Sauce — Scouting Board

## Overview

A scouting dashboard for an FRC (FIRST Robotics Competition) team. It lets a small group of scouts evaluate other teams across multiple seasons: rate them, mark which ones "we" want to pick at draft, see who other scouters have already claimed, browse historical performance and award history, and view per-region event schedules with rosters.

Two main pages: a sortable/filterable **Teams leaderboard** (default) and a per-region **Schedule** page.

The target codebase (`xo-sos-app/`) is a T3 stack app: **Next.js 15, React 19, TypeScript, Tailwind v4, tRPC, Prisma, NextAuth (Discord)**. The leaderboard data is mocked in the prototype but should be backed by real DB models / tRPC procedures in production.

## About the Design Files

The files in `design_reference/` are **design references created in HTML** — a working React prototype rendered via in-browser Babel. They show intended look, layout, and behavior. They are **not production code to copy directly.**

Your job is to **recreate this design in the existing T3 codebase** using its established patterns: Next.js App Router pages/components, Tailwind v4 utilities (or extracted CSS modules where helpful), tRPC for data fetching, Prisma models for persistence, and NextAuth for the Discord sign-in flow that the design's account menu implies.

The mock `data.jsx` shows the **shape** of data the UI needs — translate it into Prisma models and tRPC procedures.

## Fidelity

**High-fidelity (hifi).** All colors, typography, spacing, interactions, hover states, popovers, and animations are intentional. Match them pixel-close. The CSS uses OKLCH color space and CSS custom properties for theming — port the exact values to Tailwind v4's `@theme` block or to a small CSS variables file imported globally.

## Tech Mapping (prototype → production)

| Prototype | Target |
|---|---|
| Inline `<script type="text/babel">` JSX | Next.js App Router server/client components under `src/app/` |
| `data.jsx` mock + `window.XO` | Prisma models + tRPC routers under `src/server/` |
| Local `useState` for picks/stars | tRPC mutations → Prisma writes; React Query for cache |
| Hard-coded session object | `next-auth` session via `auth()` server helper, Discord provider |
| `app.css` global stylesheet | Tailwind v4 utilities + a single `globals.css` for tokens/keyframes |
| The Blue Alliance avatar URL | Same URL works; consider a Next.js `<Image>` with `unoptimized` or a remote pattern in `next.config.js` |

## Screens / Views

### 1. Top bar (global, sticky)

Sticky header, full width, 65px tall. Three columns via CSS grid: `auto 1fr auto`.

- **Logo** (left): rounded-square mark `40×40` with accent background, white "XO" text inside; to its right a two-line text block — title "XO Sauce" (15px / 650 weight), subtitle "SCOUTING BOARD" (11px / uppercase / tracked / muted). Clicking returns to the board page.
- **Search** (center, max 560px): pill-shaped input with leading magnifier icon, "Search regions…" placeholder. On focus, drops a menu of region chips (NA / EU / OCE) the user can click to filter.
- **Top-right cluster**: Year picker dropdown + account menu.
  - **Year picker**: small pill, label "SEASON" + value (mono, e.g. `2026`), chevron. Menu lists 2026 → 2022, current year tagged "current". Selected row uses accent-soft background.
  - **Account menu**: when signed-out, a primary Discord-blurple button "Sign in with Discord" (`#5865F2`). When signed-in, a circular avatar + name/handle + chevron. Menu shows large avatar, "Profile / My short list / Preferences / Sign out" rows. Sign-out is danger-red.

### 2. Sidebar / horizontal nav

Sticky horizontal navbar directly under the topbar (sticky `top: 65px`). Pill rows, each with icon + label + count badge. Items:

- **Teams** (grid icon) — count = visible teams
- **Schedule** (calendar icon) — count = events for selected season
- **Our picks** (star icon) — count = teams marked `ours` for the selected year. Clicking sets the board's `pickStatus` filter to `ours`.
- **Taken** (lock icon) — count = teams marked `taken`. Sets filter to `taken`.

Active row uses `--accent-soft` background and accent ink color.

### 3. Teams leaderboard (default page)

A horizontally-scrollable table with a sticky header.

- **Container**: 1px border, 12px radius, surface background. Body `min-width: 1980px` so it scrolls horizontally on smaller viewports.
- **Row grid** (CSS Grid, 8px gap, 14px horizontal padding):
  - `48px` rank
  - `minmax(190px, 1.4fr)` team
  - `80px` region
  - `110px` xVal
  - `72px` EPA
  - `100px` rating (stars)
  - `140px` pick status
  - `repeat(8, minmax(78px, 1fr))` extra columns (xRobot, xAwards, xSOS, then 5 rolling years)
  - `minmax(180px, 1.2fr)` awards

#### Column-header behavior

Each header is a `ColHeader`: a button that toggles sort (asc / desc, with arrow), plus an optional filter trigger that reveals on hover and opens a popover.

| Column | Sort | Filter popover |
|---|---|---|
| Team | name | Free-text "name contains" input |
| Region | region | Chip list of all regions + "All" |
| xVal | xVal (default desc) | Min-value range slider 0–100 |
| EPA | epa | — |
| Rating | stars | Star rating picker (min stars) |
| Pick status | pickStatus | Chips: All / Available / Our picks / Taken |
| Extras (xRobot, xAwards, xSOS, 2026, 2025, …) | numeric | — |
| Awards | — (label only) | — |

Active filter button: opacity 1 + accent color.

#### Row contents

- **Rank**: zero-padded mono number ("01", "02"…). Computed from xVal-sorted ordering, **not** the visible sort.
- **Team**: 32×32 avatar (Blue Alliance image at `https://www.thebluealliance.com/avatar/2024/frc{number}.png`) with on-error fallback to a tinted number tile. Right of the avatar: team number (mono, 14px, weight 650) above team nickname (11px muted).
- **Region**: 22px-tall mono chip "NA" / "EU" / "OCE".
- **xVal**: right-aligned. Mono number + 3px progress bar filled to `xVal%` in accent color.
- **EPA**: same treatment, green fill (`oklch(0.7 0.15 145)`), capped at 100% width.
- **Rating**: 5-star picker. Click a star to set; click the same star to clear. Hover preview.
- **Pick status**: pill button. Three visual states:
  - **Available** — neutral ink, dot in `--ok` green
  - **Our pick** — accent-soft background, accent ink, dot in accent
  - **Taken · @handle** — strikethrough, muted, dot in `--ink-3`
  - Click cycles: available → ours → taken-by-@kai → @rho → @mira → @vex → @juno → @pax → available.
- **Extras**: mono, centered. Year columns show a "finish" string ("1st", "QF", "—" etc.); xRobot/xAwards/xSOS show numbers from the **selected year**.
- **Awards**: row of icon + count badges:
  - Trophy (gold, `oklch(0.78 0.16 80)`) — event wins
  - Banner (blue, `oklch(0.55 0.18 255)`) — Impact / Chairman's
  - Banner (orange-red, `oklch(0.62 0.16 30)`) — Engineering Inspiration
  - Wrench (steel, `oklch(0.7 0.04 255)`) — technical awards
  - Hover any award → popover above the icon listing each instance: year (mono) + event name, plus award sub-name for technical awards. Sorted newest first.

Empty state: "No teams match these filters." centered, muted.

### 4. Schedule page

- Requires a region to be selected (via search or the region chip in the menu). If none, prompt: "Search a region above to view its schedule."
- Header row: large region chip + "N events".
- Body: horizontal grid of event cards, each `min-width: 260px`, scrolls horizontally.
  - Card header: event name + date (mono, muted), surface-2 background, bottom border.
  - Roster: list of rows. Each row is a 4-col grid: team number tag (mono muted) | nickname | optional guest-region chip if the team is from another region | pick marker (★ for ours, × for taken).
  - **Hover behavior**: hovering a roster row dims all rows in all event cards that don't share that team id; the matching rows highlight with accent outline and a 2px x-translate. Lets you visually trace a team across multiple events.

## Interactions & Behavior

- **All popovers / menus** dismiss on outside-click via a `mousedown` listener.
- **Sort transitions**: instant.
- **Hover transitions**: 100–160ms.
- **Search → region filter**: typing an exact region name auto-applies it as a filter; clearing the input clears the filter.
- **Pick cycle is per-year**: changing the year picker shows different pick state for the same team.
- **Stars are per-year** as well.
- **Year picker** changes the dataset *and* the rolling 5-year columns (selected year, then prior 4).
- **Discord sign-in** in the prototype is a stub (just sets a hard-coded session). In production, wire it to NextAuth's Discord provider.

## State Management

In production:

- **Server state** (teams, picks, ratings, events, award history) → tRPC + React Query, persisted in Prisma.
  - `teams.list({ year })` → returns the `teamView` shape
  - `teams.setPick({ teamId, year, status, pickedBy })`
  - `teams.setStars({ teamId, year, stars })`
  - `events.list({ year, region? })`
  - `awards.list({ teamId })`
- **URL state** (page, selected year, filters, sort) → keep in `useSearchParams` so views are linkable. Filter chip state, popover open/close, hover state → local component state.
- **Auth state** → `auth()` server helper or `useSession()` client hook from NextAuth.

## Design Tokens

CSS custom properties, defined in `app.css` under `.theme-dark` and `.theme-light`. Port to Tailwind v4 `@theme` or to a `globals.css` variables block.

### Dark theme
```
--bg:            oklch(0.17  0.02  255)
--surface:       oklch(0.21  0.025 255)
--surface-2:     oklch(0.25  0.03  255)
--surface-3:     oklch(0.28  0.035 255)
--ink:           oklch(0.96  0.01  255)
--ink-2:         oklch(0.78  0.02  255)
--ink-3:         oklch(0.58  0.02  255)
--border:        oklch(0.30  0.03  255)
--border-strong: oklch(0.40  0.04  255)
--accent:        #3b82f6 (default; user-tweakable)
--accent-soft:   color-mix(in oklch, var(--accent) 20%, transparent)
--accent-ink:    color-mix(in oklch, var(--accent) 80%, white)
--star:          oklch(0.82  0.17  85)
--ok:            oklch(0.72  0.16  160)
--bad:           oklch(0.65  0.20  25)
```

### Light theme
```
--bg:            oklch(0.985 0.006 255)
--surface:       oklch(1     0     0)
--surface-2:     oklch(0.97  0.008 255)
--surface-3:     oklch(0.94  0.012 255)
--ink:           oklch(0.22  0.02  255)
--ink-2:         oklch(0.42  0.02  255)
--ink-3:         oklch(0.58  0.01  255)
--border:        oklch(0.92  0.01  255)
--border-strong: oklch(0.84  0.015 255)
--accent:        #2563eb
--accent-soft:   color-mix(in oklch, var(--accent) 12%, transparent)
--accent-ink:    color-mix(in oklch, var(--accent) 70%, black)
--star:          oklch(0.72  0.17  85)
--ok:            oklch(0.60  0.15  160)
--bad:           oklch(0.58  0.18  25)
```

### Discord brand color
- Button bg: `#5865F2`, hover `#4752c4`, text white.

### Award icon colors (independent of theme)
- Trophy gold: `oklch(0.78 0.16 80)`
- Impact blue: `oklch(0.55 0.18 255)`
- EI orange: `oklch(0.62 0.16 30)`
- Tech steel: `oklch(0.70 0.04 255)`

### Typography
- **UI**: `Inter` (weights 400, 500, 550, 600, 650, 700, 800)
- **Mono**: `JetBrains Mono` (weights 400, 500, 600) — used for team numbers, ranks, region chips, year values, all numeric stats, dates
- **Base size**: 14px / line-height 1.4
- **Smoothing**: `-webkit-font-smoothing: antialiased`

Common type uses:
- Topbar logo title — 15px / 650
- Topbar logo sub — 11px / uppercase / 0.04em tracking / `--ink-3`
- Page H1 — 26px / 700 / -0.02em tracking
- Column headers — 11px / 600 / uppercase / 0.06em tracking / `--ink-3`
- Body row text — 13–14px
- Chips & micro-labels — 10–12px mono

### Spacing & shape
- Border radii: 4 (chips, small filter buttons), 6 (menu items, pills), 7–8 (nav rows, popups), 9–10 (buttons, dropdowns, search), 12 (large surfaces, board container)
- Standard horizontal page padding: 24px
- Topbar padding: 12px 24px
- Table row padding: 10px 14px
- Gaps: 8px (table grid), 12px (event columns), 4–10px (small clusters)

### Shadows
- Logo mark inset: `inset 0 -6px 10px rgba(0,0,0,0.22), 0 1px 0 rgba(0,0,0,0.1)`
- Dropdown menus: `0 20px 48px rgba(0,0,0,0.35–0.45)`
- Award popover: `0 14px 36px rgba(0,0,0,0.45)`
- Award icon SVGs: `drop-shadow(0 1px 1px rgba(0,0,0,0.3))`

### Backdrop
- Topbar uses `backdrop-filter: saturate(140%) blur(10px)` over an 88%-opaque surface.

## Data shapes (current mock)

```ts
type Team = {
  _id: string;            // "frc254"
  number: number;         // 254
  name: string;           // "The Cheesy Poofs"
  region: "NA" | "EU" | "OCE";
  avatarUrl: string;      // TBA avatar URL
  statsByYear: Record<number, YearStats>;
  picksByYear: Record<number, Pick>;
  awardLog: AwardLog;
};

type YearStats = {
  xVal: number;           // 0–100
  epa: number;            // ~20–105
  xrobot: number;
  xawards: number;
  xsos: number;
  stars: number;          // 0–5
  finish: string;         // "1st" | "QF" | "—" etc.
  eventWins: number;
  impact: number;
  ei: number;
  technical: number;
};

type Pick = { status: "available" | "ours" | "taken"; by: string | null };

type AwardLog = {
  eventWins: AwardEntry[];
  impact:    AwardEntry[];
  ei:        AwardEntry[];
  technical: AwardEntry[];
};

type AwardEntry = { year: number; event: string; name?: string };

type EventDoc = {
  _id: string;
  name: string;
  region: string;
  year: number;
  date: string;     // "May 3–5"
  roster: string[]; // team ids
};
```

The other pickers list (`OTHER_PICKERS`) should become user records (Discord-linked) — show whatever name/handle the team uses internally.

## Assets

- **The Blue Alliance team avatars**: `https://www.thebluealliance.com/avatar/{year}/frc{number}.png` (image, ~40×40, often pixelated). Allow this remote pattern in `next.config.js` if using `next/image`. Always provide an on-error fallback (the prototype renders a tinted number tile from a hue derived from the team number).
- **All icons** are inline SVGs defined in `app.jsx` (search, calendar, grid, star, lock, user, list, gear, sign-out, Discord, trophy, banner, wrench). Prefer porting them to a single icon module or swapping for `lucide-react` equivalents — keep stroke widths around 1.8 and `viewBox=0 0 24 24` to match.
- **Fonts** loaded from Google Fonts (Inter, JetBrains Mono). Use `next/font/google` in production.

## Tweaks (optional in production)

The prototype exposes a small "Tweaks" panel with two controls — Theme (dark/light radio) and Accent color picker. In production these belong in user **Preferences** (the menu item already exists in the account dropdown).

## Files (in this handoff)

- `design_reference/index.html` — entry point that loads React + Babel and mounts the app
- `design_reference/app.jsx` — all components (`App`, `Logo`, `SearchBar`, `YearPicker`, `AccountMenu`, `Sidebar`, `ColHeader`, `Leaderboard`, `SchedulePage`, primitives)
- `design_reference/app.css` — full stylesheet with theme tokens
- `design_reference/data.jsx` — mock data generator and shapes
- `design_reference/tweaks-panel.jsx` — prototype-only tweaks UI (skip in production)

## Implementation order (suggested)

1. Define Prisma models for `Team`, `YearStats`, `Pick`, `Award`, `Event`, `User`, plus seed scripts using the team list from `data.jsx`.
2. Stand up tRPC routers (`teams`, `events`, `awards`).
3. Wire NextAuth Discord provider; replace the prototype's stub session.
4. Port the design tokens to `globals.css` (or Tailwind v4 `@theme`).
5. Build the topbar / nav shell first (logo, search, year picker, account menu, sidebar).
6. Build the leaderboard table — start with the row grid and column headers, then layer in popovers, sorting, filtering, then pick-cycle and stars mutations.
7. Build the schedule page with the cross-card hover-trace interaction.
8. Theme toggle + accent in user preferences.
