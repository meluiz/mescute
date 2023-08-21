import type { AccountTokenResponse, PlaylistTracksResponse } from 'App/Types'

import querystring from 'querystring'
import axios from 'axios'
import { Num } from 'melper'

import Env from 'Utils/Env'

const instance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
})

export class Fetch {
  private static AccessToken: string
  private static AccessType: string
  private static ExpiresAt: number

  public static async getAcessToken() {
    const now = new Date().getTime()

    if (now < Fetch.ExpiresAt - Num.toMs('10m')) {
      return {
        AccessToken: Fetch.AccessToken,
        AccessType: Fetch.AccessType,
        ExpiresAt: Fetch.ExpiresAt,
      }
    }

    const formData = querystring.stringify({
      grant_type: 'client_credentials',
      client_id: Env.SPOTIFY_CLIENT_ID,
      client_secret: Env.SPOTIFY_CLIENT_SECRET,
    })

    const { data } = await axios.post<AccountTokenResponse>('https://accounts.spotify.com/api/token', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    const { access_token, token_type, expires_in } = data

    Fetch.AccessToken = access_token

    Fetch.AccessToken = access_token
    Fetch.AccessType = token_type
    Fetch.ExpiresAt = now + expires_in * 1000

    return {
      AccessToken: access_token,
      AccessType: token_type,
      ExpiresAt: now + expires_in * 1000,
    }
  }

  public static async tracks(id: string) {
    const { AccessToken, AccessType } = await this.getAcessToken()

    instance.defaults.headers.common['Authorization'] = `${AccessType} ${AccessToken}`

    const { data } = await instance.get<PlaylistTracksResponse>(`/playlists/${id}/tracks`)

    return data
  }
}
