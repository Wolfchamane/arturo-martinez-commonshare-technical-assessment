// @ts-nocheck
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/icon'],
    css: ['~/assets/css/main.css'],
    icon: {
        serverBundle: {
            collections: ['carbon']
        }
    }
});
