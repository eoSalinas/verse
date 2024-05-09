import Image from 'next/image'

import { Countdown } from '@/components/countdown'
import { DailyVerse } from '@/components/daily-verse'
import { ThemeToggle } from '@/components/theme-toogle'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/config/site'

export const dynamic = 'force-dynamic' // Force dynamic rendering for SSR

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center antialiased">
      <Card className="flex max-w-md flex-col items-center gap-2 rounded-3xl p-8">
        <header className="flex w-full justify-between">
          <Image
            src="/logotipo-verse.svg"
            width={32}
            height={32}
            alt="Logotipo Verse"
          />

          <div className="flex items-center gap-2">
            <Countdown />
            <ThemeToggle />
          </div>
        </header>
        <DailyVerse />
        <footer className="rounded-full border bg-card px-3 py-2 text-center text-xs font-medium text-card-foreground">
          &copy; {siteConfig.name} {new Date().getFullYear()}
        </footer>
      </Card>
    </div>
  )
}
