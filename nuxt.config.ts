// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: true,
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "vue3-carousel-nuxt"],
  runtimeConfig: {
    public: {
      apiBase: "https://cms.t79.bet/api"
    }
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['marquee'].includes(tag)
    }
  }
});