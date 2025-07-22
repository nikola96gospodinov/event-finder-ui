import { supabase } from "@/lib/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FETCH_USER_QUERY_KEY } from "./auth.keys";

export type RegisterProps = {
  email: string;
  password: string;
};

const register = async (credentials: RegisterProps) => {
  const { data, error } = await supabase.auth.signUp({
    email: credentials.email,
    password: credentials.password,
  });

  if (error) {
    console.error("Error registering", error);
    throw new Error(error.message);
  }

  return data;
};

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FETCH_USER_QUERY_KEY });
    },
  });
};
