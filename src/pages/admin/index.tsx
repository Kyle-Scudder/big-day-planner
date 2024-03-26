import { type Guest } from "@prisma/client";
import { api } from "~/utils/api";

export default function Admin() {
  const data = api.guest.getAll.useQuery();
  const guests: Guest[] = data.data ?? [];

  return (
    <main className="flex justify-center h-screen">
      <div className="w-full h-full md:max-w-2xl border-x border-slate-400">
        <div>Admin</div>
        <div>
          {guests.map((guest: Guest) => (
            <div key={guest.id}>{guest.name}</div>
            ))}
        </div>
      </div>
    </main>
  );
}
