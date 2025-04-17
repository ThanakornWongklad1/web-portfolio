import { modal } from "#build/ui";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxtjs/google-fonts", "nuxt-marquee"],

  css: ["~/assets/css/main.css"],

  googleFonts: {
    display: "swap",
    families: {
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },

  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "My personal web portfolio by Thanakorn Wongklad",
        },
        { name: "author", content: "Thanakorn Wongklad" },
      ],
    },
  },

  compatibilityDate: "2024-11-27",

  future: {
    compatibilityVersion: 4,
  },
});
