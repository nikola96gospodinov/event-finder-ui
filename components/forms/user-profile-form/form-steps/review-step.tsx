"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star, Clock, Heart, Users } from "lucide-react";
import { UserProfile } from "@/types/user-profile";
import { useSaveProfile } from "@/services/profile/save-profile.service";
import { useRouter } from "next/navigation";

type ReviewStepProps = {
  form: UseFormReturn<UserProfile>;
};

export const ReviewStep = ({ form }: ReviewStepProps) => {
  const router = useRouter();
  const { handleSubmit, watch } = form;
  const formData = watch();

  const { mutate: createProfile, isPending, isError } = useSaveProfile();

  const onSubmit = (data: UserProfile) => {
    createProfile(data);
    router.push("/run");
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8 relative">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-rose-500 to-pink-500 p-4 rounded-full">
            <Calendar className="h-12 w-12 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mt-4">
          Review & Submit
        </h2>
        <p className="text-muted-foreground">
          Almost there! Let&apos;s review your profile ✨
        </p>
      </div>

      <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-xl border-2 border-rose-200">
        <h3 className="text-2xl font-bold text-rose-700 mb-6 flex items-center gap-2">
          <Star className="h-6 w-6" />
          Profile Summary
        </h3>

        {/* Personal Information */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-rose-600 mb-3 flex items-center gap-2">
            <Users className="h-5 w-5" />
            Personal Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-rose-600">🎂 Age:</span>
                <span className="text-gray-700">{formData.birthday}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-rose-600">
                  💼 Occupation:
                </span>
                <span className="text-gray-700">{formData.occupation}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-rose-600">👤 Gender:</span>
                <span className="text-gray-700 capitalize">
                  {formData.gender.replace("-", " ")}
                </span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-pink-600">
                  💕 Sexual Orientation:
                </span>
                <span className="text-gray-700 capitalize">
                  {formData.sexual_orientation.replace("-", " ")}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-pink-600">
                  💍 Relationship Status:
                </span>
                <span className="text-gray-700 capitalize">
                  {formData.relationship_status.replace("-", " ")}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-pink-600">
                  📍 Postcode:
                </span>
                <span className="text-gray-700">{formData.postcode}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-rose-600 mb-3 flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Preferences
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-rose-600">💰 Budget:</span>
                <span className="text-gray-700">
                  {formData.budget ? `£${formData.budget}` : "Free"}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-rose-600">💻 Online:</span>
                <span className="text-gray-700">
                  {formData.willingness_for_online ? "Yes" : "No"}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-rose-600">
                  ⏰ Time Commitment:
                </span>
                <span className="text-gray-700">
                  {formData.time_commitment_in_minutes} minutes
                </span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-pink-600">
                  🗺️ Distance:
                </span>
                <span className="text-gray-700">
                  {formData.distance_threshold.value}{" "}
                  {formData.distance_threshold.unit}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-rose-600 mb-3 flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Availability
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-rose-600 mb-2">📅 Weekdays:</p>
              <p className="text-gray-700">
                {formData.acceptable_times.weekdays.allDay
                  ? "Available at all times"
                  : `${formData.acceptable_times.weekdays.startTime} - ${formData.acceptable_times.weekdays.endTime}`}
              </p>
            </div>
            <div>
              <p className="font-semibold text-pink-600 mb-2">🌅 Weekends:</p>
              <p className="text-gray-700">
                {formData.acceptable_times.weekends.allDay
                  ? "Available at all times"
                  : `${formData.acceptable_times.weekends.startTime} - ${formData.acceptable_times.weekends.endTime}`}
              </p>
            </div>
          </div>
        </div>

        {/* Interests and Goals */}
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-rose-600 mb-2">✨ Interests:</p>
            <div className="flex flex-wrap gap-2">
              {formData.interests.map((interest, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-rose-100 text-rose-700"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-pink-600 mb-2">🎯 Goals:</p>
            <div className="flex flex-wrap gap-2">
              {formData.goals.map((goal, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-pink-100 text-pink-700"
                >
                  {goal}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Button
        onClick={handleSubmit(onSubmit)}
        className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        disabled={isPending}
      >
        {isPending ? "Saving..." : "🚀 Save My Profile"}
      </Button>

      {isError && (
        <div className="text-red-500 text-sm">
          Something went wrong. Please try again
        </div>
      )}
    </div>
  );
};
