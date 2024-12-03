<template>
    <Flexible :data="data" />
</template>

<script setup lang="ts">
import type { IBlockFlexible } from '~/types/blockFlexible';

const { $api } = useNuxtApp();

const { data, status } = useAsyncData('getPage', async () => await $api.getPage('141'), {
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
</script>
<style scoped></style>
