import { DateTime, Interval } from 'luxon'

export function getSecondsToNewVerse() {
  const now = DateTime.now().setZone('America/Sao_Paulo')

  const nextVerseTimestamp = now.startOf('day').set({ hour: 6 })

  const tomorrow =
    now > nextVerseTimestamp
      ? nextVerseTimestamp.plus({ day: 1 })
      : nextVerseTimestamp

  const secondsToNewVerse = Interval.fromDateTimes(now, tomorrow).length(
    'seconds',
  )

  return secondsToNewVerse
}
