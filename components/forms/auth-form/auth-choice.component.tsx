"use client";
import { FormError } from "@/components/error/form-error";
import { OrSeparator } from "@/components/reusables/or-separator";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGoogleSignIn } from "@/services/auth/google-sign-in.service";
import { Sparkles, Mail } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const AuthChoice = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const {
    mutate: signInWithGoogle,
    isPending: isSigningInWithGoogle,
    isError: isErrorSigningInWithGoogle,
  } = useGoogleSignIn();

  return (
    <>
      <CardHeader className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold flex items-center justify-center gap-3">
          <Sparkles className="h-6 w-6" />
          Let&apos;s get you started
          <Sparkles className="h-6 w-6" />
        </CardTitle>
        <CardDescription className="text-purple-50 text-sm">
          Choose how you want to sign in or register
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <Button
          variant="outline"
          size="full"
          className="flex items-center gap-2"
          onClick={() => signInWithGoogle()}
          disabled={isSigningInWithGoogle}
        >
          <Image src="/google.svg" alt="Google logo" width={16} height={16} />
          Continue with Google
        </Button>

        {isErrorSigningInWithGoogle && (
          <FormError errorMessage="Something went wrong with your login. Please try again." />
        )}

        <OrSeparator />

        <Button
          variant="outline"
          className="flex items-center gap-2"
          size="full"
          onClick={() => {
            const params = new URLSearchParams(searchParams);
            params.set("mode", "login");
            replace(`${pathname}?${params.toString()}`);
          }}
        >
          <Mail className="h-4 w-4" />
          Continue with Email
        </Button>
      </CardContent>
    </>
  );
};
