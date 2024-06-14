// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/ionic', "vuetify-nuxt-module", "@pinia/nuxt"],
  ssr: false,
});