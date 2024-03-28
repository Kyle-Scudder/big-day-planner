import { useRouter } from 'next/router'
import React from 'react'

export default function Guest() {
  const router = useRouter()
  const { id } = router.query
  return <div>Guest {id}</div>
}
