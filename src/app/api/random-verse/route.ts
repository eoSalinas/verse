import type { NextRequest } from 'next/server'

import { env } from '@/env'
import verseList from '@/verses.json'

import { getPlaceholderVerse } from './placeholder-versicle'

export interface GetVerseResponse {
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

const placeholderData = getPlaceholderVerse()

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization')

  if (authHeader !== `Bearer ${env.CRON_SECRET}`) {
    return new Response('Unauthorized', {
      status: 401,
    })
  }

  const randomVerse =
    verseList.verses[Math.floor(Math.random() * verseList.verses.length)]

  try {
    const response = await fetch(
      `https://www.abibliadigital.com.br/api/verses/nvi/${randomVerse.abbrev}/${randomVerse.chapter}/${randomVerse.verse}`,
      {
        cache: 'no-cache',
      },
    )

    if (response.status !== 200) {
      return Response.json(placeholderData)
    }

    const responseBody: GetVerseResponse =
      (await response.json().catch(() => {})) || getPlaceholderVerse() // Prevents to return an empty object or crash the app if the API returns no data

    return Response.json(responseBody)
  } catch (error) {
    return Response.json(placeholderData)
  }
}
