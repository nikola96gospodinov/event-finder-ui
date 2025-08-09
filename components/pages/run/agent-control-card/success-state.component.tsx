import { CheckCircle, Clock3, Mail } from "lucide-react";

export const SuccessState = () => (
  <div className="text-center py-12">
    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
    <h3 className="text-xl font-bold text-purple-900 mb-2">
      Your own AI Agent is now running! 🤖
    </h3>
    <p className="text-md text-purple-800 mb-6 flex items-center justify-center gap-2">
      <Mail className="h-4 w-4 text-purple-500" /> You&apos;ll receive the
      results via email
    </p>
    <div className="flex items-center justify-center gap-3 text-purple-600 bg-purple-50 rounded-lg p-6 border border-purple-200">
      <Clock3 className="h-6 w-6" />
      <span>
        It might take up to a few hours for the results to be ready. Make sure
        you check your spam folder.
      </span>
    </div>
  </div>
);
