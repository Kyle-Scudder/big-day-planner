import { type Guest } from "@prisma/client";
import LoadingSpinner from "~/components/loading-spinner";
import NoData from "~/components/no-data";
import { api } from "~/utils/api";

export default function Admin() {
  const { data, isLoading } = api.guest.getAll.useQuery();

  if (isLoading) return <NoData />;

  if (!data) return <LoadingSpinner />;

  return (
    <div>
      <div>Admin</div>
      <div className="flex flex-col">
        {[...data, ...data].map((guest: Guest) => (
          <div key={guest.id} className="border-b border-slate-400 p-8">
            {guest.name}
          </div>
          ))}
      </div>
    </div>
  );
}
