import React, { type ReactElement } from 'react'
import AuthLayout from '~/components/auth-layout'

export default function Home() {
  return <div>Home</div>
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>
}
