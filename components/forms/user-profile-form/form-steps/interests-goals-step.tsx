"use client";

import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Target } from "lucide-react";
import { UserProfile } from "@/types/user-profile";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

type InterestsGoalsStepProps = {
  form: UseFormReturn<UserProfile>;
};

export const InterestsGoalsStep = ({ form }: InterestsGoalsStepProps) => {
  const { setValue, watch } = form;
  const formData = watch();

  const [tempInterest, setTempInterest] = useState("");
  const [tempGoal, setTempGoal] = useState("");

  const addInterest = () => {
    if (tempInterest.trim()) {
      setValue("interests", [
        ...(formData.interests ?? []),
        tempInterest.trim(),
      ]);
      setTempInterest("");
      form.trigger("interests");
    }
  };

  const addGoal = () => {
    if (tempGoal.trim()) {
      setValue("goals", [...(formData.goals ?? []), tempGoal.trim()]);
      setTempGoal("");
      form.trigger("goals");
    }
  };

  const removeInterest = (index: number) => {
    setValue(
      "interests",
      formData.interests.filter((_, i) => i !== index)
    );
    form.trigger("interests");
  };

  const removeGoal = (index: number) => {
    setValue(
      "goals",
      formData.goals.filter((_, i) => i !== index)
    );
    form.trigger("goals");
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8 relative">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full">
            <Target className="h-12 w-12 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mt-4">
          Interests & Goals
        </h2>
        <p className="text-muted-foreground">What drives you? 🎯</p>
      </div>

      <div className="space-y-8">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-blue-700 mb-1">
              🎯 Goals
            </h3>
            <p className="text-sm text-muted-foreground">
              e.g. learn Spanish, make new friends, find a business partner,
              date around
            </p>
          </div>
          <div className="flex gap-2 mb-4">
            <div className="flex-1">
              <FormField
                control={form.control}
                name="goals"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <Input
                        value={tempGoal}
                        onChange={(e) => setTempGoal(e.target.value)}
                        placeholder="Enter a goal"
                        onKeyPress={(e) => e.key === "Enter" && addGoal()}
                        className="border-2 border-blue-200 focus:border-blue-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              onClick={addGoal}
              variant="outline"
              className="border-blue-300 text-blue-700 hover:bg-blue-100"
            >
              Add 🎯
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.goals?.map((goal, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer bg-white text-blue-700 hover:bg-blue-100 transition-all duration-200 hover:scale-105 border-blue-300"
                onClick={() => removeGoal(index)}
              >
                {goal} ×
              </Badge>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-green-700 mb-1">
              ✨ Interests
            </h3>
            <p className="text-sm text-muted-foreground">
              e.g. photography, hiking, Formula 1, coffee, board games
            </p>
          </div>
          <div className="flex gap-2 mb-4">
            <div className="flex-1">
              <FormField
                control={form.control}
                name="interests"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <Input
                        value={tempInterest}
                        onChange={(e) => setTempInterest(e.target.value)}
                        placeholder="Enter an interest"
                        onKeyPress={(e) => e.key === "Enter" && addInterest()}
                        className="border-2 border-green-200 focus:border-green-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              onClick={addInterest}
              variant="outline"
              className="border-green-300 text-green-700 hover:bg-green-100"
            >
              Add ✨
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.interests?.map((interest, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer bg-white text-green-700 hover:bg-green-100 transition-all duration-200 hover:scale-105 border-green-300"
                onClick={() => removeInterest(index)}
              >
                {interest} ×
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
