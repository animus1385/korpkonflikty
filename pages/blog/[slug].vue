<template>
    {{ status }}
    <Flexible :data="data" />
</template>

<script setup lang="ts">
import type { IBlockFlexible } from '~/types/blockFlexible';

const { $api } = useNuxtApp();
const route = useRoute();
const slug = route.params.slug as string;

const { data, status } = useAsyncData('getPost', () => $api.post.getPost(slug), {
    transform: (e: any) => {
        const transform = e.flexible.map((el: any) => {
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
        return transform;
    },
});
</script>
<style scoped></style>
