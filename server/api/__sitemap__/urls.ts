import type { SitemapUrlInput } from '#sitemap/types';

export default defineSitemapEventHandler(async () => {
    const { $api } = useNuxtApp();
    return (await $api.getSiteMap()) satisfies SitemapUrlInput[];
});
