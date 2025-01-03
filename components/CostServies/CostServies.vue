<template>
    <section class="cost-servies" id="cost-servies"
        v-if="props?.data.name == 'CostServiesCommon' || props?.data.name == 'CostServiesCustom' && props?.data.fields">
        <div class="cost-servies__container container" :class="{ reverse: props?.data?.fields.reverse }">
            <div class="cost-servies__img-block">
                <NuxtImg loading="lazy" format="webp" class="cost-servies__img-left"
                    :src="props?.data?.fields?.img1.node.sourceUrl" alt="cost-servies-1"></NuxtImg>
                <NuxtImg loading="lazy" format="webp" class="cost-servies__img-right"
                    :src="props?.data?.fields?.img2.node.sourceUrl" alt="cost-servies-2"></NuxtImg>
            </div>
            <div class="cost-servies__info">
                <h2 class="cost-servies__title title-level-2">{{ props?.data?.fields?.title }}</h2>
                <div class="cost-servies__descr" v-html="props?.data?.fields?.descr">
                </div>
                <NuxtLink class="cost-servies__btn btn btn--bg" :to="props?.data?.fields?.btn.url"> {{
                    props?.data?.fields?.btn.title }}</NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './CostServies.scss';
</style>
