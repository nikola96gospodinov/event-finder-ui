import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export interface CheckboxFieldProps {
  label?: string;
  error?: string;
  required?: boolean;
  helperText?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  errorClassName?: string;
  helperTextClassName?: string;
  checkboxClassName?: string;
  id?: string;
}

const CheckboxField = React.forwardRef<HTMLButtonElement, CheckboxFieldProps>(
  (
    {
      label,
      error,
      required = false,
      helperText,
      checked,
      onCheckedChange,
      disabled = false,
      className,
      labelClassName,
      errorClassName,
      helperTextClassName,
      checkboxClassName,
      id,
    },
    ref
  ) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;

    return (
      <div className={cn("space-y-2", className)}>
        <div className="flex items-start space-x-2">
          <Checkbox
            ref={ref}
            id={checkboxId}
            checked={checked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
            className={cn(
              "mt-0.5",
              error && "border-destructive",
              checkboxClassName
            )}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={
              error
                ? `${checkboxId}-error`
                : helperText
                ? `${checkboxId}-helper`
                : undefined
            }
          />
          {label && (
            <div className="space-y-1">
              <Label
                htmlFor={checkboxId}
                className={cn(
                  "text-sm font-medium text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                  labelClassName
                )}
              >
                {label}
                {required && <span className="text-destructive ml-1">*</span>}
              </Label>
            </div>
          )}
        </div>
        {error && (
          <p
            id={`${checkboxId}-error`}
            className={cn("text-sm text-destructive", errorClassName)}
          >
            {error}
          </p>
        )}
        {helperText && !error && (
          <p
            id={`${checkboxId}-helper`}
            className={cn("text-sm text-muted-foreground", helperTextClassName)}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

CheckboxField.displayName = "CheckboxField";

export { CheckboxField };
