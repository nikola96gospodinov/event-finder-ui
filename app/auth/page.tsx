"use client";

import { AuthForm } from "@/components/forms/auth-form.component";
import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useFetchUser } from "@/services/auth/fetch-user.service";
import { Spinner } from "@/components/ui/spinner";

function AuthPageContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const { data: user, isLoading: isFetchingUser } = useFetchUser();

  useEffect(() => {
    if (user && !isFetchingUser) {
      replace("/run");
    }
  }, [user, isFetchingUser, replace]);

  useEffect(() => {
    if (!searchParams.get("mode")) {
      const params = new URLSearchParams(searchParams);
      params.set("mode", "login");
      replace(`${pathname}?${params.toString()}`);
    }
  }, [pathname, replace, searchParams]);

  if (isFetchingUser) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return <AuthForm />;
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
