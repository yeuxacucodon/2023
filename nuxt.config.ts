export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxt/test-utils/module", "@nuxtjs/google-fonts"],
  vite: {
    base: "/year-progress/",
  },
  tailwindcss: {
    config: {
      darkMode: "class",
    },
  },
  googleFonts: {
    families: {
      "Fira Code": {
        wght: 600,
      },
    },
    subsets: "latin",
  },
});
