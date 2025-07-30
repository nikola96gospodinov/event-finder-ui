"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useRunAgent } from "@/services/agent/run-agent.service";
import { Play, CheckCircle, Clock3, AlertCircle } from "lucide-react";
import { Database } from "@/types/database.types";

interface AgentControlCardProps {
  runs: Database["public"]["Tables"]["runs"]["Row"][];
}

const SuccessState = () => (
  <div className="text-center py-12">
    <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
    <h3 className="text-2xl font-bold text-purple-900 mb-4">
      Agent Started Successfully!
    </h3>
    <p className="text-lg text-purple-800 mb-6">
      Your event search is now running. You&apos;ll receive the results via
      email.
    </p>
    <div className="flex items-center justify-center gap-3 text-sm text-purple-600 bg-purple-50 rounded-lg p-4 border border-purple-200">
      <Clock3 className="h-5 w-5" />
      <span className="font-medium">
        It might take up to a few hours for the results to be ready.
      </span>
    </div>
  </div>
);

const OutOfRunsState = ({ maxRuns }: { maxRuns: number }) => (
  <div className="text-center py-12">
    <AlertCircle className="h-20 w-20 text-red-500 mx-auto mb-6" />
    <h3 className="text-2xl font-bold text-red-900 mb-4">
      Monthly Run Limit Reached
    </h3>
    <p className="text-lg text-red-800 mb-6">
      You&apos;ve used all {maxRuns} runs for this month. New runs will be
      available at the start of next month.
    </p>
    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
      <h4 className="font-semibold text-purple-900 mb-3 text-lg text-left">
        What you can do:
      </h4>
      <ul className="text-sm text-purple-800 space-y-2">
        <li className="flex items-center gap-2">
          <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
          Get premium access to get more runs (coming soon 🤩)
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
          Wait for next month to get new runs
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
          Check your email for previous run results
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
          Update your profile to improve future results
        </li>
      </ul>
    </div>
  </div>
);

const MainFormState = ({
  onlyHighlyRelevant,
  setOnlyHighlyRelevant,
  isRunning,
  onRunAgent,
}: {
  onlyHighlyRelevant: boolean;
  setOnlyHighlyRelevant: (value: boolean) => void;
  isRunning: boolean;
  onRunAgent: () => void;
}) => (
  <>
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <Checkbox
          id="highly-relevant"
          checked={onlyHighlyRelevant}
          onCheckedChange={(checked) =>
            setOnlyHighlyRelevant(checked as boolean)
          }
          className="border-purple-300 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
        />
        <label
          htmlFor="highly-relevant"
          className="text-base font-medium text-purple-900 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Only include highly relevant events
        </label>
      </div>
      <p className="text-sm text-purple-700 pl-6">
        When enabled, the agent will be more selective and only return events
        that closely match your interests and preferences.
      </p>
    </div>

    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
      <h4 className="font-semibold text-purple-900 mb-3 text-lg">
        What happens next?
      </h4>
      <ul className="text-sm text-purple-800 space-y-2">
        <li className="flex items-center gap-2">
          <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
          Our AI analyzes your profile and preferences
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
          Searches for events in your area within your budget
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
          Filters based on your availability and interests
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
          Sends personalized recommendations to your email
        </li>
      </ul>
    </div>

    <Button
      onClick={onRunAgent}
      disabled={isRunning}
      className="text-md md:text-xl shadow-lg"
      size="full"
    >
      <Play className="mr-3 h-6 w-6" />
      Start Event Search
    </Button>
  </>
);

export const AgentControlCard = ({ runs }: AgentControlCardProps) => {
  const [onlyHighlyRelevant, setOnlyHighlyRelevant] = useState(true);
  const { mutate: runAgent, isPending: isRunning, isSuccess } = useRunAgent();

  const runsUsed = runs.length;
  const maxRuns = 2;
  const runsLeft = maxRuns - runsUsed;
  const isOutOfRuns = runsLeft <= 0;

  const handleRunAgent = () => {
    runAgent({ onlyHighlyRelevant });
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
        onlyHighlyRelevant={onlyHighlyRelevant}
        setOnlyHighlyRelevant={setOnlyHighlyRelevant}
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
