<template>
    <section class="cost-servies" id="cost-servies" v-if="props?.data.fields">
        <div class="cost-servies__container container" :class="{ reverse: props?.data?.fields.reverse }">
            <div class="cost-servies__img-block">
                <NuxtImg
                    v-if="props?.data?.fields?.img1"
                    loading="lazy"
                    format="webp"
                    class="cost-servies__img-left"
                    :src="props?.data?.fields?.img1.node.sourceUrl"
                    alt="cost-servies-1"
                ></NuxtImg>
                <NuxtImg
                    v-if="props?.data?.fields?.img2"
                    loading="lazy"
                    format="webp"
                    class="cost-servies__img-right"
                    :src="props?.data?.fields?.img2.node.sourceUrl"
                    alt="cost-servies-2"
                ></NuxtImg>
            </div>
            <div class="cost-servies__info">
                <h2 class="cost-servies__title title-level-2" v-if="props?.data?.fields?.title">{{ props?.data?.fields?.title }}</h2>
                <div class="cost-servies__descr" v-if="props?.data?.fields?.descr" v-html="props?.data?.fields?.descr"></div>
                <NuxtLink
                    v-if="props?.data?.fields?.btn.title"
                    class="cost-servies__btn btn btn--bg"
                    :aria-label="props?.data?.fields?.btn.title"
                    :to="props?.data?.fields?.btn.url"
                >
                    {{ props?.data?.fields?.btn.title }}</NuxtLink
                >
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
