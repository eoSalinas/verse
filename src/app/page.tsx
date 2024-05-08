import { Countdown } from '@/components/countdown'
import { DailyVerse } from '@/components/daily-verse'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/config/site'

export const dynamic = 'force-dynamic' // Force dynamic rendering for SSR

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center antialiased">
      <Card className="flex max-w-md flex-col items-center gap-2 rounded-3xl p-8">
        <h1 className="text-muted-foreground">
          <Countdown /> para um novo versículo 🙌
        </h1>
        <DailyVerse />
        <footer className="rounded-full border bg-card px-3 py-2 text-center text-xs font-medium text-card-foreground">
          &copy; {siteConfig.name} {new Date().getFullYear()}
        </footer>
      </Card>
    </div>
  )
}
