import { DailyVerse } from '@/components/daily-verse'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 antialiased">
      <h1 className="text-muted-foreground">
        <b>02:43:16</b> para um novo versículo 🙌
      </h1>
      <DailyVerse />
      <footer className="text-center text-sm text-muted-foreground">
        Todo dia um versículo &copy; Verse - {new Date().getFullYear()}
      </footer>
    </div>
  )
}
