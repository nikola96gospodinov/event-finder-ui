"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

export const AuthForm = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "login";

  useEffect(() => {
    if (!searchParams.get("mode")) {
      const params = new URLSearchParams(searchParams);
      params.set("mode", "login");
      replace(`${pathname}?${params.toString()}`);
    }
  }, [pathname, replace, searchParams]);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(`${mode} attempt:`, formData);
    alert(
      `${mode ? "Login" : "Register"} functionality would be implemented here!`
    );
  };

  const toggleMode = () => {
    const params = new URLSearchParams(searchParams);
    params.set("mode", mode === "register" ? "login" : "register");
    replace(`${pathname}?${params.toString()}`);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto">
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
            <CardTitle className="text-3xl font-bold flex items-center justify-center gap-3">
              <Sparkles className="h-6 w-6" />
              {mode === "login" ? "Welcome Back" : "Join Us"}
              <Sparkles className="h-6 w-6" />
            </CardTitle>
            <CardDescription className="text-purple-100 text-base">
              {mode === "login"
                ? "Sign in to your account to continue"
                : "Create your account to get started"}
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-purple-700 font-semibold"
                >
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-purple-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10 border-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-purple-700 font-semibold"
                >
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-purple-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    className="pl-10 pr-10 border-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {mode === "login" ? "Sign In" : "Create Account"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-purple-200">
              <p className="text-center text-purple-600">
                {mode === "login"
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <button
                  onClick={toggleMode}
                  className="ml-2 text-purple-800 font-semibold hover:text-purple-600 underline transition-colors"
                >
                  {mode === "login" ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
