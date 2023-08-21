import type { EmbedErrorType, EmbedOptions } from './types'

import { APIEmbed } from 'discord.js'
import { Str } from 'melper'

export default class Embed {
  private static parseOptions(title?: string | null, description?: string | null) {
    return {
      title: title || undefined,
      description: description || undefined,
    }
  }

  private static mountEmbedObject(options: EmbedOptions): APIEmbed {
    let timestamp: string | undefined = undefined

    if (typeof options.timestamp === 'boolean' && options.timestamp) {
      timestamp = new Date().toISOString()
    }

    if (options.timestamp instanceof Date) {
      timestamp = options.timestamp.toISOString()
    }

    return {
      ...options,
      timestamp,
      title: Str.capitalCase(options?.title || ''),
    }
  }

  public static info(title?: string | null, description?: string, options?: Omit<EmbedOptions, 'color'>) {
    const parsedValues = Embed.parseOptions(title, description)

    return Embed.mountEmbedObject({
      ...options,
      title: parsedValues.title,
      description: parsedValues.description,
      color: 0x3e63dd,
    })
  }

  public static warn(title?: string | null, description?: string, options?: Omit<EmbedOptions, 'color'>) {
    const parsedValues = Embed.parseOptions(title, description)

    return Embed.mountEmbedObject({
      ...options,
      title: parsedValues.title,
      description: parsedValues.description,
      color: 0xffc53d,
    })
  }

  public static error(type?: EmbedErrorType, description?: string, options?: Omit<EmbedOptions, 'color'>) {
    return Embed.mountEmbedObject({
      ...options,
      title: type,
      description,
      color: 0xe54d2e,
    })
  }

  public static success(title?: string | null, description?: string, options?: Omit<EmbedOptions, 'color'>) {
    const parsedValues = Embed.parseOptions(title, description)

    return Embed.mountEmbedObject({
      ...options,
      title: parsedValues.title,
      description: parsedValues.description,
      color: 0x46a758,
    })
  }

  public static neultral(title?: string | null, description?: string, options?: Omit<EmbedOptions, 'color'>) {
    const parsedValues = Embed.parseOptions(title, description)

    return Embed.mountEmbedObject({
      ...options,
      title: parsedValues.title,
      description: parsedValues.description,
      color: 0x8d8d8d,
    })
  }
}

export * from './types'
