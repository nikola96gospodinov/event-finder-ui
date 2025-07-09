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
import { useFetchUser } from "@/services/auth/fetch-user";

export const CTASection = () => {
  const { data: user } = useFetchUser();

  return (
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
            <Link href="/profile">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-4 font-semibold"
              >
                {user ? "View My Profile" : "Start Your Profile"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
