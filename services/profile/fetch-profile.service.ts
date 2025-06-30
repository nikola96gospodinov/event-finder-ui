import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";

const FETCH_PROFILE_QUERY_KEY = ["profile"];

const fetchProfile = async () => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("Failed to get user");
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Failed to fetch profile");
  }

  return data;
};

export const useFetchProfile = () => {
  return useQuery({
    queryKey: FETCH_PROFILE_QUERY_KEY,
    queryFn: fetchProfile,
  });
};
