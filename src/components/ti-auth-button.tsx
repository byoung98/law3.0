"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { signIn } from "next-auth/react";
import tiLogo from "@/app/icon.png";
import { Button } from "./ui/button";
import { Suspense } from "react";


function TISignInButtonContent() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  return (
    <>
      <Button
        variant="default"
        size={"lg"}
        //action: user will click button on login page "/law3"and redirects to SSO login page
        onClick={() => signIn("ti", { callbackUrl: callbackUrl ?? "/law3" })}
        className="p-6 mt-3"
      >
        {/* styles the button */}
        <Image src={tiLogo} alt="TI logo" className="h-5 w-5" />
        <span>TI Enterprise Sign In</span>
      </Button>
    </>
  );
}

export default function TISignInButton() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TISignInButtonContent />
    </Suspense>
  );
}