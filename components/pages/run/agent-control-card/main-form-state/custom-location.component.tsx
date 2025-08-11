"use client";

import { UseFormReturn } from "react-hook-form";
import { RunFormData } from "../agent-control-card.component";
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { useFetchProfile } from "@/services/profile/fetch-profile.service";

type CustomLocationProps = {
  form: UseFormReturn<RunFormData>;
};

export const CustomLocation = ({ form }: CustomLocationProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("default");

  const { data: profile } = useFetchProfile();

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
  };

  return (
    <div className="space-y-6 px-6 pb-6 border border-purple-300 rounded-lg bg-purple-50">
      <p className="text-purple-950 transform  bg-white px-2 py-1 rounded-md border-x border-b border-purple-300 text-center shadow-md">
        What location do you want to run the agent with?
      </p>

      <RadioGroup
        value={selectedLocation}
        onValueChange={handleLocationChange}
        className="flex gap-4 items-start"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem value="default" />
          <FormLabel>Your location: ({profile?.postcode})</FormLabel>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="custom" />
          <FormLabel>Enter a custom location</FormLabel>
        </div>
      </RadioGroup>

      {selectedLocation === "custom" && (
        <FormField
          control={form.control}
          name="customLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Custom Location</FormLabel>
              <Input {...field} />
              <FormDescription>Enter a postcode or city name</FormDescription>
            </FormItem>
          )}
        />
      )}
    </div>
  );
};
