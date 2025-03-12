<template>
    <Flexible v-if="status == 'success' && data" :data="data.flexible" :status="status" />
</template>

<script setup lang="ts">
import type { IBlockFlexible } from "~/types/blockFlexible";

const { $api } = useNuxtApp();
const storeCommon = useCommonStore();

const { data, status } = await useLazyAsyncData(
    "getPage",
    async () => {
        const flexible = await $api.getSettingsAll();
        const page = await $api.getPage(`/`);
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
            };
        },
    }
);

watchEffect(() => {
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
