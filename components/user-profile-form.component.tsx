"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  User,
  Target,
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import {
  UserProfile,
  AcceptableTimes,
  SexualOrientationBiasOptions,
  RelationshipStatusBiasOptions,
  GenderBiasOptions,
  DistanceThreshold,
  Budget,
} from "@/types/user-profile";

const timeSlots = [
  "6:00-8:00",
  "8:00-10:00",
  "10:00-12:00",
  "12:00-14:00",
  "14:00-16:00",
  "16:00-18:00",
  "18:00-20:00",
  "20:00-22:00",
];

const dayLabels = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export const UserProfileForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<UserProfile>({
    interests: [],
    goals: [],
    occupation: "",
    email: "",
    age: 0,
    gender: "prefer-not-to-say",
    sexual_orientation: "prefer-not-to-say",
    relationship_status: "prefer-not-to-say",
    willingness_to_pay: false,
    budget: 0,
    willingness_for_online: false,
    acceptable_times: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
    },
    location: {
      city: "",
      state: "",
      country: "",
      zipcode: "",
    },
    distance_threshold: 10,
    time_commitment_in_minutes: 60,
    timeframe: "flexible",
  });

  const [tempInputs, setTempInputs] = useState({
    interest: "",
    goal: "",
  });

  const totalSteps = 6;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const addInterest = () => {
    if (tempInputs.interest.trim()) {
      setFormData((prev) => ({
        ...prev,
        interests: [...prev.interests, tempInputs.interest.trim()],
      }));
      setTempInputs((prev) => ({ ...prev, interest: "" }));
    }
  };

  const addGoal = () => {
    if (tempInputs.goal.trim()) {
      setFormData((prev) => ({
        ...prev,
        goals: [...prev.goals, tempInputs.goal.trim()],
      }));
      setTempInputs((prev) => ({ ...prev, goal: "" }));
    }
  };

  const removeInterest = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.filter((_, i) => i !== index),
    }));
  };

  const removeGoal = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.filter((_, i) => i !== index),
    }));
  };

  const toggleTimeSlot = (day: keyof AcceptableTimes, timeSlot: string) => {
    setFormData((prev) => ({
      ...prev,
      acceptable_times: {
        ...prev.acceptable_times,
        [day]: prev.acceptable_times[day].includes(timeSlot)
          ? prev.acceptable_times[day].filter((slot) => slot !== timeSlot)
          : [...prev.acceptable_times[day], timeSlot],
      },
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("User Profile Data (Python Dict Format):");
    console.log(JSON.stringify(formData, null, 2));
    alert("Profile submitted! Check the console for the Python dict format.");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
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
                  htmlFor="email"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4 text-purple-500" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="your@email.com"
                  className="border-2 border-purple-200 focus:border-purple-500 transition-all duration-300 hover:border-purple-300"
                />
              </div>

              <div className="space-y-2 group">
                <Label
                  htmlFor="age"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <Star className="h-4 w-4 text-pink-500" />
                  Age
                </Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      age: parseInt(e.target.value) || 0,
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
                  placeholder="Software Developer"
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
                <Label className="text-sm font-medium">
                  Sexual Orientation
                </Label>
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
                <Label className="text-sm font-medium">
                  Relationship Status
                </Label>
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
                    <SelectItem value="in-relationship">
                      In Relationship
                    </SelectItem>
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

      case 1:
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-8 relative">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full">
                  <Target className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mt-4">
                Interests & Goals
              </h2>
              <p className="text-muted-foreground">What drives you? 🎯</p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
                <Label className="text-lg font-semibold text-green-700 mb-4 block">
                  ✨ Interests
                </Label>
                <div className="flex gap-2 mb-4">
                  <Input
                    value={tempInputs.interest}
                    onChange={(e) =>
                      setTempInputs((prev) => ({
                        ...prev,
                        interest: e.target.value,
                      }))
                    }
                    placeholder="Enter an interest (e.g., Photography, Hiking)"
                    onKeyPress={(e) => e.key === "Enter" && addInterest()}
                    className="border-2 border-green-200 focus:border-green-500"
                  />
                  <Button
                    onClick={addInterest}
                    variant="outline"
                    className="border-green-300 text-green-700 hover:bg-green-100"
                  >
                    Add ✨
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.interests.map((interest, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer bg-green-100 text-green-700 hover:bg-green-200 transition-all duration-200 hover:scale-105"
                      onClick={() => removeInterest(index)}
                    >
                      {interest} ×
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
                <Label className="text-lg font-semibold text-blue-700 mb-4 block">
                  🎯 Goals
                </Label>
                <div className="flex gap-2 mb-4">
                  <Input
                    value={tempInputs.goal}
                    onChange={(e) =>
                      setTempInputs((prev) => ({
                        ...prev,
                        goal: e.target.value,
                      }))
                    }
                    placeholder="Enter a goal (e.g., Learn Spanish, Get fit)"
                    onKeyPress={(e) => e.key === "Enter" && addGoal()}
                    className="border-2 border-blue-200 focus:border-blue-500"
                  />
                  <Button
                    onClick={addGoal}
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100"
                  >
                    Add 🎯
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.goals.map((goal, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all duration-200 hover:scale-105"
                      onClick={() => removeGoal(index)}
                    >
                      {goal} ×
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
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
              <p className="text-muted-foreground">
                Where in the world are you? 🌍
              </p>
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

      case 3:
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-8 relative">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-full">
                  <DollarSign className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mt-4">
                Event Budget & Format
              </h2>
              <p className="text-muted-foreground">
                What&apos;s your budget for events? 🎟️
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
                <Label className="text-lg font-semibold text-emerald-700 mb-4 block">
                  💰 Do you have a budget in mind for events?
                </Label>
                <Select
                  value={formData.budget.toString()}
                  onValueChange={(value) => {
                    const budgetValue = parseInt(value);
                    setFormData((prev) => ({
                      ...prev,
                      budget: budgetValue as Budget,
                      willingness_to_pay: budgetValue > 0,
                    }));
                  }}
                >
                  <SelectTrigger className="border-2 border-emerald-200 focus:border-emerald-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Free events only ($0) 🆓</SelectItem>
                    <SelectItem value="10">Up to $10 per event 💵</SelectItem>
                    <SelectItem value="20">Up to $20 per event 🌱</SelectItem>
                    <SelectItem value="50">Up to $50 per event ⭐</SelectItem>
                    <SelectItem value="100">Up to $100 per event 💎</SelectItem>
                    <SelectItem value="200">Up to $200 per event 🏆</SelectItem>
                    <SelectItem value="500">Up to $500 per event 👑</SelectItem>
                    <SelectItem value="1000">
                      Premium events ($1000+) 🌟
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="willingness_for_online"
                    checked={formData.willingness_for_online}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        willingness_for_online: !!checked,
                      }))
                    }
                    className="border-2 border-teal-300"
                  />
                  <Label
                    htmlFor="willingness_for_online"
                    className="text-lg font-medium text-teal-700"
                  >
                    💻 I&apos;m open to attending virtual/online events
                  </Label>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
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
              <p className="text-muted-foreground">When can we connect? ⏰</p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-xl border border-violet-200">
                <div className="space-y-2">
                  <Label className="text-lg font-semibold text-violet-700 flex items-center gap-2">
                    ⏱️ How much time can you commit per event? (minutes)
                  </Label>
                  <Input
                    type="number"
                    value={formData.time_commitment_in_minutes}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        time_commitment_in_minutes:
                          parseInt(e.target.value) || 60,
                      }))
                    }
                    placeholder="60"
                    className="border-2 border-violet-200 focus:border-violet-500 text-lg"
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-violet-200">
                <Label className="text-xl font-bold text-violet-700 mb-6 block">
                  🗓️ When are you typically available?
                </Label>
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
                        {timeSlots.map((slot) => (
                          <div
                            key={slot}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`${day}-${slot}`}
                              checked={formData.acceptable_times[day].includes(
                                slot
                              )}
                              onCheckedChange={() => toggleTimeSlot(day, slot)}
                              className="border-2 border-violet-300"
                            />
                            <Label
                              htmlFor={`${day}-${slot}`}
                              className="text-sm font-medium text-violet-600 cursor-pointer"
                            >
                              {slot}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-8 relative">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-rose-500 to-pink-500 p-4 rounded-full">
                  <Calendar className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mt-4">
                Review & Submit
              </h2>
              <p className="text-muted-foreground">
                Almost there! Let&apos;s review your profile ✨
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-xl border-2 border-rose-200">
              <h3 className="text-2xl font-bold text-rose-700 mb-6 flex items-center gap-2">
                <Star className="h-6 w-6" />
                Profile Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-rose-600">
                      📧 Email:
                    </span>
                    <span className="text-gray-700">{formData.email}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-rose-600">🎂 Age:</span>
                    <span className="text-gray-700">{formData.age}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-rose-600">
                      💼 Occupation:
                    </span>
                    <span className="text-gray-700">{formData.occupation}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-rose-600">
                      📍 Location:
                    </span>
                    <span className="text-gray-700">
                      {formData.location.city}, {formData.location.state},{" "}
                      {formData.location.country}
                    </span>
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-pink-600">
                      💰 Budget:
                    </span>
                    <span className="text-gray-700">
                      {formData.willingness_to_pay
                        ? `$${formData.budget}`
                        : "Free"}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-pink-600">
                      💻 Online:
                    </span>
                    <span className="text-gray-700">
                      {formData.willingness_for_online ? "Yes" : "No"}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-pink-600">
                      ⏰ Time:
                    </span>
                    <span className="text-gray-700">
                      {formData.time_commitment_in_minutes} minutes
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="font-semibold text-rose-600 mb-2">
                    ✨ Interests:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {formData.interests.map((interest, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-rose-100 text-rose-700"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-pink-600 mb-2">🎯 Goals:</p>
                  <div className="flex flex-wrap gap-2">
                    {formData.goals.map((goal, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-pink-100 text-pink-700"
                      >
                        {goal}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-green-400 p-6 rounded-xl font-mono text-sm overflow-auto border-2 border-gray-700">
              <div className="mb-2 text-green-300">💻 JSON Output Preview:</div>
              <pre className="whitespace-pre-wrap">
                {JSON.stringify(formData, null, 2)}
              </pre>
            </div>

            <Button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🚀 Submit My Awesome Profile
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 p-4">
      <div className="max-w-5xl mx-auto">
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
            <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
              <Sparkles className="h-8 w-8" />
              Profile Builder
              <Sparkles className="h-8 w-8" />
            </CardTitle>
            <CardDescription className="text-purple-100 text-lg">
              Create your personalized profile in just a few steps
            </CardDescription>
            <div className="mt-6">
              <Progress value={progress} className="w-full h-3 bg-white/20" />
              <p className="text-sm text-purple-100 mt-3 font-semibold">
                Step {currentStep + 1} of {totalSteps} • {Math.round(progress)}%
                Complete
              </p>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            {renderStep()}

            <div className="flex justify-between pt-8 border-t border-purple-200 mt-8">
              <Button
                onClick={prevStep}
                disabled={currentStep === 0}
                variant="outline"
                className="flex items-center gap-2 border-2 border-purple-300 text-purple-600 hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
                Previous
              </Button>

              {currentStep < totalSteps - 1 ? (
                <Button
                  onClick={nextStep}
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Next
                  <ChevronRight className="h-5 w-5" />
                </Button>
              ) : null}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
