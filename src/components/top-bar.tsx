import React from 'react'
import SignOut from './sign-out'
import SiteTitle from './site-title'

const TopBar = () => {
  return (
    <section className='border-slate-400 p-4 w-full flex justify-between'>
      <div className="flex-row items-center">
        <SiteTitle />
      </div>
      <div className="flex-row items-center">
        <SignOut />
      </div>
    </section>
  )
}

export default TopBar