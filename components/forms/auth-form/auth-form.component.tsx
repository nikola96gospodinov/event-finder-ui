"use client";

import React, { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Sparkles, Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { useRegister } from "@/services/auth/register.service";
import { useLogin } from "@/services/auth/sign-in.service";
import { FormError } from "../../error/form-error";
import { Toggler } from "./toggler.component";
import { OrSeparator } from "@/components/reusables/or-separator";

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
  const { replace, push } = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "login";

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    mutate: loginUser,
    isPending: isLoggingIn,
    error: loginError,
  } = useLogin();
  const {
    mutate: registerUser,
    isPending: isRegistering,
    error: registerError,
  } = useRegister();

  const onSubmit = async (data: AuthFormData) => {
    if (mode === "login") {
      loginUser(data, {
        onSuccess: () => {
          push("/profile");
        },
      });
    } else {
      registerUser(data, {
        onSuccess: () => {
          push("/profile");
        },
      });
    }
  };

  const toggleMode = () => {
    const params = new URLSearchParams(searchParams);
    params.set("mode", mode === "register" ? "login" : "register");
    replace(`${pathname}?${params.toString()}`);
    form.reset();
  };

  const isLoading = form.formState.isSubmitting || isLoggingIn || isRegistering;

  return (
    <>
      <CardHeader className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
        <Toggler mode={mode} toggleMode={toggleMode} />

        <CardTitle className="text-2xl font-bold flex items-center justify-center gap-3">
          <Sparkles className="h-6 w-6" />
          {mode === "login" ? "Welcome Back" : "Join Us"}
          <Sparkles className="h-6 w-6" />
        </CardTitle>
        <CardDescription className="text-purple-50 text-sm">
          {mode === "login"
            ? "Sign in to your account to continue"
            : "Create your account to get started"}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="relative flex flex-col gap-2">
                    <Mail className="absolute left-3 top-10.5 transform -translate-y-1/2 h-4 w-4 text-purple-400 z-10" />
                    <FormLabel className="text-purple-700 font-semibold">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 border-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="relative flex flex-col gap-2">
                    <Lock className="absolute left-3 top-10.5 transform -translate-y-1/2 h-4 w-4 text-purple-400 z-10" />
                    <FormLabel className="text-purple-700 font-semibold">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 border-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300"
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-10.5 transform -translate-y-1/2 text-purple-400 hover:text-purple-600 transition-colors z-10"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isLoading} size="full">
              {isLoading ? (
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
        </Form>

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

        {(loginError || registerError) && (
          <div className="mt-4">
            {loginError && mode === "login" && (
              <FormError
                errorMessage={
                  loginError.message === "Invalid login credentials"
                    ? "Invalid email or password"
                    : "Something went wrong with your login. Please try again."
                }
              />
            )}
            {registerError && mode === "register" && (
              <FormError
                errorMessage={
                  registerError.message === "User already registered"
                    ? "User already exists"
                    : "Something went wrong with your registration. Please try again."
                }
              />
            )}
          </div>
        )}

        <OrSeparator />

        <Button variant="outline" size="full" onClick={() => replace(pathname)}>
          Back to social login
        </Button>
      </CardContent>
    </>
  );
};
