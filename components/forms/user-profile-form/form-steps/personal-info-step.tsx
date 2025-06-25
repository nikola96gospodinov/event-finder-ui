"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { InputField, SelectField } from "@/components/ui/form-inputs";
import { User } from "lucide-react";
import {
  UserProfile,
  GenderBiasOptions,
  SexualOrientationBiasOptions,
  RelationshipStatusBiasOptions,
} from "@/types/user-profile";

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "non-binary", label: "Non-binary" },
  { value: "other", label: "Other" },
];

const sexualOrientationOptions = [
  { value: "straight", label: "Straight" },
  { value: "lesbian", label: "Lesbian" },
  { value: "gay", label: "Gay" },
  { value: "bisexual", label: "Bisexual" },
  { value: "pansexual", label: "Pansexual" },
  { value: "other", label: "Other" },
];

const relationshipStatusOptions = [
  { value: "single", label: "Single" },
  { value: "in-relationship", label: "In Relationship" },
  { value: "married", label: "Married" },
  { value: "divorced", label: "Divorced" },
  { value: "widowed", label: "Widowed" },
  { value: "polyamorous", label: "Polyamorous" },
  { value: "other", label: "Other" },
];

type PersonalInfoStepProps = {
  form: UseFormReturn<UserProfile>;
};

export const PersonalInfoStep = ({ form }: PersonalInfoStepProps) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = form;
  const formData = watch();

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
        <InputField
          label="Birthday"
          type="date"
          {...register("birthday")}
          className="border-2 border-pink-200 focus:border-pink-500 transition-all duration-300 hover:border-pink-300"
          labelClassName="text-sm font-medium flex items-center gap-2"
          error={errors.birthday?.message}
        />

        <InputField
          label="Occupation"
          {...register("occupation")}
          placeholder="Software Engineer"
          className="border-2 border-indigo-200 focus:border-indigo-500 transition-all duration-300 hover:border-indigo-300"
          labelClassName="text-sm font-medium flex items-center gap-2"
          error={errors.occupation?.message}
        />

        <SelectField
          label="Gender"
          options={genderOptions}
          value={formData.gender}
          onValueChange={(value) => {
            setValue("gender", value as GenderBiasOptions);
            form.trigger("gender");
          }}
          triggerClassName="border-2 border-purple-200 focus:border-purple-500 transition-all duration-300"
          error={errors.gender?.message}
        />

        <SelectField
          label="Sexual Orientation"
          options={sexualOrientationOptions}
          value={formData.sexual_orientation}
          onValueChange={(value) => {
            setValue(
              "sexual_orientation",
              value as SexualOrientationBiasOptions
            );
            form.trigger("sexual_orientation");
          }}
          triggerClassName="border-2 border-pink-200 focus:border-pink-500 transition-all duration-300"
          error={errors.sexual_orientation?.message}
        />

        <SelectField
          label="Relationship Status"
          options={relationshipStatusOptions}
          value={formData.relationship_status}
          onValueChange={(value) => {
            setValue(
              "relationship_status",
              value as RelationshipStatusBiasOptions
            );
            form.trigger("relationship_status");
          }}
          triggerClassName="border-2 border-indigo-200 focus:border-indigo-500 transition-all duration-300"
          error={errors.relationship_status?.message}
        />
      </div>
    </div>
  );
};
