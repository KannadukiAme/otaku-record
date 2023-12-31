// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
  ],
  colorMode: {
    classSuffix: '',
  },
  content: {
    markdown: {
      anchorLinks: {
        depth: 0,
      },
    },
    navigation: {
      fields: ['pubDate', 'heroImage', 'description', 'tags'],
    },
  },
})
