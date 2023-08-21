import type { APIEmbedAuthor, APIEmbedField, APIEmbedFooter, APIEmbedImage, APIEmbedThumbnail } from 'discord.js'

export type EmbedScheme = 'info' | 'warn' | 'error' | 'success' | 'neultral'

export interface EmbedOptions {
  url?: string
  color?: number
  title?: string
  description?: string
  image?: APIEmbedImage
  author?: APIEmbedAuthor
  footer?: APIEmbedFooter
  fields?: APIEmbedField[]
  thumbnail?: APIEmbedThumbnail
  timestamp?: boolean | Date
}

export enum EmbedErrorType {
  Command = 'Command Error',
  Connection = 'Connection Error',
  Permission = 'Permission Error',
  Player = 'Player Error',
  Unknown = 'Unknown Error',
}
