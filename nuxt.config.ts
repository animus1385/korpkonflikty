// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    colorMode: {
        preference: 'system',
        fallback: 'light',
    },
    ssr: true,
    nitro: {
        preset: 'node-server',
    },
    css: ['@/assets/styles/styles.scss'],
    modules: ['@nuxt/devtools', '@nuxt/image', '@nuxt/ui', 'nuxt-swiper', '@nuxt/icon'],
    runtimeConfig: {
        public: {
            wordpressUrl: 'http://korpkonflikty.ru/graphql',
        },
    },
    tailwindcss: {
        viewer: false,
    },
    image: {
        provider: 'static',
        staticFilename: '[publicPath]/images/[name]-[hash][ext]',
        domains: [], // Пустой массив, если не используете внешние домены
    },
    icon: {
        customCollections: [
            {
                prefix: 'svg',
                dir: './assets/svg',
            },
        ],
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern',
                },
            },
        },
    },
});
