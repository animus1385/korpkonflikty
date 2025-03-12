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
                    >
                        <div class="breadcrumbs__item" v-if="!elem.disableLink" " :aria-label="elem.name">
                            <NuxtLink :to="elem.url">
                                <div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                    <div itemprop="item" :href="elem.url">
                                        <span itemprop="name" v-if="!elem.homeActive">{{ elem.name }}</span>
                                        <UIcon v-else name="i-heroicons-home" class="breadcrumbs__icon" />
                                    </div>
                                </div>
                                <meta itemprop="position" :content="`${index + 1}`" />
                            </NuxtLink>
                            <UIcon
                                v-if="index !== data.breadcrumbs.length - 1"
                                name="custom-icons:arrow-right-breadcrumbs"
                                class="breadcrumbs__icon-arrow"
                            />
                        </div>
                        <div v-else>
                            <div class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                <div itemprop="item" :href="elem.url">
                                    <span itemprop="name">{{ elem.name }}</span>
                                </div>
                            </div>
                            <meta itemprop="position" :content="`${index + 1}`" />
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
const breadcrumbs = ref<any>(null);

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
    storeCommon.statusLoading = status.value;
});

useHead({
    title: data?.value?.seo?.title,
    meta: [
        { name: "description", content: data?.value?.seo?.metaDesc },
        { name: "robots", content: `${data?.value?.seo?.metaRobotsNofollow} ${data?.value?.seo?.metaRobotsNoindex}` },
        { name: "keywords", content: data?.value?.seo?.metaKeywords },
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
