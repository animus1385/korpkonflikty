import { screensNuxtImage } from './config/screens';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    colorMode: {
        classSuffix: '',
        preference: 'light',
    },
    ssr: true,
    sitemap: {
        sources: ['/api/__sitemap__/urls'],
    },
    site: {
        url: process.env.WEB_SITE,
        name: 'Корпоратиные конфликты',
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'ru',
            },
            title: 'Корпоратиные конфликты',
            charset: 'utf-8',
            meta: [],
            link: [],
        },
        baseURL: '/',
    },

    css: ['@/assets/styles/styles.scss'],

    typescript: {
        strict: true,
        typeCheck: false,
    },
    modules: [
      '@nuxt/devtools',
      '@nuxt/image',
      '@nuxt/ui',
      'nuxt-swiper',
      '@nuxt/icon',
      '@pinia/nuxt',
      'vue-yandex-maps/nuxt',
      'dayjs-nuxt',
      'nuxt-graphql-request',
      'nuxt-viewport',
      '@nuxtjs/robots',
      '@nuxtjs/sitemap',
      'nuxt-schema-org',
    ],
    tailwindcss: {
        viewer: false,
    },
    yandexMaps: {
        apikey: '985b6d39-07bb-4745-87b0-a0fec1b0c094',
    },
    viewport: {
        breakpoints: screensNuxtImage,
    },
    icon: {
        mode: 'svg',
        customCollections: [
            {
                prefix: 'custom-icons',
                dir: './assets/custom-icons',
            },
        ],
    },
    runtimeConfig: {
        public: {
            API: process.env.PUBLIC_GRAPHQL_URL,
            website: process.env.WEB_SITE,
            websiteAdmin: process.env.WEB_ADMIN_SITE,
        },
    },
    build: {
        transpile: ['nuxt-graphql-request'],
    },
    graphql: {
        clients: {
            default: {
                endpoint: process.env.PUBLIC_GRAPHQL_URL as string,
            },
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
});