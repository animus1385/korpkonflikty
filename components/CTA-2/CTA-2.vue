<template>
    <section class="cta-2" id="cta-2" v-if="props?.data.fields">
        <div class="cta-2__container container">
            <div class="cta-2__left">
                <h2 class="cta-2__title ">{{ props?.data?.fields?.title }}</h2>
                <span class="cta-2__sub-title">{{ props?.data?.fields?.subtitle }}</span>
                <div class="cta-2__descr-block" v-html="props?.data?.fields?.descr"></div>
            </div>
            <div class="cta-2__right">
                <NuxtLink class="cta-2__btn btn" color="white" :aria-label="props?.data?.fields?.btn.title"  :to="props?.data?.fields?.btn.url">{{
                    props?.data?.fields?.btn.title }}</NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './CTA-2.scss';
</style>
