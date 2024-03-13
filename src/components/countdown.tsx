'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import { getSecondsToNewVerse } from '@/utils/get-seconds-to-new-verse'

export function Countdown() {
  const router = useRouter()

  const secondsUntilNewVerse = useMemo(getSecondsToNewVerse, [])

  const hour = useMemo(
    () => Math.floor(secondsUntilNewVerse / (60 * 60)),
    [secondsUntilNewVerse],
  )
  const minute = useMemo(
    () => Math.floor((secondsUntilNewVerse % (60 * 60)) / 60),
    [secondsUntilNewVerse],
  )
  const second = useMemo(
    () => Math.floor(secondsUntilNewVerse % 60),
    [secondsUntilNewVerse],
  )

  const [seconds, setSeconds] = useState(second)
  const [minutes, setMinutes] = useState(minute)
  const [hours, setHours] = useState(hour)

  useEffect(() => {
    seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000)

    if (seconds === 0 && minutes > 0) {
      setMinutes(minutes - 1)
      setSeconds(60)
    }

    if (minutes === 0 && hours > 0) {
      setHours(hours - 1)
      setMinutes(60)
    }

    if (hours === 0 && minutes === 0 && seconds === 0) {
      router.refresh()

      setSeconds(60)
      setMinutes(60)
      setHours(24)
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
