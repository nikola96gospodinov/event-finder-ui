import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 to-indigo-950 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Sparkles className="h-6 w-6 text-purple-300" />
          <span className="text-xl font-bold">EventFinder</span>
          <Sparkles className="h-6 w-6 text-purple-300" />
        </div>
        <p className="text-purple-200">
          Making event discovery personal, intelligent, and effortless.
        </p>
      </div>
    </footer>
  );
};
