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
export type DistanceThreshold = 1 | 5 | 10 | 25 | 50 | 100;
export type Timeframe =
  | "immediate"
  | "within-week"
  | "within-month"
  | "flexible";

export interface AcceptableTimes {
  monday: string[];
  tuesday: string[];
  wednesday: string[];
  thursday: string[];
  friday: string[];
  saturday: string[];
  sunday: string[];
}

export interface Location {
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

export interface UserProfile {
  interests: string[];
  goals: string[];
  occupation: string;
  email: string;
  age: number;
  gender: GenderBiasOptions;
  sexual_orientation: SexualOrientationBiasOptions;
  relationship_status: RelationshipStatusBiasOptions;
  willingness_to_pay: boolean;
  budget: Budget;
  willingness_for_online: boolean;
  acceptable_times: AcceptableTimes;
  location: Location;
  distance_threshold: DistanceThreshold;
  time_commitment_in_minutes: number;
  timeframe: Timeframe;
}
