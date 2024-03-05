import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

interface DailyVerseProps {
  content: {
    book: {
      abbrev: { pt: string; en: string }
      name: string
      author: string
      group: string
      version: string
    }
    chapter: number
    number: number
    text: string
  }
}

export function DailyVerse({
  content: { chapter, number, text, book },
}: DailyVerseProps) {
  return (
    <div className="px-6 md:w-[75%] lg:w-[70%] xl:w-[50%]">
      <Card>
        <CardHeader>
          <CardTitle>
            {book.name} - {chapter}:{number}
          </CardTitle>
          <CardDescription>
            Escrito por <span className="underline">{book.author}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h1>&quot;{text.replace('"', '')}&quot;</h1>
        </CardContent>
      </Card>
    </div>
  )
}
