import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/index.css"],

  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },

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