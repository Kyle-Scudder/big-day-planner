import React, { type ReactElement } from 'react'
import TopBar from './top-bar'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

const Layout = (props: { children: ReactElement }) => {
  return (
    <div>
      <ClerkProvider>
        <main className={`font-sans ${inter.variable} justify-center h-screen`}>
          <TopBar />
          <div className="flex items-center justify-center">
            <div className="w-full h-full md:max-w-2xl border-x border-slate-400">
              {props.children}
            </div>
          </div>
        </main>
      </ClerkProvider>
    </div>
  )
}

export default Layout
