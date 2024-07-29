import { Rankings } from '~/types/rankings'

export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)
  const API_URL = config.public.apiUrl
  const API_KEY = config.apiKey

  const query = getQuery(event)

  const url = `${API_URL}/rankings/1v1/us-e/1?api_key=${API_KEY}`

  const data = await $fetch<Rankings>(url)

  return data
})
