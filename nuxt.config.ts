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
  },
  // vite: {
  //   css: {
  //     devSourcemap: false // Tắt source map cho CSS
  //   }
  // },
  css: [
    '~/assets/css/style.css',
    '~/assets/css/top.css',
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
        }
      ]
    }
  }
});