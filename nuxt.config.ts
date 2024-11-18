export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Pour la traduction
  modules: ["@nuxtjs/i18n"],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      { code: "en-UK", iso: "en-UK", name: "English (UK)", file: "en-UK.json" },
      { code: "fr-FR", iso: "fr-FR", name: "français", file: "fr-FR.json" },
      { code: "es-ES", iso: "es-ES", name: "Español", file: "es-ES.json" },
      { code: "ar-AR", iso: "ar-AR", name: "Arabe", file: "ar-AR.json" },
      {
        code: "sw-CD",
        iso: "sw-CD",
        name: "Swahili (Congo)",
        file: "sw-CD.json",
      },
      { code: "pt-PT", iso: "pt-PT", name: "Portugues", file: "pt-PT.json" },
      {
        code: "zh-ZH",
        iso: "zh-ZH",
        name: "Mandarin 中文",
        file: "zh-ZH.json",
      },
    ],
    defaultLocale: "en-UK",
    vueI18n: "./i18n.config.js",
  },
});
