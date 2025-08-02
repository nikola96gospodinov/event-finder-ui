"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
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
import { MapPin } from "lucide-react";
import { UserProfile } from "@/types/user-profile";

const distanceUnitOptions = [
  { value: "miles", label: "Miles" },
  { value: "km", label: "Kilometres" },
];

type LocationStepProps = {
  form: UseFormReturn<UserProfile>;
};

export const LocationStep = ({ form }: LocationStepProps) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8 relative">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-3 md:p-4 rounded-full">
            <MapPin className="h-8 w-8 md:h-12 md:w-12 text-white" />
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mt-2 md:mt-4 mb-1 md:mb-2">
          Location & Distance
        </h2>
        <p className="text-muted-foreground">
          Let&apos;s find events around you 📍
        </p>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 md:p-6 rounded-xl border border-orange-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="postcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="text-sm font-medium flex items-center gap-1"
                  includeExplanationTooltip
                  explanation="We use your postcode to find events around you"
                  tooltipIconClassNames="text-orange-700 mb-0.25"
                >
                  📮 Postcode
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="EC1A 1BB"
                    className="border-2 border-red-200 focus:border-red-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="bg-white p-4 md:p-6 rounded-xl border-2 border-orange-200">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-md md:text-lg font-semibold text-orange-700 mb-2 block">
            How far are you willing to travel for an event? 🚗
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="distance_threshold.value"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium flex items-center gap-2">
                  🏠 Distance
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    className="border-2 border-orange-200 focus:border-orange-500"
                    placeholder="20"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="distance_threshold.unit"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium flex items-center gap-2">
                  🛣️ Units of Distance
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-2 border-orange-200 focus:border-orange-500">
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {distanceUnitOptions.map((option) => (
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
      </div>
    </div>
  );
};
