"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock } from "lucide-react";
import { UserProfile, AcceptableTimes } from "@/types/user-profile";

interface AvailabilityStepProps {
  formData: UserProfile;
  setFormData: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const timeSlots = [
  "6:00-8:00",
  "8:00-10:00",
  "10:00-12:00",
  "12:00-14:00",
  "14:00-16:00",
  "16:00-18:00",
  "18:00-20:00",
  "20:00-22:00",
];

const dayLabels = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export const AvailabilityStep: React.FC<AvailabilityStepProps> = ({
  formData,
  setFormData,
}) => {
  const toggleTimeSlot = (day: keyof AcceptableTimes, timeSlot: string) => {
    setFormData((prev) => ({
      ...prev,
      acceptable_times: {
        ...prev.acceptable_times,
        [day]: prev.acceptable_times[day].includes(timeSlot)
          ? prev.acceptable_times[day].filter((slot) => slot !== timeSlot)
          : [...prev.acceptable_times[day], timeSlot],
      },
    }));
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8 relative">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-violet-500 to-purple-500 p-4 rounded-full">
            <Clock className="h-12 w-12 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent mt-4">
          Time & Availability
        </h2>
        <p className="text-muted-foreground">When can we connect? ⏰</p>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-xl border border-violet-200">
          <div className="space-y-2">
            <Label className="text-lg font-semibold text-violet-700 flex items-center gap-2">
              ⏱️ How much time can you commit per event? (minutes)
            </Label>
            <Input
              type="number"
              value={formData.time_commitment_in_minutes}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  time_commitment_in_minutes: parseInt(e.target.value) || 60,
                }))
              }
              placeholder="60"
              className="border-2 border-violet-200 focus:border-violet-500 text-lg"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border-2 border-violet-200">
          <Label className="text-xl font-bold text-violet-700 mb-6 block">
            🗓️ When are you typically available?
          </Label>
          <div className="space-y-4">
            {dayLabels.map((day) => (
              <div
                key={day}
                className="bg-gradient-to-r from-violet-50 to-purple-50 border-2 border-violet-200 rounded-xl p-4 hover:border-violet-300 transition-all duration-300"
              >
                <h4 className="font-semibold mb-3 capitalize text-violet-700 text-lg">
                  {day}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {timeSlots.map((slot) => (
                    <div key={slot} className="flex items-center space-x-2">
                      <Checkbox
                        id={`${day}-${slot}`}
                        checked={formData.acceptable_times[day].includes(slot)}
                        onCheckedChange={() => toggleTimeSlot(day, slot)}
                        className="border-2 border-violet-300"
                      />
                      <Label
                        htmlFor={`${day}-${slot}`}
                        className="text-sm font-medium text-violet-600 cursor-pointer"
                      >
                        {slot}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
