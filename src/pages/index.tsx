import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import type Guest from "~/models/guest";
import { api } from "~/utils/api";

export default function Home() {
  const user = useUser();
  const data = api.guest.getAll.useQuery();
  const guests: Guest[] = data.data ?? [];

  return (
    <div>
      Home
      <div>
        {!user.isSignedIn && <SignInButton />}
        {!!user.isSignedIn && <SignOutButton />}
      </div>
      <div>
        {guests.map((guest: Guest) => (
          <div key={guest.id}>{guest.name}</div>
        ))}
      </div>
    </div>
  );
}