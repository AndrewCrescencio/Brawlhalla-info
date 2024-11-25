export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const API_URL = config.public.apiUrl
  const API_KEY = config.apiKey

  const query = getQuery(event)

  const url = `${API_URL}/legend/${query.id}/?api_key=${API_KEY}`

  return await $fetch(url)
})
