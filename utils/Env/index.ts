import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

const env = createEnv({
  server: {
    DISCORD_ID: z.string(),
    DISCORD_TOKEN: z.string(),
  },
  runtimeEnv: {
    DISCORD_ID: process.env.DISCORD_ID,
    DISCORD_TOKEN: process.env.DISCORD_TOKEN,
  },
})

export default env
