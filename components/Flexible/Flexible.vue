<template>
    <div v-if="status == 'success' && data" class="flexible">
        <div v-for="section in data" class="section" :key="section.name">
            <Hero :data="section" />
            <Advantages :data="section" />
            <CorpServies :data="section" />
            <CostServies :data="section" />
            <IncludedServies :data="section" />
            <CTA :data="section" />
            <About :data="section" />
            <Command :data="section" />
            <Clients :data="section" />
            <Cases :data="section" />
            <FAQ :data="section" />
            <CTA2 :data="section" />
            <Rewiew :data="section" />
            <CTATelegram :data="section" />
            <BlogContent :data="section" />
            <Form1 :data="section" />
            <Form2 :data="section" />
            <FormCommnent :data="section" :pageId="section?.pageId" />
            <SuitableServices :data="section" />
            <RelatedBlog :data="section" />
            <Map :data="section" />
            <Contacts :data="section" />
            <BlogList :data="section" />
            <TextOpen :data="section" />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { IBlockFlexible } from '~/types/blockFlexible';

const props = defineProps<{ data: IBlockFlexible[] | null }>();
const { $api } = useNuxtApp();
const storeCommon = useCommonStore();

const { data, status } = useAsyncData('getSettingsAll', () => $api.getSettingsAll(), {
    transform: (e: any) => {
        let difference = props?.data?.map((x: any) => {
            const current = Object.entries(e).find((el) => x.name.toLowerCase().includes(el[0].toLowerCase()));

            return {
                pageId: x.pageId,
                name: x.name,
                fields: current ? current[1] : x.fields,
            } as IBlockFlexible;
        });
        return difference;
    },
    server: false,
});
watchEffect(() => {
    storeCommon.statusLoading = status.value;
})
</script>

<style scoped></style>
