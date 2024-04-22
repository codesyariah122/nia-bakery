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
    ]
})
