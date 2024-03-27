import { SignIn } from "@clerk/nextjs";
import React, { type ReactElement } from "react";
import AuthLayout from "~/components/auth-layout";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-dark-1">
      <SignIn />
    </div>
  );
}
SignInPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}