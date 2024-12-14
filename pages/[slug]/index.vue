<template>
    <Flexible v-if="status == 'success' && data" :data="data" />
</template>

<script setup lang="ts">
import type { IBlockFlexible } from '~/types/blockFlexible';

const { $api } = useNuxtApp();
const route = useRoute();
const storeCommon = useCommonStore();
const slug = route.params.slug as string;

const { data, status } = useAsyncData(`get-${slug}`, () => $api.getPage(slug), {
    server: false,
    transform: (e) => {
        const transform = e.map((el: any) => {
            const name = el.fieldGroupName.replace(/(PageBuilderFlexible)(.*)(Layout)/g, '$2');
            const key = name[0].toLowerCase() + name.slice(1);

            return {
                name: name,
                fields: el[key] ? el[key] : {},
            } as IBlockFlexible;
        });
        return transform;
    },
});
watchEffect(() => {
    storeCommon.statusLoading = status.value;
})
</script>
<style scoped></style>
