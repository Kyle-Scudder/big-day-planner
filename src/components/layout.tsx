import React, { type ReactElement } from 'react'
import TopBar from './top-bar'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const Layout = (props: { children: ReactElement}) => {
  return (
    <div>
      <ClerkProvider>
        <main className={`font-sans ${inter.variable} flex justify-center h-screen`}>
          <div className="w-full h-full md:max-w-2xl border-x border-slate-400">
            <TopBar />
            {props.children}
          </div>
        </main>
      </ClerkProvider>
    </div>
  )
}

export default Layout