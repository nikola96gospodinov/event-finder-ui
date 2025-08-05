import { AlertCircle } from "lucide-react";

export const FormError = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <div className="flex items-center justify-center gap-2 text-red-500 bg-red-50 rounded-lg p-4 border border-red-500">
      <AlertCircle className="h-5 w-5 text-red-500" />
      <p className="text-sm">{errorMessage}</p>
    </div>
  );
};
