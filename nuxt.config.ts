// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxtjs/google-fonts","nuxt-marquee"],

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },

  googleFonts: {
    display: 'swap',
    families: {
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      }
    },
  },

  compatibilityDate: "2024-11-27",
});
