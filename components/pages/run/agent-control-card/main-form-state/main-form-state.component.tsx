import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const MainFormState = ({
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
