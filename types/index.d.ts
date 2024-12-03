declare module '@nuxt/types' {
    interface NuxtConfig {
        vite?: {
            server?: {
                port?: number;
                host?: string;
            };
        };
    }
}
