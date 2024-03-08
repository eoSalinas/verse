import { cookies } from 'next/headers'

import { Countdown } from '@/components/countdown'
import { DailyVerse } from '@/components/daily-verse'

export default async function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cookie = cookies() // Just to force a dynamic route for get the right time to countdown

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 antialiased">
      <h1 className="text-muted-foreground">
        <Countdown /> para um novo versículo 🙌
      </h1>
      <DailyVerse />
      <footer className="text-center text-sm text-muted-foreground">
        Todo dia um versículo &copy; Verse - {new Date().getFullYear()}
      </footer>
    </div>
  )
}
