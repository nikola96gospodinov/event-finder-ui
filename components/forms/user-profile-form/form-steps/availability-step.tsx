"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
          <FormField
            control={form.control}
            name="time_commitment_in_minutes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold text-violet-700 flex items-center gap-2">
                  ⏱️ How much time can you commit per event?
                </FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(parseInt(value))}
                  value={field.value?.toString()}
                >
                  <FormControl>
                    <SelectTrigger className="border-2 border-violet-200 focus:border-violet-500">
                      <SelectValue placeholder="Select time commitment" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {timeCommitmentOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
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
                  <FormField
                    control={form.control}
                    name={`acceptable_times.${day}.startTime`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Start Time</FormLabel>
                        <FormControl>
                          <Input
                            type="time"
                            className="border-2 border-violet-200 focus:border-violet-500 appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              form.trigger(`acceptable_times.${day}`);
                            }}
                            step={1}
                            max={form.watch(`acceptable_times.${day}.endTime`)}
                            disabled={form.watch(
                              `acceptable_times.${day}.allDay`
                            )}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`acceptable_times.${day}.endTime`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>End Time</FormLabel>
                        <FormControl>
                          <Input
                            type="time"
                            className="border-2 border-violet-200 focus:border-violet-500 appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              form.trigger(`acceptable_times.${day}`);
                            }}
                            step={1}
                            min={form.watch(
                              `acceptable_times.${day}.startTime`
                            )}
                            disabled={form.watch(
                              `acceptable_times.${day}.allDay`
                            )}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="mt-4">
                  <FormField
                    control={form.control}
                    name={`acceptable_times.${day}.allDay`}
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(value) => {
                              field.onChange(value);
                              form.trigger(`acceptable_times.${day}`);
                            }}
                            className="border-2 border-violet-300"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-violet-700">
                            I am available at all times
                          </FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {form.formState.errors.acceptable_times?.[day]?.message && (
                    <p className="text-sm text-destructive mt-2">
                      {form.formState.errors.acceptable_times?.[day]?.message}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
