import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import TopBar from "~/components/topbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
      <main className={`font-sans ${inter.variable} flex justify-center h-screen`}>
        <div className="w-full h-full md:max-w-2xl border-x border-slate-400">
          <TopBar />
          <Component {...pageProps} />
        </div>
      </main>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
