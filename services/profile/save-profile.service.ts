import { supabase } from "@/lib/supabase";
import { UserProfile } from "@/types/user-profile";
import { useMutation } from "@tanstack/react-query";

const saveProfile = async (profile: UserProfile) => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error(userError);
    throw new Error("Failed to get user");
  }

  const { data, error } = await supabase.from("profiles").upsert(
    {
      user_id: user.id,
      birthday: profile.birthday,
      occupation: profile.occupation,
      postcode: profile.postcode,
      gender: profile.gender,
      sexual_orientation: profile.sexual_orientation,
      relationship_status: profile.relationship_status,
      budget: profile.budget,
      distance_threshold_unit: profile.distance_threshold.unit,
      distance_threshold_value: profile.distance_threshold.value,
      interests: profile.interests,
      goals: profile.goals,
      willingness_for_online: profile.willingness_for_online,
      weekday_start_time: profile.acceptable_times.weekdays.allDay
        ? null
        : profile.acceptable_times.weekdays.startTime,
      weekday_end_time: profile.acceptable_times.weekdays.allDay
        ? null
        : profile.acceptable_times.weekdays.endTime,
      weekend_start_time: profile.acceptable_times.weekends.allDay
        ? null
        : profile.acceptable_times.weekends.startTime,
      weekend_end_time: profile.acceptable_times.weekends.allDay
        ? null
        : profile.acceptable_times.weekends.endTime,
      time_commitment_in_minutes: profile.time_commitment_in_minutes,
    },
    {
      onConflict: "user_id",
    }
  );

  if (error) {
    console.error(error);
    throw new Error("Failed to save profile");
  }

  return data;
};

export const useSaveProfile = () => {
  return useMutation({
    mutationFn: saveProfile,
  });
};
