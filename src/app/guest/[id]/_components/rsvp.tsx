'use client'

import { type Guest } from '@/server/db/schema'
import { RSVPAnswer } from './rsvp-answer'
import { Button } from '@/components/ui/button'

export function RSVP(props: { guestData: Guest[] }) {
  return (
    <div>
      {props.guestData[0]?.rsvp === true &&
      props.guestData[0]?.rsvpAnswer === false ? (
        <div className='text-lg'>
          <p className='pt-5'>thanks for letting us know, you’ll be missed!</p>
        </div>
      ) : null}
      {props.guestData[0]?.rsvp === true &&
      props.guestData[0]?.rsvpAnswer === true ? (
        <div className='text-lg'>
          <p>we can&apos;t wait to celebrate our day with you!</p>
        </div>
      ) : null}
      {props.guestData[0]?.rsvpAnswer === true ? (
        <div className='text-lg'>
          <p>00.00.26</p>
          <p>02:00pm-12:00am</p>
          <p className='pt-4'>Lewes Registery Office</p>
          <p>Southover Grange, Southover High St,</p>
          <p>Lewes BN7 1TP</p>
        </div>
      ) : null}
      <RSVPAnswer guestData={props.guestData} />
      {/* {props.guestData[0]?.rsvp === false ? (
          {props.guestData.map((guest, index) => (
          ))}
          <p className='text-xs pt-10 pb-10'>
            We kindly ask you let us know by 00/00/2025
          </p>
          <Button
            type='submit'
            size='xs'
            variant='rsvp'
            className='float-right'
          >
            <p>submit</p>
          </Button>
        </>
      ) : null} */}
      {props.guestData[0]?.rsvp === true &&
      props.guestData[0]?.rsvpAnswer === true ? (
        <div className='text-lg'>
          <p className='pt-10'>reception details</p>
          <p>address of the receiption will go here</p>
        </div>
      ) : null}
    </div>
  )
}
