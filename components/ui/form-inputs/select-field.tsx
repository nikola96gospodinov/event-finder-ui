import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectFieldProps = {
  label?: string;
  error?: string;
  required?: boolean;
  helperText?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  errorClassName?: string;
  helperTextClassName?: string;
  triggerClassName?: string;
  id?: string;
};

const SelectField = React.forwardRef<HTMLButtonElement, SelectFieldProps>(
  (
    {
      label,
      error,
      required = false,
      helperText,
      placeholder = "Select an option",
      options,
      value,
      onValueChange,
      disabled = false,
      className,
      labelClassName,
      errorClassName,
      helperTextClassName,
      triggerClassName,
      id,
    },
    ref
  ) => {
    const generatedId = React.useId();
    const selectId = id || generatedId;

    return (
      <div className={cn("space-y-2", className)}>
        {label && (
          <Label
            htmlFor={selectId}
            className={cn(
              "text-sm font-medium text-foreground",
              labelClassName
            )}
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
        )}
        <Select value={value} onValueChange={onValueChange} disabled={disabled}>
          <SelectTrigger
            ref={ref}
            id={selectId}
            className={cn(
              error && "border-destructive focus:ring-destructive",
              triggerClassName
            )}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={
              error
                ? `${selectId}-error`
                : helperText
                ? `${selectId}-helper`
                : undefined
            }
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {error && (
          <p
            id={`${selectId}-error`}
            className={cn("text-sm text-destructive", errorClassName)}
          >
            {error}
          </p>
        )}
        {helperText && !error && (
          <p
            id={`${selectId}-helper`}
            className={cn("text-sm text-muted-foreground", helperTextClassName)}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

SelectField.displayName = "SelectField";

export { SelectField };
