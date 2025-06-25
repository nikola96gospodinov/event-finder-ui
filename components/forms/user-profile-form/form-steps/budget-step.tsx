"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { SelectField, CheckboxField } from "@/components/ui/form-inputs";
import { DollarSign } from "lucide-react";
import { UserProfile } from "@/types/user-profile";

const budgetOptions = [
  { value: "0", label: "Free events only ($0) 🆓" },
  { value: "10", label: "Up to $10 per event 💵" },
  { value: "20", label: "Up to $20 per event 🌱" },
  { value: "50", label: "Up to $50 per event ⭐" },
  { value: "100", label: "Up to $100 per event 💎" },
  { value: "200", label: "Up to $200 per event 🏆" },
  { value: "500", label: "Up to $500 per event 👑" },
  { value: "1000", label: "Premium events ($1000+) 🌟" },
];

type BudgetStepProps = {
  form: UseFormReturn<UserProfile>;
};

export const BudgetStep = ({ form }: BudgetStepProps) => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = form;
  const formData = watch();

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8 relative">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-full">
            <DollarSign className="h-12 w-12 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mt-4">
          Event Budget & Format
        </h2>
        <p className="text-muted-foreground">
          What&apos;s your budget for events? 🎟️
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
          <SelectField
            label="💰 Do you have a budget in mind for events?"
            options={budgetOptions}
            value={formData?.budget?.toString()}
            onValueChange={(value) => {
              const budgetValue = parseInt(value);
              setValue("budget", budgetValue);
              form.trigger("budget");
            }}
            triggerClassName="border-2 border-emerald-200 focus:border-emerald-500"
            labelClassName="text-lg font-semibold text-emerald-700 mb-4 block"
            error={errors.budget?.message}
          />
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200">
          <CheckboxField
            label="💻 I'm open to attending virtual/online events"
            checked={formData.willingness_for_online ?? false}
            onCheckedChange={(checked) => {
              setValue("willingness_for_online", !!checked);
              form.trigger("willingness_for_online");
            }}
            checkboxClassName="border-2 border-teal-300"
            labelClassName="text-lg font-medium text-teal-700"
            error={errors.willingness_for_online?.message}
          />
        </div>
      </div>
    </div>
  );
};
