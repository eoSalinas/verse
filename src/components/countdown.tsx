'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import { getSecondsToNewVerse } from '@/utils/get-seconds-to-new-verse'

export function Countdown() {
  const router = useRouter()

  const [secondsUntilNewVerse, setSecondsUntilNewVerse] = useState(
    getSecondsToNewVerse(),
  )

  const { hours, minutes, seconds } = useMemo(() => {
    return {
      hours: Math.floor(secondsUntilNewVerse / 3600),
      minutes: Math.floor((secondsUntilNewVerse % 3600) / 60),
      seconds: Math.floor((secondsUntilNewVerse % 3600) % 60),
    }
  }, [secondsUntilNewVerse])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSecondsUntilNewVerse((state) => state - 1)
    }, 1000)

    if (hours <= 0 && minutes <= 0 && seconds <= 0) {
      clearTimeout(timeout)
      router.refresh()
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [seconds, minutes, hours, router])

  return (
    <b suppressHydrationWarning>
      {hours.toString().padStart(2, '0')} :{' '}
      {minutes.toString().padStart(2, '0')} :{' '}
      {seconds.toString().padStart(2, '0')}
    </b>
  )
}
