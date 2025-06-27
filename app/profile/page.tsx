import { UserProfileForm } from "@/components/forms/user-profile-form/user-profile-form.component";
import { Spinner } from "@/components/ui/spinner";
import { useFetchUser } from "@/services/auth/fetch-user";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { replace } = useRouter();
  const { data: user, isLoading: isUserLoading } = useFetchUser();

  useEffect(() => {
    if (!user && !isUserLoading) {
      replace("/auth");
    }
  }, [user, isUserLoading, replace]);

  if (isUserLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return <UserProfileForm />;
}
