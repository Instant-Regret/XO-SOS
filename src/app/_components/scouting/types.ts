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
};

export type TeamView = {
  _id: string; // team key e.g. "frc254"
  number: number;
  name: string; // nickname for the small "tag" line
  region: string; // district abbreviation shown in the row chip
  avatarUrl: string;
  xVal: number; // no data → 0
  epa: number; // from TeamEpa for the selected year, 0 if missing
  stars: number; // local-only state
  pickStatus: PickStatus; // local-only state
  pickedBy: string | null;
  awardLog: AwardLog;
};

export type ScheduleEvent = {
  key: string;
  name: string;
  year: number;
  startDate: string | null;
  endDate: string | null;
  roster: {
    number: number;
    nickname: string | null;
    inDistrict: boolean;
    epa: number | null;
  }[];
};
