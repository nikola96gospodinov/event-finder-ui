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
import { useFetchProfile } from "@/services/profile/fetch-profile.service";
import { Spinner } from "@/components/ui/spinner";
import { Database } from "@/types/database.types";

export const UserProfileForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const { data: profile, isLoading: isProfileLoading } = useFetchProfile();

  const totalSteps = 6;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  if (isProfileLoading) {
    return <Spinner />;
  }

  return (
    <div className="max-w-5xl mx-auto p-2 md:p-16">
      <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
          <CardTitle className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8" />
            Profile Builder
            <Sparkles className="h-8 w-8" />
          </CardTitle>
          <CardDescription className="text-purple-50 text-md md:text-lg font-semibold">
            The more we know about you the more accurate recommendations we can
            make.
          </CardDescription>
          <div className="mt-6">
            <Progress
              value={progress}
              className="w-full h-2 md:h-3 bg-white/20"
              indicatorClassName="bg-purple-50"
            />
            <p className="text-xs md:text-sm text-purple-50 mt-3 font-semibold">
              Step {currentStep + 1} of {totalSteps} Complete
            </p>
          </div>
        </CardHeader>

        <CardContent className="p-6 md:p-8">
          <FormContent
            currentStep={currentStep}
            profile={profile}
            setCurrentStep={setCurrentStep}
            totalSteps={totalSteps}
          />
        </CardContent>
      </Card>
    </div>
  );
};

const stepsValidation = [
  PersonalInfoSchema,
  InterestsGoalsSchema,
  LocationSchema,
  BudgetSchema,
  AvailabilitySchema,
  UserProfileSchema,
];

const FormContent = ({
  currentStep,
  profile,
  setCurrentStep,
  totalSteps,
}: {
  currentStep: number;
  profile?: Database["public"]["Tables"]["profiles"]["Row"];
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  totalSteps: number;
}) => {
  const currentStepValidation = stepsValidation[currentStep];
  const form = useForm<UserProfile>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(currentStepValidation as any),
    mode: "onChange",
    defaultValues: {
      birthday: profile?.birthday,
      occupation: profile?.occupation,
      gender: profile?.gender,
      sexual_orientation: profile?.sexual_orientation,
      relationship_status: profile?.relationship_status,
      goals: profile?.goals,
      interests: profile?.interests,
      postcode: profile?.postcode,
      distance_threshold: {
        value: profile?.distance_threshold_value,
        unit: profile?.distance_threshold_unit,
      },
      budget: profile?.budget,
      willingness_for_online: profile?.willingness_for_online ?? undefined,
      time_commitment_in_minutes: profile?.time_commitment_in_minutes,
      acceptable_times: {
        weekdays: {
          startTime: profile?.weekday_start_time ?? undefined,
          endTime: profile?.weekday_end_time ?? undefined,
          allDay: !profile?.weekday_start_time && !profile?.weekday_end_time,
        },
        weekends: {
          startTime: profile?.weekend_start_time ?? undefined,
          endTime: profile?.weekend_end_time ?? undefined,
          allDay: !profile?.weekend_start_time && !profile?.weekend_end_time,
        },
      },
    },
  });

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
    <>
      <Form {...form}>{renderStep()}</Form>

      <div className="flex justify-between pt-8 border-t border-purple-200 mt-8">
        <Button
          onClick={prevStep}
          disabled={currentStep === 0}
          variant="outline"
        >
          <ChevronLeft className="h-5 w-5" />
          Previous
        </Button>

        {currentStep < totalSteps - 1 && (
          <Button onClick={nextStep}>
            Next
            <ChevronRight className="h-5 w-5" />
          </Button>
        )}
      </div>
    </>
  );
};
