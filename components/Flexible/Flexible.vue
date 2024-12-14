<template>
    <div v-if="status == 'success' && data" class="flexible">
        <img alt="big city" width="99999" height="99999"
            style="pointer-events: none; position: absolute; top: 0; left: 0; width: 99vw; height: 99vh; max-width: 100%; max-height: 99vh;"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+">
        <section v-for="section in data" class="section">
            <Hero v-if="section.name == 'HeroCustom'" :data="section.fields" />
            <Advantages v-if="section.name == 'AdvantagesCommon'" :data="section.fields" />
            <CorpServies v-if="section.name == 'CorpServiesCommon'" :data="section.fields" />
            <CostServies v-if="section.name == 'CostServiesCommon'" :data="section.fields" />
            <IncludedServies v-if="section.name == 'IncludedServiesCommon'" :data="section.fields" />
            <CTA v-if="section.name == 'CtaCommon'" :data="section.fields" />
            <About v-if="section.name == 'AboutCommon'" :data="section.fields" />
            <Command v-if="section.name == 'CommandCommon'" :data="section.fields" />
            <Clients v-if="section.name == 'ClientsCommon'" :data="section.fields" />
            <Cases v-if="section.name == 'CasesCommon'" :data="section.fields" />
            <FAQ v-if="section.name == 'FaqCommon'" :data="section.fields" />
            <CTA2 v-if="section.name == 'Cta2Common'" :data="section.fields" />
            <Rewiew v-if="section.name == 'RewiewCommon'" :data="section.fields" />
            <CTATelegram v-if="section.name == 'CtaTelegramCommon'" :data="section.fields" />
            <BlogContent v-if="section.name == 'BlogContentCustom'" v-for="dataValue in section.fields.list"
                :data="dataValue" />
            <Form1 v-if="section.name == 'Form1Common'" />
            <Form2 v-if="section.name == 'Form2Common'" />
            <FormCommnent v-if="section.name == 'FormCommentCommon'" :data="section.fields" :pageId="section?.pageId" />
            <SuitableServices v-if="section.name == 'SuitableServicesCustom'" :data="section.fields" />
            <RelatedBlog v-if="section.name == 'RelatedBlogCustom'" :data="section.fields" />
            <Map v-if="section.name == 'MapCommon'" :data="section.fields" />
            <Contacts v-if="section.name == 'ContactsCustom'" :data="section.fields" />
        </section>
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
