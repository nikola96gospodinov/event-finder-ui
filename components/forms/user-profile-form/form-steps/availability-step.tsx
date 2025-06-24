"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Clock } from "lucide-react";
import { UserProfile } from "@/types/user-profile";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../../../ui/input";
import { Checkbox } from "../../../ui/checkbox";

interface AvailabilityStepProps {
  form: UseFormReturn<UserProfile>;
}

const dayLabels = ["weekdays", "weekends"] as const;

export const AvailabilityStep: React.FC<AvailabilityStepProps> = ({ form }) => {
  const { setValue, watch } = form;
  const formData = watch();

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
        <p className="text-muted-foreground">
          Let&apos;s get to know your availability ⏰
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-xl border border-violet-200">
          <div className="space-y-2">
            <Label className="text-lg font-semibold text-violet-700 flex items-center gap-2">
              ⏱️ How much time can you commit per event?
            </Label>
            <Select
              value={formData?.time_commitment_in_minutes?.toString()}
              onValueChange={(value: "120" | "240" | "360" | "1200") =>
                setValue("time_commitment_in_minutes", parseInt(value))
              }
            >
              <SelectTrigger className="border-2 border-violet-200 focus:border-violet-500">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="120">Up to 2 hours</SelectItem>
                <SelectItem value="240">Up to 4 hours</SelectItem>
                <SelectItem value="360">Up to 6 hours</SelectItem>
                <SelectItem value="480">More than 6 hours</SelectItem>
              </SelectContent>
            </Select>
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
                  <div className="space-y-2 group">
                    <Label htmlFor={`${day}-startTime`}>Start Time</Label>
                    <Input
                      className="border-2 border-violet-200 focus:border-violet-500"
                      type="time"
                      value={formData.acceptable_times?.[day]?.startTime}
                      onChange={(e) =>
                        setValue(
                          `acceptable_times.${day}.startTime`,
                          e.target.value
                        )
                      }
                      disabled={formData.acceptable_times?.[day]?.allDay}
                    />
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor={`${day}-endTime`}>End Time</Label>
                    <Input
                      className="border-2 border-violet-200 focus:border-violet-500"
                      type="time"
                      value={formData.acceptable_times?.[day]?.endTime}
                      onChange={(e) =>
                        setValue(
                          `acceptable_times.${day}.endTime`,
                          e.target.value
                        )
                      }
                      disabled={formData.acceptable_times?.[day]?.allDay}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2 mt-4">
                  <Checkbox
                    checked={formData.acceptable_times?.[day]?.allDay}
                    onCheckedChange={() => {
                      const allDay = formData.acceptable_times?.[day]?.allDay;
                      setValue(
                        `acceptable_times.${day}.allDay`,
                        allDay ? !allDay : true
                      );
                    }}
                    className="border-2 border-violet-300"
                  />
                  <Label htmlFor={`${day}-morning`}>
                    I am available at all times
                  </Label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
