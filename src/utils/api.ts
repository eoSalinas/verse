import { env } from '@/env'

export function api(path: string, init?: RequestInit) {
  const baseUrl = env.API_BASE_URL
  const apiPrefix = '/api'
  const url = new URL(apiPrefix.concat(path), baseUrl)

  return fetch(url, init)
}
