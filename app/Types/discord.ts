import type { ClientOptions as DiscordJSClientOptions, Message } from 'discord.js'
import type { Awaitable } from './global'

/**
 * Interface representing the configuration options for a bot.
 */
export interface BotConfig {
  /**
   * The name of bot.
   */
  name?: string
  /**
   * The ID of the bot.
   */
  botId?: string
}

/**
 * Configuration options for handling exceptions in commands.
 */
export interface CommandConfigException {
  /**
   * The message to send when a command is not found.
   * Can be a string or a function that takes the command message as a parameter and returns an Awaitable<void>.
   */
  notFound?: string | ((command: Message) => Awaitable<void>)
}

/**
 * Configuration options for commands.
 */
export interface CommandConfig {
  /**
   * The prefix to use for commands.
   */
  prefix?: string
  /**
   * The splitter to use for commands.
   */
  splitter?: string
  /**
   * Exception handling options for commands.
   */
  exception?: CommandConfigException
}

/**
 * Configuration options for the Discord client.
 */
export interface ClientOptions extends DiscordJSClientOptions, BotConfig {
  /**
   * Whether to run the client in silent mode.
   */
  silent?: boolean
  /**
   * Configuration options for commands.
   */
  commands?: CommandConfig
}
