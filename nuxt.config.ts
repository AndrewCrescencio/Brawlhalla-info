// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  srcDir: 'src/',
  css: ['~/styles/styles.scss'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Brawlhalla Info',
      viewport: 'width=device-width,initial-scale=1',
      link: [{ rel: 'icon', href: 'favicon.ico' }],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
        {
          name: 'theme-color',
          media: '(prefers-color-scheme: light)',
          content: 'white',
        },
        {
          name: 'theme-color',
          media: '(prefers-color-scheme: dark)',
          content: '#222222',
        },
      ],
    },
  },
  modules: ['@nuxt/image'],

  runtimeConfig: {
    apiKey: process.env.API_KEY,
    public: {
      apiUrl: process.env.API_URL,
    },
  },
})
