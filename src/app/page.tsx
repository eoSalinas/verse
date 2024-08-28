import { DailyVerse } from '@/components/daily-verse'

export const dynamic = 'force-dynamic' // Force dynamic rendering for SSR

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-4 md:px-0">
      <DailyVerse />
    </div>
  )
}
