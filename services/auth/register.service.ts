import { supabase } from "@/lib/supabase";
import { useMutation } from "@tanstack/react-query";

const register = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
  });
};
