"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { useFetchUser } from "@/services/auth/fetch-user";

export const HeroSection = () => {
  const { data: user } = useFetchUser();

  return (
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
          <Link href={user ? "/run" : "/auth"}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4"
            >
              {user ? "Run the agent" : "Create your profile"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
