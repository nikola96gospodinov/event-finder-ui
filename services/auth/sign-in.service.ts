import { supabase } from "@/lib/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FETCH_USER_QUERY_KEY } from "./auth.keys";

export type LogInProps = {
  email: string;
  password: string;
};

const login = async (credentials: LogInProps) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  });

  if (error) {
    console.error("Error logging in", error);
    throw new Error(error.message);
  }

  return data.user;
};

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      // Force an immediate refetch to trigger re-render
      queryClient.refetchQueries({ queryKey: FETCH_USER_QUERY_KEY });
    },
  });
};
