import type { SitemapUrlInput } from '#sitemap/types';

export default defineSitemapEventHandler(async () => {
    const req = $fetch(process.env.PUBLIC_GRAPHQL_URL as string, {
        method: 'POST',
        body: {
            query: 'query getPage {\n  allUrls\n}',
        },
    });
    const departmentUrl = [];
    const result = await req.then((e: any) => e.data.allUrls);
    if (result) {
        result
            .filter((e: any) => e.includes('/blog'))
            .every((e: string) => {
                departmentUrl.push({
                    loc: e,
                    _sitemap: 'blog',
                });
            });
    }

    return result satisfies SitemapUrlInput[];
});
