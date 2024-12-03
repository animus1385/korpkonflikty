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
        typeCheck: true,
    },
    modules: ['@nuxt/devtools', '@nuxt/image', '@nuxt/ui', 'nuxt-swiper', '@nuxt/icon'],
    tailwindcss: {
        viewer: false,
    },
    runtimeConfig: {
        public: {
            API: process.env.PUBLIC_GRAPHQL_URL,
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
