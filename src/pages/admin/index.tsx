import React, { type ReactElement } from "react";
import { type Guest } from "@prisma/client";
import LoadingPage from "~/components/loading-page";
import NoData from "~/components/no-data";
import { api } from "~/utils/api";
import Layout from "~/components/layout";

export default function Admin() {
  const { data, isLoading: guestsLoading } = api.guest.getAll.useQuery();

  if (guestsLoading) return <LoadingPage />;
  
  if (!data) return <NoData />;

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
Admin.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}