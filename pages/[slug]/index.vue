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
                        <div v-if="!elem.disableLink" class="breadcrumbs__item">
                            <NuxtLink
                                itemprop="item"
                                :to="elem.url"
                                :href="elem.url"
                                :aria-label="elem.name"
                                itemtype="https://schema.org/WebPage"
                            >
                                <span v-if="!elem.homeActive">{{ elem.name }}</span>
                                <UIcon v-else name="i-heroicons-home" class="breadcrumbs__icon" />
                                <meta itemprop="position" :content="`${index + 1}`" />
                                <meta itemprop="name" :content="elem.name" />
                            </NuxtLink>
                            <UIcon
                                v-if="index !== data.breadcrumbs.length - 1"
                                name="custom-icons:arrow-right-breadcrumbs"
                                class="breadcrumbs__icon-arrow"
                            />
                        </div>

                        <div v-else class="breadcrumbs__item" itemprop="item" :itemid="elem.url">
                            <span>{{ elem.name }}</span>
                            <meta itemprop="position" :content="`${index + 1}`" />
                            <meta itemprop="name" :content="elem.name" />
                            <UIcon
                                v-if="index !== data.breadcrumbs.length - 1"
                                name="custom-icons:arrow-right-breadcrumbs"
                                class="breadcrumbs__icon-arrow"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <Flexible v-if="status == 'success' && data" :data="data.flexible" />
</template>

<script setup lang="ts">
import type { IBlockFlexible } from "~/types/blockFlexible";

const { $api } = useNuxtApp();
const route = useRoute();
const storeCommon = useCommonStore();
const slug = route.params.slug as string;

const { data, status } = await useLazyAsyncData(
    `get-${slug}`,
    async () => {
        const flexible = await $api.getSettingsAll();
        const page = await $api.getPage(slug);
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

                return {
                    name: name,
                    fields: el[key] ? el[key] : {},
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
                flexible: difference,
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

watchEffect(() => {
    console.log(data.value?.seo);
    storeCommon.statusLoading = status.value;
});

useHead({
    title: data?.value?.seo?.title,
    meta: [
        { name: "description", content: data?.value?.seo?.metaDesc },
        { name: "robots", content: `${data?.value?.seo?.metaRobotsNofollow} ${data?.value?.seo?.metaRobotsNoindex}` },
        { name: "keywords", content: data?.value?.seo?.metaKeywords },
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
</script>
<style scoped></style>
