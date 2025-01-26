<template>
    <div
        class="breadcrumbs-block"
        v-if="breadcrumbs && status == 'success' && data"
        :class="{
            HeroCustom: data?.flexible[0].name == 'HeroCustom',
        }"
    >
        <div class="container">
            <UBreadcrumb class="breadcrumbs" :links="breadcrumbs" itemscope itemtype="http://schema.org/BreadcrumbList">
                <template #default="{ link }">
                    <div itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">{{ link.label }}</div>
                </template></UBreadcrumb
            >
        </div>
    </div>
    <Flexible v-if="status == 'success' && data" :data="data.flexible" />
</template>

<script setup lang="ts">
import type { IBlockFlexible } from '~/types/blockFlexible';

const { $api } = useNuxtApp();
const route = useRoute();
const storeCommon = useCommonStore();
const slug = route.params.slug as string;
const breadcrumbs = ref<any>(null);

const { data, status } = useLazyAsyncData(
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
                const name = el.fieldGroupName.replace(/(PageBuilderFlexible)(.*)(Layout)/g, '$2');
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
            };
        },
    }
);

watchEffect(() => {
    breadcrumbs.value = [
        {
            icon: 'i-heroicons-home',
            to: '/',
            'aria-label': 'хлебные крошки: Главная страница',
        },
        {
            label: data?.value?.seo?.title,
            'aria-label': `хлебные крошки: ${route.fullPath}`,
        },
    ];
    storeCommon.statusLoading = status.value;
});

useHead({
    title: data?.value?.seo?.title,
    meta: [
        { name: 'description', content: data?.value?.seo?.metaDesc },
        { name: 'robots', content: `${data?.value?.seo?.metaRobotsNofollow} ${data?.value?.seo?.metaRobotsNoindex}` },
        { name: 'keywords', content: data?.value?.seo?.metaKeywords },
    ],
    link: [
        {
            rel: 'canonical',
            href: data?.value?.seo?.canonical,
        },
    ],
});
</script>
<style scoped></style>
