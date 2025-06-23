import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sparkles,
  User,
  Search,
  Mail,
  Calendar,
  MapPin,
  Heart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-purple-900">
                EventFinder
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/auth">
                <Button
                  variant="outline"
                  className="border-purple-300 text-purple-600 hover:bg-purple-50"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-8 w-8 text-purple-600" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Discover Events Made for You
            </h1>
            <Sparkles className="h-8 w-8 text-purple-600" />
          </div>
          <p className="text-xl text-purple-800 mb-8 max-w-2xl mx-auto">
            Let AI find the perfect events that match your interests, goals,
            location, and schedule. No more endless scrolling through irrelevant
            listings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth?mode=register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4"
              >
                Start Your Profile
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
                  Share your interests, goals, location, budget, and
                  availability. The more we know, the better your matches will
                  be.
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

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">
              Why Choose EventFinder?
            </h2>
            <p className="text-xl text-purple-800 max-w-2xl mx-auto">
              Stop wasting time on generic event listings. Get events that
              actually matter to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Personalized
              </h3>
              <p className="text-purple-800">
                Curated based on your interests and goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Quality Assured
              </h3>
              <p className="text-purple-800">
                Handpicked events by an AI agent trained on your profile
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Smart Scheduling
              </h3>
              <p className="text-purple-800">
                Events that fit your availability and time preferences
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Location Based
              </h3>
              <p className="text-purple-800">
                Events within your preferred distance and area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 pt-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="shadow-2xl border-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold">
                Ready to Discover Amazing Events?
              </CardTitle>
              <CardDescription className="text-purple-100 text-xl">
                Join the pioneers of AI-powered event discovery
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-8">
              <Link href="/auth?mode=register">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-4 font-semibold"
                >
                  Create Your Profile Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-purple-900 to-indigo-950 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Sparkles className="h-6 w-6 text-purple-300" />
            <span className="text-xl font-bold">EventFinder</span>
            <Sparkles className="h-6 w-6 text-purple-300" />
          </div>
          <p className="text-purple-200">
            Making event discovery personal, intelligent, and effortless.
          </p>
        </div>
      </footer>
    </div>
  );
}
