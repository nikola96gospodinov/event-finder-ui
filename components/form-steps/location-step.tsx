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
import { UserProfile, DistanceThreshold } from "@/types/user-profile";

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
              htmlFor="city"
              className="text-sm font-medium flex items-center gap-2"
            >
              🏙️ City
            </Label>
            <Input
              id="city"
              value={formData.location.city}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  location: { ...prev.location, city: e.target.value },
                }))
              }
              placeholder="New York"
              className="border-2 border-orange-200 focus:border-orange-500"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="state"
              className="text-sm font-medium flex items-center gap-2"
            >
              🗺️ State
            </Label>
            <Input
              id="state"
              value={formData.location.state}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  location: { ...prev.location, state: e.target.value },
                }))
              }
              placeholder="NY"
              className="border-2 border-orange-200 focus:border-orange-500"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="country"
              className="text-sm font-medium flex items-center gap-2"
            >
              🌎 Country
            </Label>
            <Input
              id="country"
              value={formData.location.country}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  location: { ...prev.location, country: e.target.value },
                }))
              }
              placeholder="USA"
              className="border-2 border-red-200 focus:border-red-500"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="zipcode"
              className="text-sm font-medium flex items-center gap-2"
            >
              📮 Zip Code
            </Label>
            <Input
              id="zipcode"
              value={formData.location.zipcode}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  location: { ...prev.location, zipcode: e.target.value },
                }))
              }
              placeholder="10001"
              className="border-2 border-red-200 focus:border-red-500"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border-2 border-orange-200">
        <Label className="text-lg font-semibold text-orange-700 mb-4 block">
          📍 Distance Threshold
        </Label>
        <Select
          value={formData.distance_threshold.toString()}
          onValueChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              distance_threshold: parseInt(value) as DistanceThreshold,
            }))
          }
        >
          <SelectTrigger className="border-2 border-orange-200 focus:border-orange-500">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 mile 🚶</SelectItem>
            <SelectItem value="5">5 miles 🚴</SelectItem>
            <SelectItem value="10">10 miles 🚗</SelectItem>
            <SelectItem value="25">25 miles 🛣️</SelectItem>
            <SelectItem value="50">50 miles ✈️</SelectItem>
            <SelectItem value="100">100 miles 🌟</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
