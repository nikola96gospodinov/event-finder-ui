import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

type Props = {
  onlyHighlyRelevant: boolean;
};

const runAgent = async ({ onlyHighlyRelevant }: Props) => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    throw new Error("Failed to get authentication session");
  }

  if (!session?.access_token) {
    throw new Error("No authentication token available");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AGENT_API_URL}/api/v1/external/run-agent?only_highly_relevant=${onlyHighlyRelevant}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.access_token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to run agent");
  }

  return response.json();
};

export const useRunAgent = () => {
  return useMutation({
    mutationFn: runAgent,
  });
};
