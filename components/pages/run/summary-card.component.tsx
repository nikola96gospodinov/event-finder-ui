import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  Heart,
  Target,
  Edit3,
  Cake,
  Wrench,
  Radius,
  Banknote,
  TreePalm,
} from "lucide-react";
import { Database } from "@/types/database.types";

interface SummaryCardProps {
  profile: Database["public"]["Tables"]["profiles"]["Row"];
}

export const SummaryCard = ({ profile }: SummaryCardProps) => {
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
                <Badge key={index}>{interest}</Badge>
              ))}
              {profile.interests && profile.interests.length > 3 && (
                <Badge>+{profile.interests.length - 3} more</Badge>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-medium text-purple-800">Goals:</div>
            <div className="flex flex-wrap gap-2">
              {profile.goals?.slice(0, 2).map((goal, index) => (
                <Badge key={index} variant="secondary">
                  {goal}
                </Badge>
              ))}
              {profile.goals && profile.goals.length > 2 && (
                <Badge variant="secondary">
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
