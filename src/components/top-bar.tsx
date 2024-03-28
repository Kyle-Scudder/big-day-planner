import React from 'react'

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
