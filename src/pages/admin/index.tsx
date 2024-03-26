import { type Guest } from "@prisma/client";
import { api } from "~/utils/api";

export default function Admin() {
  const data = api.guest.getAll.useQuery();
  const guests: Guest[] = data.data ?? [];

  return (
    <div>
      <div>Admin</div>
      <div>
        {guests.map((guest: Guest) => (
          <div key={guest.id}>{guest.name}</div>
          ))}
      </div>
    </div>
  );
}
