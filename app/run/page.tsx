"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Spinner } from "@/components/ui/spinner";
import { Badge } from "@/components/ui/badge";
import { useFetchUser } from "@/services/auth/fetch-user";
import { useFetchProfile } from "@/services/profile/fetch-profile.service";
import { useRunAgent } from "@/services/agent/run-agent.service";
import {
  MapPin,
  Clock,
  Heart,
  Target,
  Edit3,
  Play,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Cake,
  Wrench,
  Radius,
  Banknote,
  TreePalm,
  Clock3,
} from "lucide-react";
import { Database } from "@/types/database.types";

export default function RunPage() {
  const router = useRouter();
  const { data: user, isLoading: isUserLoading } = useFetchUser();
  const { data: profile, isLoading: isProfileLoading } = useFetchProfile();

  if (isUserLoading || isProfileLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (!user) {
    router.push("/auth");
    return null;
  }

  if (!profile) {
    router.push("/profile");
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto p-16">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <SummaryCard profile={profile} />
        <AgentControlCard />
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-2">
        <Sparkles className="h-8 w-8 text-purple-600" />
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Event Finder Agent
        </h1>
        <Sparkles className="h-8 w-8 text-purple-600" />
      </div>
      <p className="text-xl text-purple-800 max-w-2xl mx-auto">
        Ready to discover amazing events tailored just for you?
      </p>
    </div>
  );
};

const SummaryCard = ({
  profile,
}: {
  profile: Database["public"]["Tables"]["profiles"]["Row"];
}) => {
  const formatTime = (time: string | null) => {
    if (!time) return "All day";
    return new Date(`2000-01-01T${time}`).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatBudget = (budget: number) => {
    if (budget === 0) return "Free";
    return `£${budget}`;
  };

  return (
    <div className="lg:col-span-1">
      <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm h-fit">
        <CardHeader className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
          <CardTitle className="text-xl font-bold flex items-center justify-center gap-2">
            <Target className="h-6 w-6" />
            Your Profile
          </CardTitle>
          <CardDescription className="text-purple-50 text-base">
            Your preferences and details
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-sm text-purple-800">
              <Cake className="h-4 w-4 text-purple-600" />
              <span className="font-medium font-bold">
                {new Date().getFullYear() -
                  new Date(profile.birthday).getFullYear()}{" "}
                years old
              </span>
              <span></span>
            </div>
            <div className="flex items-center gap-3 text-sm text-purple-800">
              <Wrench className="h-4 w-4 text-purple-600" />
              <span>{profile.occupation}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-purple-800">
              <Heart className="h-4 w-4 text-purple-600" />
              <span className="capitalize">{profile.relationship_status}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-purple-800">
              <MapPin className="h-4 w-4 text-purple-600" />
              <span>{profile.postcode}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-purple-800">
              <Radius className="h-4 w-4 text-purple-600" />
              <span>
                {profile.distance_threshold_value}{" "}
                {profile.distance_threshold_unit}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-purple-800">
              <Banknote className="h-4 w-4 text-purple-600" />
              <span>{formatBudget(profile.budget)}</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm text-purple-800">
                <Clock className="h-4 w-4 text-purple-600" />
                <span className="font-medium">
                  Weekdays -{" "}
                  {profile.weekday_start_time && profile.weekday_end_time
                    ? `${formatTime(profile.weekday_start_time)} - ${formatTime(
                        profile.weekday_end_time
                      )}`
                    : "All day"}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-purple-800">
                <TreePalm className="h-4 w-4 text-purple-600" />
                <span className="font-medium">
                  Weekends -{" "}
                  {profile.weekend_start_time && profile.weekend_end_time
                    ? `${formatTime(profile.weekend_start_time)} - ${formatTime(
                        profile.weekend_end_time
                      )}`
                    : "All day"}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-medium text-purple-800">
              Interests:
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.interests?.slice(0, 3).map((interest, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs bg-purple-100 text-purple-800"
                >
                  {interest}
                </Badge>
              ))}
              {profile.interests && profile.interests.length > 3 && (
                <Badge
                  variant="secondary"
                  className="text-xs bg-purple-100 text-purple-800"
                >
                  +{profile.interests.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-medium text-purple-800">Goals:</div>
            <div className="flex flex-wrap gap-2">
              {profile.goals?.slice(0, 2).map((goal, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs border-purple-300 text-purple-700"
                >
                  {goal}
                </Badge>
              ))}
              {profile.goals && profile.goals.length > 2 && (
                <Badge
                  variant="outline"
                  className="text-xs border-purple-300 text-purple-700"
                >
                  +{profile.goals.length - 2} more
                </Badge>
              )}
            </div>
          </div>

          <Link
            href="/profile"
            className="w-full flex items-center justify-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300 border-2 border-purple-300 rounded-md p-2"
          >
            <Edit3 className="h-4 w-4" />
            Edit Profile
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

const AgentControlCard = () => {
  const [onlyHighlyRelevant, setOnlyHighlyRelevant] = useState(true);
  const { mutate: runAgent, isPending: isRunning, isSuccess } = useRunAgent();

  const handleRunAgent = () => {
    runAgent({ onlyHighlyRelevant });
  };

  return (
    <div className="lg:col-span-2">
      <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
          <CardTitle className="text-3xl font-bold flex items-center justify-center gap-3">
            <Play className="h-8 w-8" />
            Start Event Search
          </CardTitle>
          <CardDescription className="text-purple-50 text-lg font-semibold">
            Our AI agent will analyze your profile and find the best events for
            you. Results will be sent to your email.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 space-y-8">
          {isSuccess ? (
            <div className="text-center py-12">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                Agent Started Successfully!
              </h3>
              <p className="text-lg text-purple-800 mb-6">
                Your event search is now running. You&apos;ll receive the
                results via email.
              </p>
              <div className="flex items-center justify-center gap-3 text-sm text-purple-600 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <Clock3 className="h-5 w-5" />
                <span className="font-medium">
                  It might take up to a few hours for the results to be ready.
                </span>
              </div>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="highly-relevant"
                    checked={onlyHighlyRelevant}
                    onCheckedChange={(checked) =>
                      setOnlyHighlyRelevant(checked as boolean)
                    }
                    className="border-purple-300 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                  />
                  <label
                    htmlFor="highly-relevant"
                    className="text-base font-medium text-purple-900 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Only include highly relevant events
                  </label>
                </div>
                <p className="text-sm text-purple-700 pl-6">
                  When enabled, the agent will be more selective and only return
                  events that closely match your interests and preferences.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-purple-900 mb-3 text-lg">
                  What happens next?
                </h4>
                <ul className="text-sm text-purple-800 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    Our AI analyzes your profile and preferences
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    Searches for events in your area within your budget
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    Filters based on your availability and interests
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    Sends personalized recommendations to your email
                  </li>
                </ul>
              </div>

              <Button
                onClick={handleRunAgent}
                disabled={isRunning}
                className="w-full h-14 text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 hover:scale-105 shadow-lg"
                size="lg"
              >
                <Play className="mr-3 h-6 w-6" />
                Start Event Search
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
