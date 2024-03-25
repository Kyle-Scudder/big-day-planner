import { SignIn, SignOutButton, useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";

export default function Home() {
  const user = useUser()
  return (
    <div>
      Home
      <div>
        {!user.isSignedIn && <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />}
        {!!user.isSignedIn && <SignOutButton />}
      </div>
    </div>
  );
}
