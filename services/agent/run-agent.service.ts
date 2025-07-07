import { useMutation } from "@tanstack/react-query";

type RunAgentParams = {
  onlyHighlyRelevant: boolean;
};

const runAgent = async (params: RunAgentParams) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AGENT_API_URL}/run-agent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
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
