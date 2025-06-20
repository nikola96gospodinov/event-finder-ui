"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DollarSign } from "lucide-react";
import { UserProfile, Budget } from "@/types/user-profile";

interface BudgetStepProps {
  formData: UserProfile;
  setFormData: React.Dispatch<React.SetStateAction<UserProfile>>;
}

export const BudgetStep: React.FC<BudgetStepProps> = ({
  formData,
  setFormData,
}) => {
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
          <Label className="text-lg font-semibold text-emerald-700 mb-4 block">
            💰 Do you have a budget in mind for events?
          </Label>
          <Select
            value={formData.budget.toString()}
            onValueChange={(value) => {
              const budgetValue = parseInt(value);
              setFormData((prev) => ({
                ...prev,
                budget: budgetValue as Budget,
                willingness_to_pay: budgetValue > 0,
              }));
            }}
          >
            <SelectTrigger className="border-2 border-emerald-200 focus:border-emerald-500">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Free events only ($0) 🆓</SelectItem>
              <SelectItem value="10">Up to $10 per event 💵</SelectItem>
              <SelectItem value="20">Up to $20 per event 🌱</SelectItem>
              <SelectItem value="50">Up to $50 per event ⭐</SelectItem>
              <SelectItem value="100">Up to $100 per event 💎</SelectItem>
              <SelectItem value="200">Up to $200 per event 🏆</SelectItem>
              <SelectItem value="500">Up to $500 per event 👑</SelectItem>
              <SelectItem value="1000">Premium events ($1000+) 🌟</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200">
          <div className="flex items-center space-x-3">
            <Checkbox
              id="willingness_for_online"
              checked={formData.willingness_for_online}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({
                  ...prev,
                  willingness_for_online: !!checked,
                }))
              }
              className="border-2 border-teal-300"
            />
            <Label
              htmlFor="willingness_for_online"
              className="text-lg font-medium text-teal-700"
            >
              💻 I&apos;m open to attending virtual/online events
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};
