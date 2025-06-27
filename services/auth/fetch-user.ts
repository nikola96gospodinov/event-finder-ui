import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";

const FETCH_USER_QUERY_KEY = ["user"];

const fetchUser = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching user", error);
    throw new Error(error.message);
  }

  return user;
};

export const useFetchUser = () => {
  return useQuery({
    queryKey: FETCH_USER_QUERY_KEY,
    queryFn: fetchUser,
  });
};
