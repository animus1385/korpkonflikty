<template>
    <section class="cta-telegram" id="cta-telegram" v-if="props?.data.fields">
        <div class="cta-telegram__container container">
          
            <div class="cta-telegram__info">
                <div class="cta-telegram__left">
                    <h2 class="cta-telegram__title title-level-2">{{ props.data.fields.title }}</h2>
                    <p class="cta-telegram__descr">
                        {{ props.data.fields.descr }}
                    </p>
                    <NuxtLink
                        class="cta-telegram__btn btn btn--bg"
                        :aria-label="props?.data?.fields?.btn.title"
                        :to="props.data.fields.btn.url"
                        @click="props.data.fields.yandexMetrikaList ? includeMetrika : false"
                        >{{ props.data.fields.btn.title }}</NuxtLink
                    >
                </div>
                <NuxtImg loading="lazy" class="cta-telegram__img" :src="props.data.fields.img.node.sourceUrl" alt="telegram"> </NuxtImg>
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
@forward './CTA-Telegram.scss';
</style>
