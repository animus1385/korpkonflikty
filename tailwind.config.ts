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
        },
        screens: screens,
        extend: {
            colors: {
                korpConflikty: {
                    500: '#2387C0',
                },
            },
        },
    },

    plugins: [],
};
