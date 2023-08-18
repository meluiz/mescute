import { logger } from '@poppinss/cliui'
import { IntentsBitField } from 'discord.js'

import { Client } from 'App/Client'

import Env from 'Utils/Env'

/**
 * The bot instance that represents the Discord bot
 */
export const bot = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildVoiceStates,
    IntentsBitField.Flags.GuildMessageReactions,
    IntentsBitField.Flags.MessageContent,
  ],
  silent: false,
  commands: {
    prefix: '.', // The prefix used for commands
    splitter: ' ', // The character used to split commands and arguments
  },
})

/**
 * Function to start the bot and log in with the Discord token
 */
async function Run() {
  logger.info('Bot is starting') // Log a message indicating that the bot is starting
  await bot.login(Env.DISCORD_TOKEN) // Log in with the Discord token from the environment variables
}

Run().catch(logger.fatal) // Start the bot and handle any errors
