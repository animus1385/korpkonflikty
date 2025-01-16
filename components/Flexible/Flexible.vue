<template>
    <div v-if="storeCommon.statusLoading == 'success' && props.data" class="flexible">
        <div v-for="section in data" class="section" :key="section.name">
            <Hero v-if="section.name == 'HeroCustom'" :data="section" />
            <Advantages v-if="section.name == 'AdvantagesCommon' || section.name == 'AdvantagesCustom'" :data="section" />
            <CorpServies v-if="section.name == 'CorpServiesCommon' || section.name == 'CorpServiesCustom'" :data="section" />
            <CostServies v-if="section.name == 'CostServiesCommon' || section.name == 'CostServiesCustom'" :data="section" />
            <IncludedServies v-if="section.name == 'IncludedServiesCommon' || section.name == 'IncludedServiesCustom'" :data="section" />
            <CTA v-if="section.name == 'CtaCommon' || section.name == 'CtaCustom'" :data="section" />
            <About v-if="section.name == 'AboutCommon' || section.name == 'AboutCustom'" :data="section" />
            <Command v-if="section.name == 'CommandCommon' || section.name == 'CommandCustom'" :data="section" />
            <Clients v-if="section.name == 'ClientsCommon' || section.name == 'ClientsCustom'" :data="section" />
            <Cases v-if="section.name == 'CasesCommon' || section.name == 'CasesCustom'" :data="section" />
            <FAQ v-if="section.name == 'FaqCommon' || section.name == 'FaqCustom'" :data="section" />
            <CTA2 v-if="section.name == 'Cta2Common' || section.name == 'Cta2Custom'" :data="section" />
            <Rewiew v-if="section.name == 'RewiewCommon' || section.name == 'RewiewCustom'" :data="section" />
            <Certificate v-if="section.name == 'SertificateCommon'" :data="section" />
            <CTATelegram v-if="section.name == 'CtaTelegramCommon' || section.name == 'CtaTelegramCustom'" :data="section" />
            <BlogContent v-if="section.name == 'BlogContentCustom'" :data="section" />
            <Form1 v-if="section.name == 'Form1Custom'" :data="section" />
            <Form2 v-if="section.name == 'Form2Custom'" :data="section" />
            <FormCommnent v-if="section.name == 'FormCommentCommon'" :data="section" :pageId="section?.pageId" />
            <SuitableServices v-if="section.name == 'SuitableServicesCustom'" :data="section" />
            <RelatedBlog v-if="section.name == 'RelatedBlogCustom'" :data="section" />
            <Map v-if="section.name == 'MapCommon'" :data="section" />
            <Contacts v-if="section.name == 'ContactsCustom'" :data="section" />
            <BlogList v-if="section.name == 'BlogListCommon'" :data="section" />
            <TextOpen v-if="section.name == 'TextOpenCommon' || section.name == 'TextOpenCustom'" :data="section" />
            <Content v-if="section.name == 'ContentCustom'" :data="section" />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { IBlockFlexible } from '~/types/blockFlexible';

const props = defineProps<{ data: IBlockFlexible[] | null }>();

const storeCommon = useCommonStore();
</script>

<style scoped></style>
