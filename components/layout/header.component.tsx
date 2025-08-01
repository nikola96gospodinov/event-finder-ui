"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, LogOut, Bot } from "lucide-react";
import { useFetchUser } from "@/services/auth/fetch-user.service";
import { useSignOut } from "@/services/auth/sign-out.service";
import { Spinner } from "@/components/ui/spinner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/branding/logo";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <Logo />
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
  const { mutate: signOut, isPending: isSigningOut } = useSignOut();
  const router = useRouter();

  if (isUserLoading) {
    return <Spinner size={8} />;
  }

  if (!user) {
    return (
      <Link href="/auth">
        <Button variant="outline">Sign In</Button>
      </Link>
    );
  }

  const userInitial = user.email ? user.email.charAt(0).toUpperCase() : "U";

  const handleSignOut = () => {
    signOut(undefined, {
      onSuccess: () => {
        router.push("/");
      },
    });
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-3">
        <div className="relative group">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold text-lg cursor-pointer hover:shadow-lg transition-all duration-300">
                {userInitial}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36" align="center">
              <DropdownMenuItem>
                <Link
                  href="/run"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-md"
                >
                  <Bot className="h-4 w-4 text-white" />
                  Run Agent
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/profile"
                  className="flex items-center gap-2 text-purple-600 hover:bg-purple-50"
                >
                  <User className="h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-2 text-red-600 hover:bg-red-50"
                onClick={handleSignOut}
                disabled={isSigningOut}
              >
                <LogOut className="h-4 w-4" />
                {isSigningOut ? "Signing out..." : "Sign out"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="absolute right-0 top-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
