"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const radioGroupItemVariants = cva(
  "border-purple-300 text-purple-600 focus-visible:border-purple-500 focus-visible:ring-purple-300/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 data-[state=checked]:text-white dark:data-[state=checked]:bg-purple-500 dark:data-[state=checked]:border-purple-500",
  {
    variants: {
      size: {
        sm: "size-3",
        md: "size-4",
        lg: "size-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const radioGroupIndicatorVariants = cva(
  "relative flex items-center justify-center",
  {
    variants: {
      size: {
        sm: "",
        md: "",
        lg: "",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const radioGroupIconVariants = cva(
  "fill-current absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white",
  {
    variants: {
      size: {
        sm: "size-1.5",
        md: "size-2",
        lg: "size-2.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

interface RadioGroupItemProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioGroupItemVariants> {}

function RadioGroupItem({ className, size, ...props }: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(radioGroupItemVariants({ size }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className={cn(radioGroupIndicatorVariants({ size }))}
      >
        <CircleIcon className={cn(radioGroupIconVariants({ size }))} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
