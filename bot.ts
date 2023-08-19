import { dirname, importx } from '@discordx/importer'
import { logger } from '@poppinss/cliui'
import botConfig from 'config/bot'
import { IntentsBitField, Interaction, Message } from 'discord.js'

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
 * Initialize the bot when it is ready
 */
bot.once('ready', async function () {
  await bot.initApplicationCommands()
})

/**
 * Handle interactions created by users
 * @param {Interaction} interaction - The user interaction
 */
bot.on('interactionCreate', (interaction: Interaction) => {
  bot.executeInteraction(interaction)
})

/**
 * Handle messages created by users
 * @param {Message} message - The user message
 */
bot.on('messageCreate', (message: Message) => {
  bot.executeCommand(message)
})

/**
 * Function to start the bot and log in with the Discord token
 */
async function Run() {
  await importx(`${dirname(import.meta.url)}/app/{Events,Commands}/**/*.ts`)

  await bot.login(Env.DISCORD_TOKEN) // Log in with the Discord token from the environment variables
  // Check if the bot user exists
  if (bot.user) {
    // Set the username of the bot user
    await bot.user.setUsername(botConfig.name || 'Mescute')
  }
}

Run().catch(logger.fatal) // Start the bot and handle any errors
