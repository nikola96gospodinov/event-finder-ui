import { supabase } from "@/lib/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FETCH_USER_QUERY_KEY } from "./auth.keys";

const googleSignIn = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.error("Error signing in with Google", error);
    throw new Error(error.message);
  }

  return data;
};

export const useGoogleSignIn = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: googleSignIn,
    onSuccess: () => {
      // Force an immediate refetch to trigger re-render
      queryClient.refetchQueries({ queryKey: FETCH_USER_QUERY_KEY });
    },
  });
};
