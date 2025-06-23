"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target } from "lucide-react";
import { UserProfile } from "@/types/user-profile";

interface InterestsGoalsStepProps {
  formData: UserProfile;
  setFormData: React.Dispatch<React.SetStateAction<UserProfile>>;
  tempInputs: { interest: string; goal: string };
  setTempInputs: React.Dispatch<
    React.SetStateAction<{ interest: string; goal: string }>
  >;
}

export const InterestsGoalsStep: React.FC<InterestsGoalsStepProps> = ({
  formData,
  setFormData,
  tempInputs,
  setTempInputs,
}) => {
  const addInterest = () => {
    if (tempInputs.interest.trim()) {
      setFormData((prev) => ({
        ...prev,
        interests: [...prev.interests, tempInputs.interest.trim()],
      }));
      setTempInputs((prev) => ({ ...prev, interest: "" }));
    }
  };

  const addGoal = () => {
    if (tempInputs.goal.trim()) {
      setFormData((prev) => ({
        ...prev,
        goals: [...prev.goals, tempInputs.goal.trim()],
      }));
      setTempInputs((prev) => ({ ...prev, goal: "" }));
    }
  };

  const removeInterest = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.filter((_, i) => i !== index),
    }));
  };

  const removeGoal = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.filter((_, i) => i !== index),
    }));
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
          <Label className="text-lg font-semibold text-blue-700 mb-1 block">
            🎯 Goals
          </Label>
          <p className="text-sm text-muted-foreground mb-4">
            e.g. learn Spanish, make new friends, find a business partner, date
            around
          </p>
          <div className="flex gap-2 mb-4">
            <Input
              value={tempInputs.goal}
              onChange={(e) =>
                setTempInputs((prev) => ({
                  ...prev,
                  goal: e.target.value,
                }))
              }
              placeholder="Enter a goal"
              onKeyPress={(e) => e.key === "Enter" && addGoal()}
              className="border-2 border-blue-200 focus:border-blue-500"
            />
            <Button
              onClick={addGoal}
              variant="outline"
              className="border-blue-300 text-blue-700 hover:bg-blue-100"
            >
              Add 🎯
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.goals.map((goal, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all duration-200 hover:scale-105"
                onClick={() => removeGoal(index)}
              >
                {goal} ×
              </Badge>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
          <Label className="text-lg font-semibold text-green-700 mb-1 block">
            ✨ Interests
          </Label>
          <p className="text-sm text-muted-foreground mb-4">
            e.g. photography, hiking, Formula 1, coffee, board games
          </p>
          <div className="flex gap-2 mb-4">
            <Input
              value={tempInputs.interest}
              onChange={(e) =>
                setTempInputs((prev) => ({
                  ...prev,
                  interest: e.target.value,
                }))
              }
              placeholder="Enter an interest"
              onKeyPress={(e) => e.key === "Enter" && addInterest()}
              className="border-2 border-green-200 focus:border-green-500"
            />
            <Button
              onClick={addInterest}
              variant="outline"
              className="border-green-300 text-green-700 hover:bg-green-100"
            >
              Add ✨
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.interests.map((interest, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer bg-green-100 text-green-700 hover:bg-green-200 transition-all duration-200 hover:scale-105"
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
