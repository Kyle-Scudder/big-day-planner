import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const user = useUser();

  return (
    <div>
      Home
      <div>
        {!user.isSignedIn && <SignInButton />}
        {!!user.isSignedIn && <SignOutButton />}
      </div>
    </div>
  );
}