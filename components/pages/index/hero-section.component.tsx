"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, PlayIcon } from "lucide-react";
import { useFetchUser } from "@/services/auth/fetch-user.service";
import { Section } from "@/components/layout/section";

export const HeroSection = () => {
  const { data: user } = useFetchUser();

  return (
    <Section>
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4 md:mb-6 md:gap-3">
          <Sparkles className="h-8 w-8 text-purple-600" />
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Discover Events Made for You
          </h1>
          <Sparkles className="h-8 w-8 text-purple-600" />
        </div>
        <p className="text-lg md:text-xl text-purple-800 mb-8 max-w-2xl mx-auto">
          Let AI find the perfect events that match your interests, goals,
          location, and schedule. No more endless scrolling through irrelevant
          listings.
        </p>
        <Link href={user ? "/run" : "/auth"}>
          <Button size="lg">
            <PlayIcon className="ml-2 h-5 w-5" />
            {user ? "Run the agent" : "Create your profile"}
          </Button>
        </Link>
      </div>
    </Section>
  );
};
