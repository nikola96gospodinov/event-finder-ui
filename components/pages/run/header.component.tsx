import { Sparkles } from "lucide-react";

export const Header = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-2">
        <Sparkles className="h-8 w-8 text-purple-600" />
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Event Finder Agent
        </h1>
        <Sparkles className="h-8 w-8 text-purple-600" />
      </div>
      <p className="text-xl text-purple-800 max-w-2xl mx-auto">
        Ready to discover amazing events tailored just for you?
      </p>
    </div>
  );
};
