<template>
    <section class="cta-2" id="cta-2" v-if="props?.data.fields">
        <div class="cta-2__container container">
            <div class="cta-2__left">
                <h2 class="cta-2__title">{{ props?.data?.fields?.title }}</h2>
                <span class="cta-2__sub-title">{{ props?.data?.fields?.subtitle }}</span>
                <div class="cta-2__descr-block" v-html="props?.data?.fields?.descr"></div>
            </div>
            <div class="cta-2__right">
                <NuxtImg class="cta-2__img" :src="props?.data?.fields.img.node.sourceUrl" :alt="props?.data?.fields?.title"></NuxtImg>
                <NuxtLink
                    class="cta-2__btn btn"
                    color="white"
                    :aria-label="props?.data?.fields?.btn.title"
                    :to="props?.data?.fields?.btn.url"
                    @click="props.data.fields.yandexMetrikaList ? includeMetrika : false"
                    >{{ props?.data?.fields?.btn.title }}</NuxtLink
                >
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
const { reachGoal } = useYandexMetrika();

function includeMetrika() {
    for (let i = 0; i < props.data.fields.yandexMetrikaList.length; i++) {
        const elem = props.data.fields.yandexMetrikaList[i];
        reachGoal(elem.name);
    }
}
</script>

<style scoped lang="scss">
@forward './CTA-2.scss';
</style>
