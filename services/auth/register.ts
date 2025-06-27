import { supabase } from "@/lib/supabase";
import { useMutation } from "@tanstack/react-query";

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
  return useMutation({
    mutationFn: register,
  });
};
