import type { BotConfig } from 'App/Types'

import Env from 'Utils/Env'

/**
 * Represents the configuration for the bot.
 */
const botConfig: BotConfig = {
  /**
   * The name of bot.
   */
  name: 'Mescute',
  /**
   * The ID of the bot.
   */
  botId: Env.DISCORD_ID,
}

export default botConfig
