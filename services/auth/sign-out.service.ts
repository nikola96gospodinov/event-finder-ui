import { supabase } from "@/lib/supabase";
import { useMutation } from "@tanstack/react-query";

const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error signing out", error);
    throw new Error(error.message);
  }

  return true;
};

export const useSignOut = () => {
  return useMutation({
    mutationFn: signOut,
  });
};
