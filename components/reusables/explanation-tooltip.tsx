import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CircleQuestionMark } from "lucide-react";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  explanation?: string;
  iconClassNames?: string;
}>;

export const ExplanationTooltip = ({
  children,
  explanation,
  iconClassNames,
}: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <CircleQuestionMark
            className={cn("h-4 w-4 text-yellow-700", iconClassNames)}
          />
        </TooltipTrigger>
        <TooltipContent>{explanation ?? children}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
