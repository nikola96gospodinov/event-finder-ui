import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User, Search, Mail } from "lucide-react";

export const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 bg-white/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-purple-800 max-w-2xl mx-auto">
            Three simple steps to get personalized event recommendations
            delivered to your inbox
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-purple-900">
                1. Tell Us About You
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-purple-800 text-lg">
                Share your interests, goals, location, budget, and availability.
                The more we know, the better your matches will be.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-purple-900">
                2. AI Finds Your Events
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-purple-800 text-lg">
                Our AI agent searches through hundreds of events to find the
                perfect matches based on your unique profile and preferences.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-purple-900">
                3. Get Personalized Emails
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-purple-800 text-lg">
                Receive curated event recommendations directly in your inbox,
                perfectly tailored to your interests and goals.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
