export type GenderBiasOptions =
  | "male"
  | "female"
  | "non-binary"
  | "prefer-not-to-say";

export type SexualOrientationBiasOptions =
  | "heterosexual"
  | "homosexual"
  | "bisexual"
  | "pansexual"
  | "asexual"
  | "prefer-not-to-say";

export type RelationshipStatusBiasOptions =
  | "single"
  | "in-relationship"
  | "married"
  | "divorced"
  | "widowed"
  | "prefer-not-to-say";

export type Budget = 0 | 10 | 20 | 50 | 100 | 200 | 500 | 1000;

export type DistanceThreshold = {
  value: number;
  unit: "km" | "miles";
};

export type StartEndTime = {
  startTime: string;
  endTime: string;
  allDay?: boolean;
};

export type AcceptableTimes = {
  weekdays: StartEndTime;
  weekends: StartEndTime;
};

export type UserProfile = {
  interests: string[];
  goals: string[];
  occupation: string;
  birthday: string;
  gender: GenderBiasOptions;
  sexual_orientation: SexualOrientationBiasOptions;
  relationship_status: RelationshipStatusBiasOptions;
  willingness_to_pay: boolean;
  budget: Budget;
  willingness_for_online: boolean;
  acceptable_times: AcceptableTimes;
  postcode: string;
  distance_threshold: DistanceThreshold;
  time_commitment_in_minutes: number;
};
