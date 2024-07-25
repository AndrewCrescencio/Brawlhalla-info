import { Legends } from '~/types/legends'

export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)
  const API_URL = config.public.apiUrl
  const API_KEY = config.apiKey

  const url = `${API_URL}/legend/all/?api_key=${API_KEY}`
  const data = await $fetch<Legends>(url)

  const dataFormated = data.map(legend => {
    return {
      bio_name: legend.bio_name,
      legend_id: legend.legend_id,
      legend_image:
        '/images/legends/' + legend.legend_name_key.replace(' ', '-') + '.png',
    }
  })
  return dataFormated
})
