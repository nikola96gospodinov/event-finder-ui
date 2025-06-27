"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold text-emerald-700 mb-4 block">
                  💰 Do you have a budget in mind for events?
                </FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(parseInt(value))}
                  value={field.value?.toString()}
                >
                  <FormControl>
                    <SelectTrigger className="border-2 border-emerald-200 focus:border-emerald-500">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {budgetOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200">
          <FormField
            control={form.control}
            name="willingness_for_online"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="border-2 border-teal-300 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-600 data-[state=checked]:text-white w-5 h-5 flex items-center justify-center"
                  />
                </FormControl>
                <FormLabel className="text-md font-medium text-teal-700 m-0 p-0 leading-none">
                  💻 I&apos;m open to attending virtual/online events
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};
