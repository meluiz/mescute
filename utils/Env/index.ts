import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

const Env = createEnv({
  server: {
    DISCORD_ID: z.string(),
    DISCORD_TOKEN: z.string(),
    SPOTIFY_CLIENT_ID: z.string(),
    SPOTIFY_CLIENT_SECRET: z.string(),
  },
  runtimeEnv: {
    DISCORD_ID: process.env.DISCORD_ID,
    DISCORD_TOKEN: process.env.DISCORD_TOKEN,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
  },
})

export default Env
