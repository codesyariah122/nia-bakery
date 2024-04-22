// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  target: 'static',
  experimental: {
    payloadExtraction: false
  },
  router: {
    options: {
      strict: false
    }
  },

  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      }
    },
  },

  alias: {
    // "@": resolve(__dirname, "/")
    assets: "/<rootDir>/assets"
  },
  body: true,
  components: true,

  modules: [
    '@nuxtjs/device',
    '@vite-pwa/nuxt',
    '@nuxt/content',
    ],

  pwa: {
    meta: {
      title: "Nia Bakery - Special Bolu Jadul",
      author: "Nia Bakery",
      icon: true,
      canonical: "https://nia-bakery.vercel.app/",
      description: "Kenangan Manis: Kue Bolu Jadul dengan Rasa Nostalgia.",
      keywords: "Special Bolu Jadul",
      ogUrl: "https://nia-bakery.vercel.app/",
      ogType: "website",
      ogSiteName: "Nia Bakery - Special Bolu Jadul",
      ogTitle: "Nia Bakery - Special Bolu Jadul",
      ogImage: "https://nia-bakery.vercel.app/icon.png",
      ogImageWidth: "600",
      ogImageHeight: "400",
    },
    manifest: {
      lang: "en",
      name: "Nia Bakery - Special Bolu Jadul",
      short_name: "Nia Bakery - Special Bolu Jadul",
      description: "Kenangan Manis: Kue Bolu Jadul dengan Rasa Nostalgia.",
      start_url: "https://nia-bakery.vercel.app/",
      lang: "en",
      display: "standalone",
      theme_color: "#000",
      background_color: "#000",
      icons: [
      {
        src: "/img/icons/android-launchericon-48-48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/img/icons/android-launchericon-72-72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/img/icons/android-launchericon-96-96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/img/icons/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/img/icons/152.png",
        sizes: "152x152",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/img/icons/android-launchericon-192-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/img/icons/android-launchericon-512-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable any",
      },
      ],
    },
  },
})
