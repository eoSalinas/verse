'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import { getSecondsToNewVerse } from '@/utils/get-seconds-to-new-verse'

export function Countdown() {
  const router = useRouter()

  const secondsToNewVerse = getSecondsToNewVerse()

  const [secondsUntilNewVerse, setSecondsUntilNewVerse] =
    useState(secondsToNewVerse)

  const { hours, minutes, seconds } = useMemo(() => {
    return {
      hours: Math.max(Math.floor(secondsUntilNewVerse / 3600), 0),
      minutes: Math.max(Math.floor((secondsUntilNewVerse % 3600) / 60), 0),
      seconds: Math.max(Math.floor((secondsUntilNewVerse % 3600) % 60), 0),
    }
  }, [secondsUntilNewVerse])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSecondsUntilNewVerse(getSecondsToNewVerse())
    }, 1000)

    if (hours <= 0 && minutes <= 0 && seconds <= 0) {
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
