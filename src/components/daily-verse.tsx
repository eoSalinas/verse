import type { GetVerseResponse } from '@/app/api/random-verse/route'
import { env } from '@/env'
import { api } from '@/utils/api'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

async function getVerse(): Promise<GetVerseResponse> {
  const response = await api('/random-verse', {
    headers: {
      Authorization: `Bearer ${env.CRON_SECRET}`,
    },
    cache: 'force-cache',
    next: {
      tags: ['verse'],
    },
  })

  const verse = await response.json()

  return verse
}

export async function DailyVerse() {
  const { book, chapter, number, text } = await getVerse()

  return (
    <div className="px-6 md:w-[75%] lg:w-[70%] xl:w-[50%]">
      <Card className="m-auto max-w-md shadow-none">
        <CardHeader className="space-y-0 p-4 pb-1">
          <CardDescription className="text-xs">
            Versículo do dia
          </CardDescription>
          <CardTitle className="text-lg">
            {book.name} {chapter}:{number}
          </CardTitle>
          <CardDescription className="text-xs">
            Escritor:{' '}
            <span className="font-medium text-zinc-950 underline">
              {book.author}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <h1>{text.replace('"', '')}</h1>
        </CardContent>
      </Card>
    </div>
  )
}
