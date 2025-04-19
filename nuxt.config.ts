export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxtjs/google-fonts",
    "nuxt-marquee",
    "@vueuse/motion/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  ssr: false,
  app: {
    baseURL: "/web-portfolio/",
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "My personal web portfolio by Thanakorn Wongklad",
        },
        { name: "author", content: "Thanakorn Wongklad" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
      title: "Portfolio",
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
  compatibilityDate: "2024-11-27",
  future: {
    compatibilityVersion: 4,
  },
});
