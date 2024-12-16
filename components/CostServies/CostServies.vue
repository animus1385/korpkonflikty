<template>
    <section class="cost-servies" id="cost-servies"
        v-if="props?.data.name == 'CostServiesCommon' && props?.data.fields">
        <div class="cost-servies__container container">
            <div class="cost-servies__img-block">
                <NuxtImg loading="lazy" format="webp" class="cost-servies__img-left"
                    :src="props?.data?.fields?.img1.node.sourceUrl" alt="cost-servies-1"></NuxtImg>
                <NuxtImg loading="lazy" format="webp" class="cost-servies__img-right"
                    :src="props?.data?.fields?.img2.node.sourceUrl" alt="cost-servies-2"></NuxtImg>
            </div>
            <div class="cost-servies__info">
                <h2 class="cost-servies__title title-level-2">{{ props?.data?.fields?.title }}</h2>
                <p class="cost-servies__descr">
                    {{ props?.data?.fields?.descr }}
                </p>
                <UButton class="cost-servies__btn btn"> {{ props?.data?.fields?.btn.title }}</UButton>
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
