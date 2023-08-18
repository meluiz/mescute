import type { ClientOptions } from 'App/Types'

import { Client as DicordClient } from 'discord.js'

/**
 * Custom client class that extends the Discord.js Client class.
 * This class represents a Discord bot client.
 */
export class Client extends DicordClient {
  /**
   * Constructs a new instance of the Client class.
   * @param options - The options to configure the client.
   */
  constructor(options: ClientOptions) {
    super(options)
  }
}
