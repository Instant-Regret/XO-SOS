// Mock data for FRC scouting board — real FRC team numbers
const OTHER_PICKERS = ["@kai", "@rho", "@mira", "@vex", "@juno", "@pax"];

// [team number, team nickname, region]
const TEAM_SEEDS = [
  [254,  "The Cheesy Poofs",          "NA"],
  [1678, "Citrus Circuits",           "NA"],
  [2910, "Jack in the Bot",           "NA"],
  [118,  "Robonauts",                 "NA"],
  [148,  "Robowranglers",             "NA"],
  [1114, "Simbotics",                 "NA"],
  [2056, "OP Robotics",               "NA"],
  [3476, "Code Orange",               "NA"],
  [971,  "Spartan Robotics",          "NA"],
  [1323, "MadTown Robotics",          "NA"],
  [195,  "CyberKnights",              "NA"],
  [340,  "Greater Rochester Robotics","NA"],
  [33,   "Killer Bees",               "NA"],
  [217,  "ThunderChickens",           "NA"],
  [469,  "Las Guerrillas",            "NA"],
  [27,   "Team RUSH",                 "NA"],
  [1690, "Orbit",                     "EU"],
  [5460, "Strikers",                  "EU"],
  [1577, "Steampunk",                 "NA"],
  [3132, "Thunder Down Under",        "OCE"],
  [3310, "Black Hawk Robotics",       "NA"],
  [4613, "Barker Redbacks",           "OCE"],
];

// Filter out the bad placeholder row
const VALID_SEEDS = TEAM_SEEDS.filter(s => typeof s[0] === "number");

const YEARS = [2022, 2023, 2024, 2025, 2026];

// EPA categories per team (deterministic from team number)
function makeStats(num, year) {
  const s = ((num * 1009) ^ (year * 31)) >>> 0;
  const xVal    = +(60 + (s % 401) / 10).toFixed(1);
  const epa     = +(20 + ((s >> 3) % 851) / 10).toFixed(1);   // 20.0 – 105.0
  const xrobot  = +(55 + ((s >> 5) % 451) / 10).toFixed(1);
  const xawards = (s >> 7) % 8;
  const xsos    = +(40 + ((s >> 9) % 601) / 10).toFixed(1);
  const stars   = (s >> 11) % 6;
  const finishes = ["1st", "2nd", "QF", "SF", "Groups", "—", "3rd", "DNQ"];
  const finish = finishes[(s >> 13) % finishes.length];
  // Banner counts (Blue Banner awards)
  const eventWins = (s >> 15) % 4;        // 0–3
  const impact    = (s >> 17) % 3;        // 0–2 (Impact / Chairman's)
  const ei        = (s >> 19) % 3;        // 0–2 (Engineering Inspiration)
  const technical = (s >> 21) % 6;        // 0–5 (other technical awards)
  return { xVal, epa, xrobot, xawards, xsos, stars, finish, eventWins, impact, ei, technical };
}

function yearlyPick(num, year, idx) {
  const s = ((num * 7919) ^ (year * 131) ^ (idx * 13)) >>> 0;
  const roll = s % 10;
  if (roll < 2) return { status: "ours", by: null };
  if (roll < 5) return { status: "taken", by: OTHER_PICKERS[s % OTHER_PICKERS.length] };
  return { status: "available", by: null };
}

// Sample event names per region for award provenance hovers
const EVENT_POOL = {
  NA:  ["Silicon Valley Regional", "CalGames", "Houston Champs - Hopper", "Detroit Champs - Curie", "Pacific NW District Champs", "Granite State", "New England DCMP", "FIRST in Texas DCMP"],
  EU:  ["Israel District Champs", "Istanbul Regional", "Greater Toronto East", "FIRST Israel #3", "Haifa District"],
  OCE: ["South Pacific Regional", "Sydney Regional", "Newcastle Regional"],
};

function pickFrom(arr, seed) { return arr[seed % arr.length]; }

// Build a list of award instances with year + event location for hover tooltips.
function makeAwardLog(num, region) {
  const pool = EVENT_POOL[region] || EVENT_POOL.NA;
  const out = { eventWins: [], impact: [], ei: [], technical: [] };
  const techNames = ["Innovation in Control", "Excellence in Engineering", "Industrial Design", "Quality Award", "Creativity Award", "Autonomous Award"];
  YEARS.forEach(y => {
    const s = ((num * 1009) ^ (y * 31)) >>> 0;
    const ew = (s >> 15) % 4;
    const im = (s >> 17) % 3;
    const ei = (s >> 19) % 3;
    const tech = (s >> 21) % 6;
    for (let i = 0; i < ew; i++)   out.eventWins.push({ year: y, event: pickFrom(pool, s + i * 17) });
    for (let i = 0; i < im; i++)   out.impact.push   ({ year: y, event: pickFrom(pool, s + i * 23 + 5) });
    for (let i = 0; i < ei; i++)   out.ei.push       ({ year: y, event: pickFrom(pool, s + i * 29 + 11) });
    for (let i = 0; i < tech; i++) out.technical.push({
      year: y,
      event: pickFrom(pool, s + i * 31 + 3),
      name: techNames[(s + i * 7) % techNames.length],
    });
  });
  return out;
}

const TEAMS = VALID_SEEDS.map(([num, name, region], i) => {
  const _id = "frc" + num;
  const statsByYear = {};
  const picksByYear = {};
  YEARS.forEach(y => {
    statsByYear[y] = makeStats(num, y);
    picksByYear[y] = yearlyPick(num, y, i);
  });
  return {
    _id,
    number: num,
    name,
    tag: String(num),
    region,
    avatarUrl: `https://www.thebluealliance.com/avatar/${2024}/frc${num}.png`,
    statsByYear,
    picksByYear,
    awardLog: makeAwardLog(num, region),
  };
});

const REGIONS = [...new Set(TEAMS.map(t => t.region))].sort();

// Schedule per year
const EVENT_NAMES = {
  NA:  ["Pacific Open", "Great Lakes Cup", "Atlantic Invitational", "Southwest Classic"],
  EU:  ["Nordic Clash", "Iberia Masters", "Alpine Cup", "Adria Open"],
  OCE: ["Sydney Open", "Auckland Classic"],
};
const EVENT_DATES = ["May 3–5", "May 17–19", "May 31 – Jun 2", "Jun 14–16", "Jun 28–30", "Jul 12–14"];

const EVENTS_BY_YEAR = {};
YEARS.forEach(year => {
  let eid = year * 1000;
  const list = [];
  Object.entries(EVENT_NAMES).forEach(([region, names]) => {
    const regionTeams = TEAMS.filter(t => t.region === region);
    names.forEach((name, ni) => {
      const roster = regionTeams
        .filter((_, ti) => (ti + ni + year) % 3 !== 2)
        .map(t => t._id);
      const guests = TEAMS.filter(t => t.region !== region);
      const guest = guests[(eid + ni + year) % guests.length];
      if (guest) roster.push(guest._id);
      list.push({
        _id: "e_" + (eid++),
        name,
        region,
        year,
        date: EVENT_DATES[(EVENT_DATES.length + ni * 2 + region.length + year) % EVENT_DATES.length],
        roster,
      });
    });
  });
  EVENTS_BY_YEAR[year] = list;
});

window.XO = { REGIONS, OTHER_PICKERS, TEAMS, EVENTS_BY_YEAR, YEARS };
