import { Sparkles } from "lucide-react";

export const Header = () => {
  return (
    <div className="text-center mb-6 md:mb-12 p-2 md:p-0">
      <div className="flex items-center justify-center gap-3 mb-2">
        <Sparkles className="h-8 w-8 text-purple-600" />
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Event Finding Agent
        </h1>
        <Sparkles className="h-8 w-8 text-purple-600" />
      </div>
      <p className="text-lg md:text-xl text-purple-800 max-w-2xl mx-auto">
        Ready to discover amazing events tailored just for you?
      </p>
    </div>
  );
};
