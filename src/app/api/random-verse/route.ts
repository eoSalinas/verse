import { NextRequest } from 'next/server'

import verseList from '@/verses.json'

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization')

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', {
      status: 401,
    })
  }

  const randomVerse =
    verseList.verses[Math.floor(Math.random() * verseList.verses.length)]

  const response = await fetch(
    `https://www.abibliadigital.com.br/api/verses/nvi/${randomVerse.abbrev}/${randomVerse.chapter}/${randomVerse.verse}`,
    {
      cache: 'no-cache',
    },
  )

  return response
}
