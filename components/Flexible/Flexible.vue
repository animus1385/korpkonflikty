<template>
    <div v-if="status == 'success' && data">
        <section v-for="section in data" class="section">
            <Hero v-if="section.name == 'HeroCustom'" :data="section.fields"></Hero>
            <Advantages v-if="section.name == 'AdvantagesCommon'" :data="section.fields"></Advantages>
            <CorpServies v-if="section.name == 'CorpServiesCommon'" :data="section.fields"></CorpServies>
            <CostServies v-if="section.name == 'CostServiesCommon'" :data="section.fields"></CostServies>
            <IncludedServies v-if="section.name == 'IncludedServiesCommon'" :data="section.fields"></IncludedServies>
            <CTA v-if="section.name == 'CtaCommon'" :data="section.fields"></CTA>
            <About v-if="section.name == 'AboutCommon'" :data="section.fields"></About>
            <Command v-if="section.name == 'CommandCommon'" :data="section.fields"></Command>
            <Clients v-if="section.name == 'ClientsCommon'" :data="section.fields"></Clients>
            <Cases v-if="section.name == 'CasesCommon'" :data="section.fields"></Cases>
            <FAQ v-if="section.name == 'FaqCommon'" :data="section.fields"></FAQ>
            <CTA2 v-if="section.name == 'Cta2Common'" :data="section.fields"></CTA2>
            <Rewiew v-if="section.name == 'RewiewCommon'" :data="section.fields"></Rewiew>
            <PopularBlog v-if="section.name == 'PopularBlogCommon'" :data="section.fields"></PopularBlog>
            <CTATelegram v-if="section.name == 'CtaTelegramCommon'" :data="section.fields"></CTATelegram>
        </section>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    data: Array,
});
const { $api } = useNuxtApp();

const { data, status } = useAsyncData('getSettingsAll', async () => await $api.getSettingsAll(), {
    transform: (e) => {
        let difference = props?.data?.map((x) => {
            const current = Object.entries(e).find((el) => x.name.toLowerCase().includes(el[0].toLowerCase()));

            return {
                name: x.name,
                fields: current ? current[1] : x.fields,
            };
        });
        return difference;
    },
});
</script>

<style scoped></style>
