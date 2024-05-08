import { Countdown } from '@/components/countdown'
import { DailyVerse } from '@/components/daily-verse'
import { siteConfig } from '@/config/site'

export const dynamic = 'force-dynamic' // Force dynamic rendering for SSR

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 antialiased">
      <h1 className="text-muted-foreground">
        <Countdown /> para um novo versículo 🙌
      </h1>
      <DailyVerse />
      <footer className="rounded-full border bg-card px-3 py-2 text-center text-xs font-medium text-card-foreground">
        &copy; {siteConfig.name} {new Date().getFullYear()}
      </footer>
    </div>
  )
}
