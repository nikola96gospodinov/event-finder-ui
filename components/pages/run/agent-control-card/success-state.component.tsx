import { CheckCircle, Mail } from "lucide-react";

export const SuccessState = () => (
  <div className="text-center py-12">
    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
    <h3 className="text-xl font-bold text-purple-900 mb-2">
      Your own AI Agent is now running! 🤖
    </h3>

    <p className="text-md text-purple-800 flex items-center justify-center gap-2 mb-1">
      <Mail className="h-4 w-4 text-purple-500" /> You&apos;ll receive the
      results via email
    </p>
    <p className="text-sm text-purple-700 mb-6">
      It might take up to a few hours for the results to be ready
    </p>

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
  </div>
);
