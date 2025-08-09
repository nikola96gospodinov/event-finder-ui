import { AlertCircle } from "lucide-react";

export const OutOfRunsState = ({ maxRuns }: { maxRuns: number }) => (
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
