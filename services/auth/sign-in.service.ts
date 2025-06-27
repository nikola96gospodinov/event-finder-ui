import { supabase } from "@/lib/supabase";
import { useMutation } from "@tanstack/react-query";

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
  return useMutation({
    mutationFn: login,
  });
};
