import { revalidateTag } from 'next/cache'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization')

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', {
      status: 401,
    })
  }

  revalidateTag('verse')

  return Response.json({ success: true })
}
