"use client";

import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";
import { useFetchUser } from "@/services/auth/fetch-user";
import { useFetchProfile } from "@/services/profile/fetch-profile.service";
import { Header, SummaryCard, AgentControlCard } from "@/components/pages/run";

export default function RunPage() {
  const router = useRouter();
  const { data: user, isLoading: isUserLoading } = useFetchUser();
  const { data: profile, isLoading: isProfileLoading } = useFetchProfile();

  if (isUserLoading || isProfileLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (!user) {
    router.push("/auth");
    return null;
  }

  if (!profile) {
    router.push("/profile");
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto p-16">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <SummaryCard profile={profile} />
        <AgentControlCard />
      </div>
    </div>
  );
}
