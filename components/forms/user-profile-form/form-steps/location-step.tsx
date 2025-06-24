"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { InputField, SelectField } from "@/components/ui/form-inputs";
import { MapPin } from "lucide-react";
import { UserProfile } from "@/types/user-profile";

interface LocationStepProps {
  form: UseFormReturn<UserProfile>;
}

export const LocationStep: React.FC<LocationStepProps> = ({ form }) => {
  const { register, setValue, watch } = form;
  const formData = watch();

  const distanceUnitOptions = [
    { value: "miles", label: "Miles" },
    { value: "km", label: "Kilometres" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8 relative">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-full">
            <MapPin className="h-12 w-12 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mt-4">
          Location & Distance
        </h2>
        <p className="text-muted-foreground">Where in the world are you? 🌍</p>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="📮 Postcode"
            {...register("postcode")}
            placeholder="EC1A 1BB"
            className="border-2 border-red-200 focus:border-red-500"
            labelClassName="text-sm font-medium flex items-center gap-2"
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border-2 border-orange-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="🏠 Distance Threshold"
            type="number"
            value={formData.distance_threshold?.value}
            onChange={(e) =>
              setValue("distance_threshold.value", parseInt(e.target.value))
            }
            min={0}
            className="border-2 border-orange-200 focus:border-orange-500"
            labelClassName="text-sm font-medium flex items-center gap-2"
          />

          <SelectField
            label="🛣️ Units of Distance"
            options={distanceUnitOptions}
            value={formData.distance_threshold?.unit}
            onValueChange={(value: string) =>
              setValue("distance_threshold.unit", value as "km" | "miles")
            }
            triggerClassName="border-2 border-orange-200 focus:border-orange-500"
          />
        </div>
      </div>
    </div>
  );
};
