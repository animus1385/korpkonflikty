<template>
    <div class="breadcrumbs-block" v-if="breadcrumbs && status == 'success' && data">
        <div class="container">
            <UBreadcrumb class="breadcrumbs" :links="breadcrumbs" itemscope itemtype="http://schema.org/BreadcrumbList">
                <template #default="{ link }">
                    <span itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">
                        {{ link.label }}
                    </span>
                </template>
            </UBreadcrumb>
        </div>
    </div>
    <HeroBlog v-if="status == 'success' && data" :data="data?.postInfo" />
    <ScharedSocial v-if="status == 'success' && data" :data="data?.postInfo.contentPost" />
    <Flexible v-if="status == 'success' && data" :data="data.flexible" />
</template>

<script setup lang="ts">
import type { IBlockFlexible } from '~/types/blockFlexible';

const route = useRoute();
const { $api } = useNuxtApp();
const storeCommon = useCommonStore();

const store = {
    blog: useBlogStore(),
};
const slug = route.params.slug as string;
const breadcrumbs = ref<any>();

const { data, status } = useAsyncData(
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
            };
        },
    }
);
onMounted(async () => {
    await store.blog.viewPost(slug);
});
watchEffect(async () => {
    storeCommon.statusLoading = status.value;
    breadcrumbs.value = [
        {
            icon: 'i-heroicons-home',
            to: '/',
            'aria-label': 'хлебные крошки: Главная страница',
        },
        {
            label: 'Блог',
            to: '/blog/',
            'aria-label': 'хлебные крошки: Блог',
        },
        {
            label: data?.value?.postInfo?.title,
            'aria-label': `хлебные крошки: ${route.fullPath}`,
        },
    ];
});
useHead({
    title: data?.value?.seo?.title,
    meta: [
        { name: 'description', content: data?.value?.seo?.metaDesc },
        { name: 'robots', content: `${data?.value?.seo?.metaRobotsNofollow} ${data?.value?.seo?.metaRobotsNoindex}` },
        { name: 'keywords', content: data?.value?.seo?.metaKeywords },
        { name: 'author', content: data.value?.postInfo.contentPost?.authorPost },
        { name: 'publisher', content: data.value?.postInfo.contentPost?.authorPost },
    ],
    link: [
        {
            rel: 'canonical',
            href: data?.value?.seo?.canonical,
        },
    ],
});
</script>
