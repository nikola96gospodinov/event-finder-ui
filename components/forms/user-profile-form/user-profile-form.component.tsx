"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Form } from "@/components/ui/form";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import {
  UserProfile,
  PersonalInfoSchema,
  InterestsGoalsSchema,
  LocationSchema,
  BudgetSchema,
  AvailabilitySchema,
  UserProfileSchema,
} from "@/types/user-profile";
import {
  PersonalInfoStep,
  InterestsGoalsStep,
  LocationStep,
  BudgetStep,
  AvailabilityStep,
  ReviewStep,
} from "@/components/forms/user-profile-form/form-steps";

const stepsValidation = [
  PersonalInfoSchema,
  InterestsGoalsSchema,
  LocationSchema,
  BudgetSchema,
  AvailabilitySchema,
  UserProfileSchema,
];

export const UserProfileForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const currentStepValidation = stepsValidation[currentStep];
  const form = useForm<UserProfile>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(currentStepValidation as any),
    mode: "onChange",
  });

  const totalSteps = 6;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const nextStep = async () => {
    if (currentStep < totalSteps - 1) {
      const isValid = await form.trigger();
      if (isValid) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoStep form={form} />;
      case 1:
        return <InterestsGoalsStep form={form} />;
      case 2:
        return <LocationStep form={form} />;
      case 3:
        return <BudgetStep form={form} />;
      case 4:
        return <AvailabilityStep form={form} />;
      case 5:
        return <ReviewStep form={form} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-16">
      <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
          <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8" />
            Profile Builder
            <Sparkles className="h-8 w-8" />
          </CardTitle>
          <CardDescription className="text-purple-50 text-lg font-semibold">
            The more we know about you the more accurate recommendations we can
            make.
          </CardDescription>
          <div className="mt-6">
            <Progress
              value={progress}
              className="w-full h-3 bg-white/20"
              indicatorClassName="bg-purple-50"
            />
            <p className="text-sm text-purple-50 mt-3 font-semibold">
              Step {currentStep + 1} of {totalSteps} Complete
            </p>
          </div>
        </CardHeader>

        <CardContent className="p-8">
          <Form {...form}>{renderStep()}</Form>

          <div className="flex justify-between pt-8 border-t border-purple-200 mt-8">
            <Button
              onClick={prevStep}
              disabled={currentStep === 0}
              variant="outline"
              className="flex items-center gap-2 border-2 border-purple-300 text-purple-600 hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
              Previous
            </Button>

            {currentStep < totalSteps - 1 ? (
              <Button
                onClick={nextStep}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Next
                <ChevronRight className="h-5 w-5" />
              </Button>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
