import { SignOutButton, SignedIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { IconLogout } from '@tabler/icons-react'

export default function Logout() {
  const router = useRouter()
  return (
    <SignedIn>
      <SignOutButton signOutCallback={() => router.push('/sign-in')}>
        <div className="flex align-middle cursor-pointer">
          <IconLogout
            size={24}
            className="text-dark-1 dark:text-light-1"
            stroke={2}
            strokeLinejoin="miter"
          />
          <p className="text-dark-2 dark:text-light-2 max-lg:hidden font-black pl-3">
            Sign Out
          </p>
        </div>
      </SignOutButton>
    </SignedIn>
  )
}
