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
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDownIcon, User } from "lucide-react";
import { UserProfile } from "@/types/user-profile";

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
  { value: "in a relationship", label: "In Relationship" },
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
  const [currentMonth, setCurrentMonth] = React.useState<Date | undefined>(
    form.getValues("birthday")
      ? new Date(form.getValues("birthday") + "T00:00:00")
      : new Date()
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8 relative">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-3 md:p-4 rounded-full">
            <User className="h-8 w-8 md:h-12 md:w-12 text-white" />
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mt-2 md:mt-4 mb-1 md:mb-2">
          Personal Information
        </h2>
        <p className="text-muted-foreground">
          Let&apos;s get to know you better ✨
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="birthday"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium flex items-center gap-2">
                Birthday
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className="w-full justify-between font-normal border-2 border-pink-200 focus:border-pink-500 transition-all duration-300 hover:border-pink-300 text-foreground"
                    >
                      {field.value
                        ? (() => {
                            const date = new Date(field.value + "T00:00:00");
                            return date.toLocaleDateString();
                          })()
                        : "Select date"}
                      <ChevronDownIcon className="h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={
                      field.value
                        ? new Date(field.value + "T00:00:00")
                        : undefined
                    }
                    captionLayout="dropdown"
                    month={currentMonth}
                    onSelect={(date) => {
                      if (date) {
                        // Format date as YYYY-MM-DD to preserve the local date without timezone issues
                        const year = date.getFullYear();
                        const month = String(date.getMonth() + 1).padStart(
                          2,
                          "0"
                        );
                        const day = String(date.getDate()).padStart(2, "0");
                        const dateString = `${year}-${month}-${day}`;
                        field.onChange(dateString);
                        setCurrentMonth(date);
                      } else {
                        field.onChange("");
                      }
                    }}
                    onMonthChange={setCurrentMonth}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="occupation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium flex items-center gap-2">
                Occupation
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Software Engineer"
                  className="border-2 border-indigo-200 focus:border-indigo-500 transition-all duration-300 hover:border-indigo-300"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium flex items-center gap-2">
                Gender
              </FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="border-2 border-purple-200 focus:border-purple-500 transition-all duration-300">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {genderOptions.map((option) => (
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

        <FormField
          control={form.control}
          name="sexual_orientation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium flex items-center gap-2">
                Sexual Orientation
              </FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="border-2 border-pink-200 focus:border-pink-500 transition-all duration-300">
                    <SelectValue placeholder="Select orientation" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {sexualOrientationOptions.map((option) => (
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

        <FormField
          control={form.control}
          name="relationship_status"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium flex items-center gap-2">
                Relationship Status
              </FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="border-2 border-indigo-200 focus:border-indigo-500 transition-all duration-300">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {relationshipStatusOptions.map((option) => (
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
  );
};
