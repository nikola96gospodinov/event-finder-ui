import { supabase } from "@/lib/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FETCH_USER_QUERY_KEY } from "./auth.keys";

const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error signing out", error);
    throw new Error(error.message);
  }

  return true;
};

export const useSignOut = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.setQueryData(FETCH_USER_QUERY_KEY, null);
    },
  });
};
