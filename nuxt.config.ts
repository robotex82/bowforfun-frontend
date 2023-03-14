// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/ionic'],
  ssr: false,
  mode: 'universal',
  target: 'static',
  generate: {
    fallback: true
  }
})
