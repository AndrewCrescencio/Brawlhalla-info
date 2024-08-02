import { Rankings } from '~/types/rankings'

export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)
  const API_URL = config.public.apiUrl
  const API_KEY = config.apiKey

  const params = getRouterParams(event)

  const mode = getRouterParam(event, 'mode') ?? '1v1'
  const region = getRouterParam(event, 'region') ?? 'us-e'
  const page = getRouterParam(event, 'page') ?? 1

  const url = `${API_URL}/rankings/${mode}/${region}/${page}?api_key=${API_KEY}`

  const data = await $fetch<Rankings>(url)

  return data
})
