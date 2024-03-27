import { type Guest } from "@prisma/client";
import LoadingSpinner from "~/components/loading-spinner";
import { api } from "~/utils/api";

export default function Admin() {
  const { data, isLoading } = api.guest.getAll.useQuery();

  if (!data) return <LoadingSpinner />;

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
