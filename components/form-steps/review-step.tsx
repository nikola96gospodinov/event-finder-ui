"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star } from "lucide-react";
import { UserProfile } from "@/types/user-profile";

interface ReviewStepProps {
  formData: UserProfile;
  onSubmit: () => void;
}

export const ReviewStep: React.FC<ReviewStepProps> = ({
  formData,
  onSubmit,
}) => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <span className="font-semibold text-rose-600">📧 Email:</span>
              <span className="text-gray-700">{formData.email}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-rose-600">🎂 Age:</span>
              <span className="text-gray-700">{formData.age}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-rose-600">
                💼 Occupation:
              </span>
              <span className="text-gray-700">{formData.occupation}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-rose-600">📍 Location:</span>
              <span className="text-gray-700">
                {formData.location.city}, {formData.location.state},{" "}
                {formData.location.country}
              </span>
            </p>
          </div>
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <span className="font-semibold text-pink-600">💰 Budget:</span>
              <span className="text-gray-700">
                {formData.willingness_to_pay ? `$${formData.budget}` : "Free"}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-pink-600">💻 Online:</span>
              <span className="text-gray-700">
                {formData.willingness_for_online ? "Yes" : "No"}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-pink-600">⏰ Time:</span>
              <span className="text-gray-700">
                {formData.time_commitment_in_minutes} minutes
              </span>
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
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

      <div className="bg-gray-900 text-green-400 p-6 rounded-xl font-mono text-sm overflow-auto border-2 border-gray-700">
        <div className="mb-2 text-green-300">💻 JSON Output Preview:</div>
        <pre className="whitespace-pre-wrap">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>

      <Button
        onClick={onSubmit}
        className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
      >
        🚀 Submit My Awesome Profile
      </Button>
    </div>
  );
};
