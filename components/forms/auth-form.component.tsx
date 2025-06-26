"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputField } from "@/components/ui/form-inputs";
import { Sparkles, Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { Background } from "../containers/background.component";
import { useLogin } from "@/services/auth/login.service";
import { useRegister } from "@/services/auth/register.service";

const authSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

type AuthFormData = z.infer<typeof authSchema>;

export const AuthForm = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "login";

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: loginUser, isPending: isLoginPending } = useLogin();
  const { mutate: registerUser, isPending: isRegisterPending } = useRegister();

  useEffect(() => {
    if (!searchParams.get("mode")) {
      const params = new URLSearchParams(searchParams);
      params.set("mode", "login");
      replace(`${pathname}?${params.toString()}`);
    }
  }, [pathname, replace, searchParams]);

  const onSubmit = async (data: AuthFormData) => {
    if (mode === "login") {
      loginUser(data);
    } else {
      registerUser(data);
    }
  };

  const toggleMode = () => {
    const params = new URLSearchParams(searchParams);
    params.set("mode", mode === "register" ? "login" : "register");
    replace(`${pathname}?${params.toString()}`);
    reset();
  };

  return (
    <Background>
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-11 transform -translate-y-1/2 h-4 w-4 text-purple-400 z-10" />
                <InputField
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  error={errors.email?.message}
                  {...register("email")}
                  className="pl-10 border-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300"
                  labelClassName="text-purple-700 font-semibold"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-11 transform -translate-y-1/2 h-4 w-4 text-purple-400 z-10" />
                <InputField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  error={errors.password?.message}
                  {...register("password")}
                  className="pl-10 pr-10 border-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300"
                  labelClassName="text-purple-700 font-semibold"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-11 transform -translate-y-1/2 text-purple-400 hover:text-purple-600 transition-colors z-10"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isLoginPending || isRegisterPending}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting || isLoginPending || isRegisterPending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    {mode === "login" ? "Signing In..." : "Creating Account..."}
                  </>
                ) : (
                  <>
                    {mode === "login" ? "Sign In" : "Create Account"}
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
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
    </Background>
  );
};
