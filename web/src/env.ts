import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    CRON_SECRET: z.string(),
    API_BASE_URL: z.string().url(),
  },
  runtimeEnv: {
    CRON_SECRET: process.env.CRON_SECRET,
    API_BASE_URL: process.env.API_BASE_URL,
  },
})
