import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <Sparkles className="h-8 w-8 text-purple-600" />
      <LogoText />
    </div>
  );
};

export const LogoText = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        "text-3xl bg-gradient-to-r font-bold from-purple-600 to-pink-600 bg-clip-text text-transparent tracking-wide",
        className
      )}
    >
      All<span className="text-pink-600 font-light">ivents</span>
    </span>
  );
};
