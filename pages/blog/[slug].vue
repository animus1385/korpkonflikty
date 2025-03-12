<template>
    <div
        class="breadcrumbs-block"
        v-if="data?.breadcrumbs && status == 'success' && data"
        :class="{
            HeroCustom: data?.flexible[0].name == 'HeroCustom',
        }"
    >
        <div class="container">
            <div class="breadcrumbs">
                <ul class="breadcrumbs__list" itemscope itemtype="https://schema.org/BreadcrumbList">
                    <li
                        class="breadcrumbs__elem"
                        :class="{ active: elem.url.includes(route.fullPath) }"
                        v-for="(elem, index) in data.breadcrumbs"
                        itemprop="itemListElement"
                        itemscope
                        itemtype="https://schema.org/ListItem"
                    >
                        <NuxtLink
                            itemprop="item"
                            :to="elem.url"
                            :href="elem.url"
                            class="breadcrumbs__item"
                            v-if="!elem.disableLink"
                            :aria-label="elem.name"
                        >
                            <span itemprop="name" v-if="!elem.homeActive">{{ elem.name }}</span>
                            <UIcon v-else name="i-heroicons-home" class="breadcrumbs__icon" />
                            <meta itemprop="position" :content="`${index + 1}`" />
                        </NuxtLink>
                        <div v-else>
                            <div class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                <span itemprop="name">{{ elem.name }}</span>
                                <meta itemprop="position" :content="`${index + 1}`" />
                            </div>
                        </div>
                        <UIcon
                            v-if="index !== data.breadcrumbs.length - 1"
                            name="custom-icons:arrow-right-breadcrumbs"
                            class="breadcrumbs__icon-arrow"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <HeroBlog v-if="status == 'success' && data" :data="data?.postInfo" />
    <ScharedSocial v-if="status == 'success' && data" :data="data?.postInfo.contentPost" />
    <Flexible v-if="status == 'success' && data" :data="data.flexible" />
</template>

<script setup lang="ts">
import type { IBlockFlexible } from "~/types/blockFlexible";

const route = useRoute();
const { $api } = useNuxtApp();
const storeCommon = useCommonStore();

const store = {
    blog: useBlogStore(),
};
const slug = route.params.slug as string;

const { data, status } = await useLazyAsyncData(
    "getPost",
    async () => {
        const flexible = await $api.getSettingsAll();
        const page = await $api.post.getPost(slug);
        return {
            flexible,
            page,
        };
    },
    {
        transform: (e: any) => {
            const transform = e.page.flexible.map((el: any) => {
                const name = el.fieldGroupName.replace(/(PageBuilderFlexible)(.*)(Layout)/g, "$2");
                const key = name[0].toLowerCase() + name.slice(1);

                let fields = el[key] ? el[key] : {};

                if (name == "FormCommentCommon") {
                    fields = e.page.comments;
                }
                return {
                    pageId: e.pageId,
                    name: name,
                    fields: fields,
                } as IBlockFlexible;
            });

            let difference = transform.map((x: any) => {
                const current = Object.entries(e?.flexible).find((el) => x.name.toLowerCase().includes(el[0].toLowerCase()));

                return {
                    pageId: x.pageId,
                    name: x.name,
                    fields: current ? current[1] : x.fields,
                } as IBlockFlexible;
            });
            return {
                postInfo: e.page.postInfo,
                flexible: difference,
                transform: transform,
                seo: e.page.seo,
                breadcrumbs: e.page.breadcrumbs,
            };
        },
    }
);
onMounted(() => {
    if (!data.value) {
        throw createError({
            statusCode: 404,
            statusMessage: "Страница не найдена",
            message: "Страница не найдена",
        });
    }
});

onMounted(async () => {
    await store.blog.viewPost(slug);
});
watchEffect(async () => {
    storeCommon.statusLoading = status.value;
});
useHead({
    title: data?.value?.seo?.title,
    meta: [
        { name: "description", content: data?.value?.seo?.metaDesc },
        { name: "robots", content: `${data?.value?.seo?.metaRobotsNofollow} ${data?.value?.seo?.metaRobotsNoindex}` },
        { name: "keywords", content: data?.value?.seo?.metaKeywords },
        { name: "author", content: data.value?.postInfo.contentPost?.authorPost },
        { name: "publisher", content: data.value?.postInfo.contentPost?.authorPost },
        { property: "og:url", content: data?.value?.seo?.opengraphUrl },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/favicon.ico" },
        { property: "og:title", content: data?.value?.seo?.title },
        { property: "og:site_name", content: data?.value?.seo?.opengraphSiteName },
        { property: "og:description", content: data?.value?.seo?.opengraphDescription },
    ],
    link: [
        {
            rel: "canonical",
            href: data?.value?.seo?.canonical,
        },
    ],
});
useSchemaOrg([
    defineArticle({
        publisher: {
            "@type": "Organization",
            name: data?.value?.seo?.opengraphSiteName,
            logo: "/favicon.ico",
        },
        headline: data?.value?.seo?.title,
        articleBody: data?.value?.seo?.opengraphDescription,
        mainEntityOfPage: data?.value?.seo?.opengraphUrl,
        datePublished: data?.value?.postInfo?.modified,
        image: [data?.value?.postInfo?.img],
    }),
]);
</script>
