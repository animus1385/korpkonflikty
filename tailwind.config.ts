/** @type {import('tailwindcss').Config} */
import { screens } from './config';
export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        container: {
            center: true,
            padding: '24px',
        },
        screens: screens,
        extend: {},
    },

    plugins: [],
};
