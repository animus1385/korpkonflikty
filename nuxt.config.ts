import { screensNuxtImage } from "./config/screens";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    colorMode: {
        classSuffix: '',
        preference: 'light',
    },
    ssr: true,
    app: {
        head: {
            htmlAttrs: {
                lang: 'ru',
            },
            title: 'Template',
            charset: 'utf-8',
            meta: [],
            link: [],
        },
        baseURL: '/', // Базовый URL приложения
    },

    css: ['@/assets/styles/styles.scss'],

    typescript: {
        strict: true,
        typeCheck: false,
    },
    modules: ['@nuxt/devtools', '@nuxt/image', '@nuxt/ui', 'nuxt-swiper', '@nuxt/icon', '@pinia/nuxt', 'vue-yandex-maps/nuxt', 'dayjs-nuxt'],
    tailwindcss: {
        viewer: false,
    },
    yandexMaps: {
        apikey: '3bfc6cb2-7479-477e-9638-a52995b5b67d',
    },
    runtimeConfig: {
        public: {
            API: process.env.PUBLIC_GRAPHQL_URL,
            website: process.env.WEB_SITE,
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern', // or "modern"
                },
            },
        },
    },
    image: {
        inject: true,
        dir: 'assets/img',
        screens: screensNuxtImage,
    },
    icon: {
        customCollections: [
            {
                prefix: 'svg',
                dir: './assets/svg',
            },
        ],
    },
});