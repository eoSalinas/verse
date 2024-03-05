import { addDays, differenceInSeconds, set } from 'date-fns'

import { Countdown } from '@/components/countdown'
import { DailyVerse } from '@/components/daily-verse'

async function getVerse() {
  const now = new Date()

  const tomorrow = set(addDays(now, 1), {
    hours: 6,
    milliseconds: 0,
    seconds: 0,
    minutes: 0,
  })

  const secondsUntilNewVerse = differenceInSeconds(tomorrow, now)

  const response = await fetch(
    'https://www.abibliadigital.com.br/api/verses/nvi/pt/random',
    {
      next: {
        revalidate: secondsUntilNewVerse, // Next day at 6 am
      },
    },
  )

  const verse = response.json()

  return verse
}

export default async function Home() {
  const verse = await getVerse()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 antialiased">
      <h1 className="text-muted-foreground">
        <Countdown /> para um novo versículo 🙌
      </h1>
      <DailyVerse content={verse} />
      <footer className="text-center text-sm text-muted-foreground">
        Todo dia um versículo &copy; Verse - {new Date().getFullYear()}
      </footer>
    </div>
  )
}
