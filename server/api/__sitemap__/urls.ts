import type { SitemapUrlInput } from '#sitemap/types';

export default defineSitemapEventHandler(async () => {
    const req = $fetch(process.env.PUBLIC_GRAPHQL_URL as string, {
        method: 'POST',
        body: {
            query: 'query getPage {\n  allUrls\n}',
        },
    });
    const result = await req.then((e: any) => e.data.allUrls);

    return result satisfies SitemapUrlInput[];
});
