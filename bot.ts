import { dirname, importx } from '@discordx/importer'
import botConfig from 'config/bot'
import { IntentsBitField, Interaction, Message } from 'discord.js'

import { Client } from 'App/Client'

import Env from 'Utils/Env'

/**
 * The bot instance that represents the Discord bot
 */
export const Bot = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildVoiceStates,
    IntentsBitField.Flags.GuildMessageTyping,
    IntentsBitField.Flags.GuildMessageReactions,
    IntentsBitField.Flags.MessageContent,
  ],
  silent: false,
  commands: {
    prefix: '.', // The prefix used for commands
    splitter: ' ', // The character used to split commands and arguments
  },
  lavalink: {
    host: Env.LAVALINK_HOST ?? 'localhost',
    port: Number(Env.LAVALINK_PORT) ?? 2333,
    password: Env.LAVALINK_PASWORD ?? 'password',
  },
})

/**
 * Initialize the bot when it is ready
 */
Bot.once('ready', async function () {
  await Bot.initApplicationCommands()
})

/**
 * Handle interactions created by users
 * @param {Interaction} interaction - The user interaction
 */
Bot.on('interactionCreate', (interaction: Interaction) => {
  Bot.executeInteraction(interaction)
})

/**
 * Handle messages created by users
 * @param {Message} message - The user message
 */
Bot.on('messageCreate', (message: Message) => {
  Bot.executeCommand(message)
})

/**
 * Function to start the bot and log in with the Discord token
 */
async function Run() {
  await importx(`${dirname(import.meta.url)}/app/{Events,Commands}/**/*.ts`)

  await Bot.login(Env.DISCORD_TOKEN) // Log in with the Discord token from the environment variables
  // Check if the bot user exists
  if (Bot.user) {
    // Set the username of the bot user
    await Bot.user.setUsername(botConfig.name || 'Mescute')
  }
}

Run().catch(console.error) // Start the bot and handle any errors
