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
import { User, Star, Zap } from "lucide-react";
import {
  UserProfile,
  GenderBiasOptions,
  SexualOrientationBiasOptions,
  RelationshipStatusBiasOptions,
} from "@/types/user-profile";

interface PersonalInfoStepProps {
  formData: UserProfile;
  setFormData: React.Dispatch<React.SetStateAction<UserProfile>>;
}

export const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({
  formData,
  setFormData,
}) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8 relative">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full">
            <User className="h-12 w-12 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mt-4">
          Personal Information
        </h2>
        <p className="text-muted-foreground">
          Let&apos;s get to know you better ✨
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 group">
          <Label
            htmlFor="age"
            className="text-sm font-medium flex items-center gap-2"
          >
            <Star className="h-4 w-4 text-pink-500" />
            Birthday
          </Label>
          <Input
            id="age"
            type="date"
            value={formData.birthday || ""}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                birthday: e.target.value,
              }))
            }
            placeholder="25"
            className="border-2 border-pink-200 focus:border-pink-500 transition-all duration-300 hover:border-pink-300"
          />
        </div>

        <div className="space-y-2 group">
          <Label
            htmlFor="occupation"
            className="text-sm font-medium flex items-center gap-2"
          >
            <Zap className="h-4 w-4 text-indigo-500" />
            Occupation
          </Label>
          <Input
            id="occupation"
            value={formData.occupation}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                occupation: e.target.value,
              }))
            }
            placeholder="Software Engineer"
            className="border-2 border-indigo-200 focus:border-indigo-500 transition-all duration-300 hover:border-indigo-300"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Gender</Label>
          <Select
            value={formData.gender}
            onValueChange={(value: GenderBiasOptions) =>
              setFormData((prev) => ({ ...prev, gender: value }))
            }
          >
            <SelectTrigger className="border-2 border-purple-200 focus:border-purple-500 transition-all duration-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="non-binary">Non-binary</SelectItem>
              <SelectItem value="prefer-not-to-say">
                Prefer not to say
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Sexual Orientation</Label>
          <Select
            value={formData.sexual_orientation}
            onValueChange={(value: SexualOrientationBiasOptions) =>
              setFormData((prev) => ({
                ...prev,
                sexual_orientation: value,
              }))
            }
          >
            <SelectTrigger className="border-2 border-pink-200 focus:border-pink-500 transition-all duration-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="heterosexual">Heterosexual</SelectItem>
              <SelectItem value="homosexual">Homosexual</SelectItem>
              <SelectItem value="bisexual">Bisexual</SelectItem>
              <SelectItem value="pansexual">Pansexual</SelectItem>
              <SelectItem value="asexual">Asexual</SelectItem>
              <SelectItem value="prefer-not-to-say">
                Prefer not to say
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Relationship Status</Label>
          <Select
            value={formData.relationship_status}
            onValueChange={(value: RelationshipStatusBiasOptions) =>
              setFormData((prev) => ({
                ...prev,
                relationship_status: value,
              }))
            }
          >
            <SelectTrigger className="border-2 border-indigo-200 focus:border-indigo-500 transition-all duration-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Single</SelectItem>
              <SelectItem value="in-relationship">In Relationship</SelectItem>
              <SelectItem value="married">Married</SelectItem>
              <SelectItem value="divorced">Divorced</SelectItem>
              <SelectItem value="widowed">Widowed</SelectItem>
              <SelectItem value="prefer-not-to-say">
                Prefer not to say
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
