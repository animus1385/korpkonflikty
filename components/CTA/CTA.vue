<template>
    <section class="cta" id="cta" v-if="props?.data.name == 'CtaCommon' || props?.data.name == 'CtaCustom' && props?.data.fields">
        <div class="cta__container container">
            <div class="cta__content">
                <NuxtImg loading="lazy" format="webp" class="cta__img" :src="props?.data?.fields.bg.node.sourceUrl"
                    :alt="props?.data?.fields?.title"></NuxtImg>
                <div class="cta__left">
                    <h2 class="cta__title">{{ props?.data?.fields?.title }}</h2>
                    <p class="cta__descr">
                        {{ props?.data?.fields?.descr }}
                    </p>
                    <NuxtLink :to="props?.data?.fields?.btn.url" class="cta__btn btn btn--bg">{{ props?.data?.fields?.btn.title
                        }}</NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './CTA.scss';
</style>
