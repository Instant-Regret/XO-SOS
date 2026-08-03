import type { AwardLog, PickStatus } from "./data";

export type PageId = "board" | "schedule";

export type Filters = {
  pickStatus: PickStatus | null;
  minStars: number;
  minX: number;
  search: string | null;
};

export type Sort = { key: string; dir: "asc" | "desc" };

export type ExtraColumn =
  | { key: "xrobot" | "xawards" | "xsos"; label: string; year?: undefined }
  | { key: `y${number}`; label: string; year: number };

export type DistrictLite = {
  key: string;
  abbreviation: string;
  displayName: string;
  year: number;
  years: number[]; // seasons this region has teams for
};

export type EventLite = {
  key: string;
  name: string;
  year: number;
  week: number | null;
  eventTypeString: string;
  districtKey: string | null;
};

export type TeamView = {
  _id: string; // team key e.g. "frc254"
  number: number;
  name: string; // nickname for the small "tag" line
  region: string; // district abbreviation shown in the row chip
  avatarUrl: string;
  xVal: number; // XVAL (pred on std boards, full-season value on champs), 0 if none
  xRobot: number; // XROBOT column
  xAwards: number; // XAWARDS column
  xsos: number | null; // strength-of-schedule percentile (0-100), null if unknown
  yearVals: Record<number, number | null>; // raw XVAL per season for the year columns
  // Per-column calculation strings, shown as tooltips in debug mode.
  debug?: {
    window: string;
    xrobot: string;
    xawards: string;
    xval: string;
    xsos: string;
    yearVals: Record<number, string>;
  };
  epa: number; // from TeamEpa for the selected year, 0 if missing
  stars: number; // local-only state
  pickStatus: PickStatus;
  pickedBy: string | null;
  // All owners across every board for the year — shown read-only on the
  // top-100 / event views (a team can be taken in more than one region).
  owners: string[];
  awardLog: AwardLog;
};

export type ScheduleEvent = {
  key: string;
  name: string;
  year: number;
  week: number | null;
  startDate: string | null;
  endDate: string | null;
  roster: {
    number: number;
    nickname: string | null;
    inDistrict: boolean;
    epa: number | null;
  }[];
};
