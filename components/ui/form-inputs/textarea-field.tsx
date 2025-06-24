import * as React from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export type TextareaFieldProps = React.ComponentProps<"textarea"> & {
  label?: string;
  error?: string;
  required?: boolean;
  helperText?: string;
  labelClassName?: string;
  errorClassName?: string;
  helperTextClassName?: string;
};

const TextareaField = React.forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  (
    {
      label,
      error,
      required = false,
      helperText,
      className,
      labelClassName,
      errorClassName,
      helperTextClassName,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;

    return (
      <div className="space-y-2">
        {label && (
          <Label
            htmlFor={textareaId}
            className={cn(
              "text-sm font-medium text-foreground",
              labelClassName
            )}
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : helperText
              ? `${textareaId}-helper`
              : undefined
          }
          {...props}
        />
        {error && (
          <p
            id={`${textareaId}-error`}
            className={cn("text-sm text-destructive", errorClassName)}
          >
            {error}
          </p>
        )}
        {helperText && !error && (
          <p
            id={`${textareaId}-helper`}
            className={cn("text-sm text-muted-foreground", helperTextClassName)}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextareaField.displayName = "TextareaField";

export { TextareaField };
