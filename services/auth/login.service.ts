import { supabase } from "@/lib/supabase";
import { useMutation } from "@tanstack/react-query";

const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};
