import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/index.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/image", "@nuxt/content"],

  image: {
    provider: "ipx",
    static: true,
  },

  nitro: {
    preset: "static",
    prerender: {
      failOnError: false,
      crawlLinks: true,
      ignore: [
        "/en/**",
        "/it/**",
        "/de/**",
        "/pt/**",
        "/es/**",
        "/ja/**",
        "/ar/**",
        "/zh/**",
        "/hi/**",
        "/ko/**",
        "/ru/**",
        "/fr/**",
      ],
    },
  },
});