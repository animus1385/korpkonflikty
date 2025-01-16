<template>
    <div
        class="breadcrumbs-block"
        v-if="breadcrumbs"
        :class="{
            HeroCustom: data?.flexible[0].name == 'HeroCustom',
        }"
    >
        <div class="container">
            <UBreadcrumb class="breadcrumbs" :links="breadcrumbs" />
        </div>
    </div>
    <Flexible v-if="status == 'success' && data" :data="data?.flexible" />
</template>

<script setup lang="ts">
// import { useBreadcrumbs } from '~/composables/useBreadcrumbs';
import type { IBlockFlexible } from '~/types/blockFlexible';

const { $api } = useNuxtApp();
const route = useRoute();
const slug = route.params.slug as string;
const breadcrumbs = ref<any>(null);
const storeCommon = useCommonStore();
const { data, status } = await useLazyAsyncData(
    'getService',
    async () => {
        const flexible = await $api.getSettingsAll();
        const page = await $api.services.getService(slug);
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
    breadcrumbs.value = useBreadcrumbs(data.value?.seo?.breadcrumbs);
    storeCommon.statusLoading = status.value;
});
watch(
    () => data.value,
    () => {
        useSeoMeta({
            title: data?.value?.seo?.title,
            description: data?.value?.seo?.metaDesc,
            robots: `${data?.value?.seo?.metaRobotsNofollow} ${data?.value?.seo?.metaRobotsNoindex}`,
        });
        useHead({
            link: [
                {
                    rel: 'canonical',
                    href: data?.value?.seo?.canonical,
                },
            ],
        });
    }
);
</script>
<style scoped></style>
