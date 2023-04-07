// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/ionic'],
  ssr: false,
  mode: 'universal',
  target: 'static',
  generate: {
    fallback: true
  },
  hooks: {
    'app:mounted': (app) => {
      console.log('App is about to be mounted!')
    },
    app: {
      'app:mounted': () => {
        console.log('App is about to be mounted!')
      },
    }
  }
});

