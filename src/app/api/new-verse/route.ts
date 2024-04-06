import { revalidateTag } from 'next/cache'
import type { NextRequest } from 'next/server'

import { env } from '@/env'

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization')

  if (authHeader !== `Bearer ${env.CRON_SECRET}`) {
    return new Response('Unauthorized', {
      status: 401,
    })
  }

  revalidateTag('verse')

  return Response.json({ success: true })
}
