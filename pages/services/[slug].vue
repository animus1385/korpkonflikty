<template>
    <div class="breadcrumbs-block" v-if="breadcrumbs" :class="{
        'HeroCustom': data?.flexible[0].name == 'HeroCustom'
    }">
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
const breadcrumbs = ref<any>(null)
const { data, status } = useAsyncData('getService', async () => await $api.services.getService(slug), {
    server: false,
    transform: (e: any) => {
        const transform = e.flexible.map((el: any) => {
            const name = el.fieldGroupName.replace(/(PageBuilderFlexible)(.*)(Layout)/g, '$2');
            const key = name[0].toLowerCase() + name.slice(1);

            return {
                name: name,
                fields: el[key] ? el[key] : {},
            } as IBlockFlexible;
        })
        return {
            flexible: transform,
            seo: e.seo
        };
    },
});
watchEffect(() => {
    breadcrumbs.value = useBreadcrumbs(data.value?.seo?.breadcrumbs);
})
watch(() => data.value, () => {
    useHead({
        title: data?.value?.seo?.title,
        meta: [
            { name: 'description', content: data?.value?.seo?.metaDesc },
            { name: 'robots', content: `${data?.value?.seo?.metaRobotsNofollow} ${data?.value?.seo?.metaRobotsNoindex}` },
            { name: 'keywords', content: data?.value?.seo?.metaKeywords }
        ],
        link: [{
            rel: 'canonical',
            href: data?.value?.seo?.canonical
        }]
    })
})

</script>
<style scoped></style>
