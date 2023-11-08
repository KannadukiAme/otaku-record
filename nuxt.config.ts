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
    // sources: {
    //   github: {
    //     prefix: '/aniuta', // Prefix for routes used to query contents
    //     driver: 'github', // Driver used to fetch contents (view unstorage documentation)
    //     repo: 'KannadukiAme/aniuta-list',
    //     branch: 'master',
    //     dir: '', // Directory where contents are located. It could be a subdirectory of the repository.
    //     // Imagine you have a blog inside your content folder. You can set this option to `content/blog` with the prefix option to `/blog` to avoid conflicts with local files.
    //   },
    // },
  },
})
