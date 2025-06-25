"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  InputField,
  SelectField,
  CheckboxField,
} from "@/components/ui/form-inputs";
import { Clock } from "lucide-react";
import { UserProfile } from "@/types/user-profile";

type AvailabilityStepProps = {
  form: UseFormReturn<UserProfile>;
};

const dayLabels = ["weekdays", "weekends"] as const;

const timeCommitmentOptions = [
  { value: "120", label: "Up to 2 hours" },
  { value: "240", label: "Up to 4 hours" },
  { value: "360", label: "Up to 6 hours" },
  { value: "480", label: "More than 6 hours" },
];

export const AvailabilityStep = ({ form }: AvailabilityStepProps) => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = form;
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
          <SelectField
            label="⏱️ How much time can you commit per event?"
            options={timeCommitmentOptions}
            value={formData?.time_commitment_in_minutes?.toString()}
            onValueChange={(value: string) => {
              setValue("time_commitment_in_minutes", parseInt(value));
              form.trigger("time_commitment_in_minutes");
            }}
            triggerClassName="border-2 border-violet-200 focus:border-violet-500"
            labelClassName="text-lg font-semibold text-violet-700 flex items-center gap-2"
            error={errors.time_commitment_in_minutes?.message}
          />
        </div>

        <div className="bg-white p-6 rounded-xl border-2 border-violet-200">
          <h3 className="text-xl font-bold text-violet-700 mb-6">
            🗓️ When are you typically available?
          </h3>
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
                  <InputField
                    label="Start Time"
                    type="time"
                    value={formData.acceptable_times?.[day]?.startTime}
                    onChange={(e) => {
                      setValue(
                        `acceptable_times.${day}.startTime`,
                        e.target.value
                      );
                      form.trigger(`acceptable_times.${day}`);
                    }}
                    disabled={formData.acceptable_times?.[day]?.allDay}
                    className="border-2 border-violet-200 focus:border-violet-500"
                    error={errors.acceptable_times?.[day]?.startTime?.message}
                  />

                  <InputField
                    label="End Time"
                    type="time"
                    value={formData.acceptable_times?.[day]?.endTime}
                    onChange={(e) => {
                      setValue(
                        `acceptable_times.${day}.endTime`,
                        e.target.value
                      );
                      form.trigger(`acceptable_times.${day}`);
                    }}
                    disabled={formData.acceptable_times?.[day]?.allDay}
                    className="border-2 border-violet-200 focus:border-violet-500"
                    error={errors.acceptable_times?.[day]?.endTime?.message}
                  />
                </div>

                <div className="mt-4">
                  <CheckboxField
                    label="I am available at all times"
                    checked={formData.acceptable_times?.[day]?.allDay}
                    onCheckedChange={() => {
                      const allDay = formData.acceptable_times?.[day]?.allDay;
                      setValue(
                        `acceptable_times.${day}.allDay`,
                        allDay ? !allDay : true
                      );
                      form.trigger(`acceptable_times.${day}`);
                    }}
                    checkboxClassName="border-2 border-violet-300"
                    error={errors.acceptable_times?.[day]?.allDay?.message}
                  />
                </div>

                {errors.acceptable_times?.[day]?.message && (
                  <p className="text-sm text-destructive mt-2">
                    {errors.acceptable_times?.[day]?.message}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
