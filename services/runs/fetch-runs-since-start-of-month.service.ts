import { supabase } from "@/lib/supabase";
import { getStartOfMonth } from "@/utils/dates.utils";
import { useQuery } from "@tanstack/react-query";

const RUNS_SINCE_START_OF_MONTH_QUERY_KEY = "runs-since-start-of-month";

const fetchRunsSinceStartOfMonth = async () => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user?.id) {
    throw new Error("Failed to get user");
  }

  const { data, error } = await supabase
    .from("runs")
    .select("*")
    .eq("user_id", user.id)
    .gte("run_date", getStartOfMonth());

  if (error) {
    throw new Error("Failed to fetch runs");
  }

  return data;
};

export const useFetchRunsSinceStartOfMonth = () => {
  return useQuery({
    queryKey: [RUNS_SINCE_START_OF_MONTH_QUERY_KEY],
    queryFn: fetchRunsSinceStartOfMonth,
  });
};
