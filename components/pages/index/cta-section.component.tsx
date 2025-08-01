"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useFetchUser } from "@/services/auth/fetch-user.service";
import { Section } from "@/components/layout/section";

export const CTASection = () => {
  const { data: user } = useFetchUser();

  return (
    <Section className="py-4 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="shadow-2xl border-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 md:p-6">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-4xl font-bold">
              Ready to Discover Amazing Events?
            </CardTitle>
            <CardDescription className="text-purple-50 text-lg md:text-xl">
              Join the pioneers of AI-powered event discovery
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center pb-8">
            <Link href={user ? "/run" : "/auth"}>
              <Button size="lg" variant="secondary">
                {user ? "Run the agent" : "Create your profile"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};
