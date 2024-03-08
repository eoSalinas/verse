import { DateTime, Interval } from 'luxon'

export function getSecondsToNewVerse() {
  const now = DateTime.now().setZone('America/Sao_Paulo')

  const tomorrow = now.startOf('day').set({ hour: 6 }).plus({ days: 1 }) // Next day at 6 am

  const secondsToNewVerse = Interval.fromDateTimes(now, tomorrow).length(
    'seconds',
  )

  return secondsToNewVerse
}
