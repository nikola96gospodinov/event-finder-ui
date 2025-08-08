"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useFetchUser } from "@/services/auth/fetch-user.service";
import { Spinner } from "@/components/ui/spinner";
import { AuthChoice } from "@/components/forms/auth-form/auth-choice.component";
import { Card } from "@/components/ui/card";
import { AuthForm } from "@/components/forms/auth-form/auth-form.component";

function AuthPageContent() {
  const searchParams = useSearchParams();
  const isMode = Boolean(searchParams.get("mode"));
  const { replace } = useRouter();

  const { data: user, isLoading: isFetchingUser } = useFetchUser();

  useEffect(() => {
    if (user && !isFetchingUser) {
      replace("/run");
    }
  }, [user, isFetchingUser, replace]);

  if (isFetchingUser) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-2 md:p-16">
      <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        {isMode ? <AuthForm /> : <AuthChoice />}
      </Card>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      }
    >
      <AuthPageContent />
    </Suspense>
  );
}
