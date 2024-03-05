'use client'

import { addDays, differenceInSeconds, set } from 'date-fns'
import { useEffect, useState } from 'react'

export function Countdown() {
  const now = new Date()

  const tomorrow = set(addDays(now, 1), {
    hours: 6,
    milliseconds: 0,
    seconds: 0,
    minutes: 0,
  })

  const secondsUntilNewVerse = differenceInSeconds(tomorrow, now) // Next day at 6 am

  const hour = Math.floor(secondsUntilNewVerse / (60 * 60))
  const minute = Math.floor((secondsUntilNewVerse % (60 * 60)) / 60)
  const second = Math.floor(secondsUntilNewVerse % 60)

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
      setSeconds(60)
      setMinutes(60)
      setHours(2)
    }
  }, [seconds, minutes, hours])

  return (
    <b>
      {hours.toString().padStart(2, '0')} :{' '}
      {minutes.toString().padStart(2, '0')} :{' '}
      {seconds.toString().padStart(2, '0')}
    </b>
  )
}
