import type { ClientOptions } from 'App/Types'

import { logger } from '@poppinss/cliui'
import { Client as DicordXClient } from 'discordx'

/**
 * Custom client class that extends the Discord.js Client class.
 * This class represents a Discord bot client.
 */
export class Client extends DicordXClient {
  /**
   * Constructs a new instance of the Client class.
   * @param options - The options to configure the client.
   */
  constructor(options: ClientOptions) {
    options.simpleCommand = options.commands
    super(options)
  }

  async login(token: string) {
    if (!this.silent) {
      logger.info(`${this.user?.username ?? this.botId} is ready!`) // Log a message indicating that the bot is starting
    }

    return super.login(token)
  }
}
