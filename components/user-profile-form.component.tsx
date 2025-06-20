"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { UserProfile } from "@/types/user-profile";
import {
  PersonalInfoStep,
  InterestsGoalsStep,
  LocationStep,
  BudgetStep,
  AvailabilityStep,
  ReviewStep,
} from "@/components/form-steps";

export const UserProfileForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<UserProfile>({
    interests: [],
    goals: [],
    occupation: "",
    email: "",
    age: 0,
    gender: "prefer-not-to-say",
    sexual_orientation: "prefer-not-to-say",
    relationship_status: "prefer-not-to-say",
    willingness_to_pay: false,
    budget: 0,
    willingness_for_online: false,
    acceptable_times: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
    },
    location: {
      city: "",
      state: "",
      country: "",
      zipcode: "",
    },
    distance_threshold: 10,
    time_commitment_in_minutes: 60,
    timeframe: "flexible",
  });

  const [tempInputs, setTempInputs] = useState({
    interest: "",
    goal: "",
  });

  const totalSteps = 6;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("User Profile Data (Python Dict Format):");
    console.log(JSON.stringify(formData, null, 2));
    alert("Profile submitted! Check the console for the Python dict format.");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalInfoStep formData={formData} setFormData={setFormData} />
        );
      case 1:
        return (
          <InterestsGoalsStep
            formData={formData}
            setFormData={setFormData}
            tempInputs={tempInputs}
            setTempInputs={setTempInputs}
          />
        );
      case 2:
        return <LocationStep formData={formData} setFormData={setFormData} />;
      case 3:
        return <BudgetStep formData={formData} setFormData={setFormData} />;
      case 4:
        return (
          <AvailabilityStep formData={formData} setFormData={setFormData} />
        );
      case 5:
        return <ReviewStep formData={formData} onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 p-4">
      <div className="max-w-5xl mx-auto">
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
            <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
              <Sparkles className="h-8 w-8" />
              Profile Builder
              <Sparkles className="h-8 w-8" />
            </CardTitle>
            <CardDescription className="text-purple-100 text-lg">
              Create your personalized profile in just a few steps
            </CardDescription>
            <div className="mt-6">
              <Progress value={progress} className="w-full h-3 bg-white/20" />
              <p className="text-sm text-purple-100 mt-3 font-semibold">
                Step {currentStep + 1} of {totalSteps} • {Math.round(progress)}%
                Complete
              </p>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            {renderStep()}

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
    </div>
  );
};
