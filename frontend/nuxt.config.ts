import tailwindcss from '@tailwindcss/vite'
;['../.env', '.env'].forEach((envFile) => {
  try {
    process.loadEnvFile(envFile)
  } catch (error) {
    if ((error as { code?: string }).code !== 'ENOENT') {
      throw error
    }
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    public: {
      apiBaseUrl:
        process.env.FRONTEND_API_URL || process.env.SHANYRAQ_API_URL || 'http://localhost:3000/api',
    },
  },
})
