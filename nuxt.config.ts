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
    app: {
        head: {
            htmlAttrs: {
                lang: 'ru',
            },
            title: 'Template',
            charset: 'utf-8',
            meta: [],
            link: [],
            script: [
                {
                    src: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=3bfc6cb2-7479-477e-9638-a52995b5b67d',
                    type: 'text/javascript',
                    async: true,
                    defer: true,
                },
            ],
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
        'nuxt-booster',
        '@nuxtjs/fontaine',
        'nuxt-graphql-request',
    ],
    tailwindcss: {
        viewer: false,
    },
    yandexMaps: {
        apikey: '3bfc6cb2-7479-477e-9638-a52995b5b67d',
    },
    booster: {
        image: {
            screens: {
                default: 320,
                xxs: 480,
                xs: 576,
                sm: 768,
                md: 996,
                lg: 1200,
                xl: 1367,
                xxl: 1600,
                '4k': 1921,
            },
        },
        detection: {
            performance: true,
            browserSupport: true,
            battery: true,
        },
        optimizeSSR: {
            cleanPreloads: true,
            cleanPrefetches: true,
            inlineStyles: true,
        },
        targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif', 'svg'],
        performanceMetrics: {
            device: {
                hardwareConcurrency: { min: 2, max: 48 },
                deviceMemory: { min: 2 },
            },
            timing: {
                fcp: 800,
                dcl: 1200,
            },
        },
        domains: ['admin.korpkonflikty.ru'],
    },
    runtimeConfig: {
        public: {
            API: process.env.PUBLIC_GRAPHQL_URL,
            website: process.env.WEB_SITE,
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
    image: {
        provider: 'ipx',
        domains: ['admin.korpkonflikty.ru'],
        ipx: {
            modifiers: {
                format: 'webp',
            },
        },
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
