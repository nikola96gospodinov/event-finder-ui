"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-react";
import { UserProfile } from "@/types/user-profile";

interface LocationStepProps {
  formData: UserProfile;
  setFormData: React.Dispatch<React.SetStateAction<UserProfile>>;
}

export const LocationStep: React.FC<LocationStepProps> = ({
  formData,
  setFormData,
}) => {
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
          <div className="space-y-2">
            <Label
              htmlFor="postcode"
              className="text-sm font-medium flex items-center gap-2"
            >
              📮 Postcode
            </Label>
            <Input
              id="postcode"
              value={formData.postcode}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  postcode: e.target.value,
                }))
              }
              placeholder="EC1A 1BB"
              className="border-2 border-red-200 focus:border-red-500"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border-2 border-orange-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center gap-2">
              🏠 Distance Threshold
            </Label>

            <Input
              className="border-2 border-orange-200 focus:border-orange-500"
              type="number"
              value={formData.distance_threshold.value}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  distance_threshold: {
                    ...prev.distance_threshold,
                    value: parseInt(e.target.value),
                  },
                }))
              }
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center gap-2">
              🛣️ Units of Distance
            </Label>
            <Select
              value={formData.distance_threshold.unit}
              onValueChange={(value: "km" | "miles") =>
                setFormData((prev) => ({
                  ...prev,
                  distance_threshold: {
                    ...prev.distance_threshold,
                    unit: value,
                  },
                }))
              }
            >
              <SelectTrigger className="border-2 border-orange-200 focus:border-orange-500">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="miles">Miles</SelectItem>
                <SelectItem value="km">Kilometres</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
