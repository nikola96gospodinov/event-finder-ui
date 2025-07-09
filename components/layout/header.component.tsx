"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useFetchUser } from "@/services/auth/fetch-user";
import { Spinner } from "@/components/ui/spinner";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <div className="flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-purple-900">
                EventFinder
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <AuthActions />
          </div>
        </div>
      </div>
    </header>
  );
};

const AuthActions = () => {
  const { data: user, isLoading: isUserLoading } = useFetchUser();

  if (isUserLoading) {
    return <Spinner size={8} />;
  }

  if (!user) {
    return (
      <Link href="/auth">
        <Button
          variant="outline"
          className="border-purple-300 text-purple-600 hover:bg-purple-50"
        >
          Sign In
        </Button>
      </Link>
    );
  }

  const userInitial = user.email ? user.email.charAt(0).toUpperCase() : "U";

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-3">
        <div className="relative group">
          <Link href="/profile">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold text-lg cursor-pointer hover:shadow-lg transition-all duration-300">
              {userInitial}
            </div>
          </Link>
          <div className="absolute right-0 top-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
