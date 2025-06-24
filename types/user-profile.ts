import { z } from "zod";

// Step 1: Personal Information
export const PersonalInfoSchema = z.object({
  birthday: z.string(),
  occupation: z.string(),
  gender: z.enum(["male", "female", "non-binary", "other"]),
  sexual_orientation: z.enum([
    "straight",
    "lesbian",
    "gay",
    "bisexual",
    "pansexual",
    "other",
  ]),
  relationship_status: z.enum([
    "single",
    "in-relationship",
    "married",
    "divorced",
    "widowed",
    "polyamorous",
    "other",
  ]),
});
export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

// Step 2: Interests & Goals
export const InterestsGoalsSchema = z.object({
  interests: z.array(z.string()),
  goals: z.array(z.string()),
});
export type InterestsGoals = z.infer<typeof InterestsGoalsSchema>;

// Step 3: Location & Distance
export const LocationSchema = z.object({
  postcode: z.string(),
  distance_threshold: z.object({
    value: z.number(),
    unit: z.enum(["km", "miles"]),
  }),
});
export type Location = z.infer<typeof LocationSchema>;

// Step 4: Budget & Format
export const BudgetSchema = z.object({
  budget: z.number().min(0),
  willingness_for_online: z.boolean(),
});
export type Budget = z.infer<typeof BudgetSchema>;

// Step 5: Availability & Time
export const AvailabilitySchema = z.object({
  time_commitment_in_minutes: z.number(),
  acceptable_times: z.object({
    weekdays: z.object({
      startTime: z.string().optional(),
      endTime: z.string().optional(),
      allDay: z.boolean().optional(),
    }),
    weekends: z.object({
      startTime: z.string().optional(),
      endTime: z.string().optional(),
      allDay: z.boolean().optional(),
    }),
  }),
});
export type Availability = z.infer<typeof AvailabilitySchema>;

export const UserProfileSchema = PersonalInfoSchema.merge(InterestsGoalsSchema)
  .merge(LocationSchema)
  .merge(BudgetSchema)
  .merge(AvailabilitySchema);
export type UserProfile = z.infer<typeof UserProfileSchema>;

export type GenderBiasOptions = PersonalInfo["gender"];
export type SexualOrientationBiasOptions = PersonalInfo["sexual_orientation"];
export type RelationshipStatusBiasOptions = PersonalInfo["relationship_status"];
export type DistanceThreshold = Location["distance_threshold"];
export type StartEndTime = Availability["acceptable_times"]["weekdays"];
export type AcceptableTimes = Availability["acceptable_times"];
