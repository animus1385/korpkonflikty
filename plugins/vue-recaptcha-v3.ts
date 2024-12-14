import { defineNuxtPlugin } from '#app';
import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: 'YOUR_SITE_KEY', // Replace with your site key
        loaderOptions: {
            autoHideBadge: true, // Optional: Automatically hides the badge
            explicitRenderParameters: {
                //badge: 'bottomleft', //incase you don't want to hide it
            },
        },
    });
});
