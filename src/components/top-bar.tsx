import React from 'react'
import Image from 'next/image'
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const CreateGuestWizard = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className='flex'>
      <Image src={user.imageUrl} width={16} height={16} alt="Profile image" className='w-14  h-14 rounded-full' />
    </div>
  );
}

const TopBar = () => {
  const user = useUser();
  return (
    <div className='flex border-b border-slate-400 p-4'>
      {!user.isSignedIn && (
        <div className="flex justify-center">
          <SignInButton />
        </div>
      )}
      <SignOutButton />
      {user.isSignedIn && <CreateGuestWizard />}
    </div>
  )
}

export default TopBar