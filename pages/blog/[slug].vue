<template>
    <div class="breadcrumbs-block" v-if="breadcrumbs">
        <div class="container">
            <UBreadcrumb class="breadcrumbs" :links="breadcrumbs" />
        </div>
    </div>
    <HeroBlog :data="data?.postInfo" />
    <ScharedSocial :data="data?.postInfo.contentPost" />
    <Flexible v-if="status == 'success' && data" :data="data.flexible" />
</template>

<script setup lang="ts">
import { useBreadcrumbs } from '~/composables/useBreadcrumbs';
import type { IBlockFlexible } from '~/types/blockFlexible';

const route = useRoute();
const { $api } = useNuxtApp();
const storeCommon = useCommonStore();

const store = {
    blog: useBlogStore(),
};
const slug = route.params.slug as string;
const breadcrumbs = ref<any>(null);

const { data, status } = await useLazyAsyncData(
    'getPost',
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
                const name = el.fieldGroupName.replace(/(PageBuilderFlexible)(.*)(Layout)/g, '$2');
                const key = name[0].toLowerCase() + name.slice(1);

                let fields = el[key] ? el[key] : {};
                if (name == 'FormCommentCommon') {
                    fields = e.comments;
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
            };
        },
    }
);
onMounted(async () => {
    await store.blog.viewPost(slug);
});
watchEffect(async () => {
    breadcrumbs.value = useBreadcrumbs(data.value?.seo?.breadcrumbs);
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
