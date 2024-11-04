// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    colorMode: {
        preference: 'system',
        fallback: 'light',
    },
    ssr: true, 
    target: 'static', // Указывает на использование статической генерации
    router: {
        base: '/nuxt-wordpress/', // Базовый путь вашего проекта
    },
    css: ['@/assets/styles/styles.scss'],
    modules: ['@nuxt/devtools', '@nuxt/image', '@nuxt/ui', 'nuxt-swiper', '@nuxt/icon'],
    // runtimeConfig: {
    //     public: {
    //         wordpressUrl: 'http://korpkonflikty.ru/graphql',
    //     },
    // },
    tailwindcss: {
        viewer: false,
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
