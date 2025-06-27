"use client";

import { AuthForm } from "@/components/forms/auth-form.component";
import { useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useFetchUser } from "@/services/auth/fetch-user";
import { Spinner } from "@/components/ui/spinner";

export default function AuthPage() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const { data: user, isLoading: isFetchingUser } = useFetchUser();

  useEffect(() => {
    if (user && !isFetchingUser) {
      replace("/profile");
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
