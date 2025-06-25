import { z } from "zod";

// Step 1: Personal Information
export const PersonalInfoSchema = z.object({
  birthday: z
    .string({ errorMap: () => ({ message: "Please enter your birthday" }) })
    .min(1, "Please enter your birthday"),
  occupation: z
    .string({ errorMap: () => ({ message: "Please enter your occupation" }) })
    .min(1, "Please enter your occupation"),
  gender: z.enum(["male", "female", "non-binary", "other"], {
    errorMap: () => ({ message: "Please select your gender" }),
  }),
  sexual_orientation: z.enum(
    ["straight", "lesbian", "gay", "bisexual", "pansexual", "other"],
    {
      errorMap: () => ({ message: "Please select your sexual orientation" }),
    }
  ),
  relationship_status: z.enum(
    [
      "single",
      "in-relationship",
      "married",
      "divorced",
      "widowed",
      "polyamorous",
      "other",
    ],
    {
      errorMap: () => ({ message: "Please select your relationship status" }),
    }
  ),
});
export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

// Step 2: Interests & Goals
export const InterestsGoalsSchema = z.object({
  interests: z
    .array(z.string(), {
      errorMap: () => ({ message: "Please enter at least one interest" }),
    })
    .min(1, "Please enter at least one interest"),
  goals: z
    .array(z.string(), {
      errorMap: () => ({ message: "Please enter at least one goal" }),
    })
    .min(1, "Please enter at least one goal"),
});
export type InterestsGoals = z.infer<typeof InterestsGoalsSchema>;

// Step 3: Location & Distance
export const LocationSchema = z.object({
  postcode: z
    .string({
      errorMap: () => ({ message: "Please enter your postcode" }),
    })
    .min(1, "Please enter your postcode"),
  distance_threshold: z.object({
    value: z.coerce.number({
      errorMap: () => ({ message: "Please enter the distance threshold" }),
    }),
    unit: z.enum(["km", "miles"], {
      errorMap: () => ({ message: "Please select the unit of distance" }),
    }),
  }),
});
export type Location = z.infer<typeof LocationSchema>;

// Step 4: Budget & Format
export const BudgetSchema = z.object({
  budget: z
    .number({ errorMap: () => ({ message: "Please select your budget" }) })
    .min(0),
  willingness_for_online: z.boolean().optional(),
});
export type Budget = z.infer<typeof BudgetSchema>;

// Step 5: Availability & Time
const acceptableTimesSchema = z
  .object({
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    allDay: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.startTime && data.endTime) {
      if (data.startTime >= data.endTime) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Start time must be before end time",
        });
      }
    }

    if (!data.startTime && !data.endTime && !data.allDay) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Please select a time or tick the all time availability checkbox",
      });
    }
  });

export const AvailabilitySchema = z.object({
  time_commitment_in_minutes: z.number({
    errorMap: () => ({ message: "Please select your time commitment" }),
  }),
  acceptable_times: z.object({
    weekdays: acceptableTimesSchema,
    weekends: acceptableTimesSchema,
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
