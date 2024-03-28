import { ClerkProvider } from '@clerk/nextjs'
import React, { type ReactElement } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

const AuthLayout = (props: { children: ReactElement }) => {
  return (
    <div>
      <ClerkProvider>
        <main
          className={`font-sans ${inter.variable} flex justify-center h-screen`}
        >
          <div>{props.children}</div>
        </main>
      </ClerkProvider>
    </div>
  )
}

export default AuthLayout
