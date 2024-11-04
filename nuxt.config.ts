// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    colorMode: {
        preference: 'system',
        fallback: 'light',
    },
    ssr: true, // Включает серверный рендеринг. Для статической генерации используйте 'false'.
    target: 'static', // Используйте 'static' для статической генерации
    router: {
        base: '/', // Базовый путь корня
    },
    app: {
        baseURL: '/', // Базовый URL приложения
    },
    build: {
        publicPath: '/_nuxt/', // Путь к статическим ресурсам
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
