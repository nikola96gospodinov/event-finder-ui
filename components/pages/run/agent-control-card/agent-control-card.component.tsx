"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRunAgent } from "@/services/agent/run-agent.service";
import { Play } from "lucide-react";
import { Database } from "@/types/database.types";
import { SuccessState } from "./success-state.component";
import { OutOfRunsState } from "./out-of-runs.component";
import { MainFormState } from "./main-form-state/main-form-state.component";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface AgentControlCardProps {
  runs: Database["public"]["Tables"]["runs"]["Row"][];
}

const runFormSchema = z.object({
  onlyHighlyRelevant: z.boolean(),
  customLocation: z.string().optional(),
});

export type RunFormData = z.infer<typeof runFormSchema>;

export const AgentControlCard = ({ runs }: AgentControlCardProps) => {
  const { mutate: runAgent, isPending: isRunning, isSuccess } = useRunAgent();
  const form = useForm<RunFormData>({
    resolver: zodResolver(runFormSchema),
    defaultValues: {
      onlyHighlyRelevant: true,
      customLocation: undefined,
    },
  });

  const runsUsed = runs.length;
  const maxRuns = 2;
  const runsLeft = maxRuns - runsUsed;
  const isOutOfRuns = runsLeft <= 0;

  const handleRunAgent = () => {
    runAgent({
      onlyHighlyRelevant: form.watch("onlyHighlyRelevant"),
      customLocation: form.watch("customLocation"),
    });
  };

  const renderContent = () => {
    if (isSuccess) {
      return <SuccessState />;
    }

    if (isOutOfRuns) {
      return <OutOfRunsState maxRuns={maxRuns} />;
    }

    return (
      <MainFormState
        form={form}
        isRunning={isRunning}
        onRunAgent={handleRunAgent}
      />
    );
  };

  return (
    <div className="lg:col-span-2 order-1 lg:order-2">
      <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-3">
            <Play className="h-8 w-8" />
            Start Event Search
          </CardTitle>
          <CardDescription className="text-purple-50 text-md md:text-lg font-semibold">
            Our AI agent will analyze your profile and find the best events for
            you. Results will be sent to your email.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 space-y-8">{renderContent()}</CardContent>
      </Card>
    </div>
  );
};
