import type { PlaylistedTrack } from '@spotify/web-api-ts-sdk'

export type AccountTokenResponse = {
  access_token: string
  token_type: string
  expires_in: number
}

export type PlaylistTracksResponse = {
  href: string
  items: PlaylistedTrack[]
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
}
