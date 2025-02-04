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
            script: [
                {
                    type: 'text/javascript',
                    innerHTML: `   (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
                       m[i].l=1*new Date();
                       for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                       k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                       (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                       ym(99769403, "init", {
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true,
                            webvisor:true
                       });
                    `,
                },
            ],
            noscript: [
                {
                    children: `<div><img src="https://mc.yandex.ru/watch/99769403" style="position:absolute; left:-9999px;" alt="" /></div>`,
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
