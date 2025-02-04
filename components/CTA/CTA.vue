<template>
    <section class="cta" id="cta" v-if="props?.data.fields">
        <div class="cta__container container">
            <div class="cta__content">
                <div class="cta__left">
                    <h2 class="cta__title">{{ props?.data?.fields?.title }}</h2>
                    <p class="cta__descr">
                        {{ props?.data?.fields?.descr }}
                    </p>
                    <NuxtLink
                        :to="props?.data?.fields?.btn.url"
                        :aria-label="props?.data?.fields?.title"
                        class="cta__btn btn btn--bg"
                        @click="props.data.fields.yandexMetrikaList ? includeMetrika : false"
                        >{{ props?.data?.fields?.btn.title }}</NuxtLink
                    >
                </div>
                <NuxtImg
                    loading="lazy"
                    format="webp"
                    class="cta__img"
                    :src="props?.data?.fields.bg.node.sourceUrl"
                    :alt="props?.data?.fields?.title"
                ></NuxtImg>
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
@forward './CTA.scss';
</style>
