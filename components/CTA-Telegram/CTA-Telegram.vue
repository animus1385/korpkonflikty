<template>
    <section class="cta-telegram" id="cta-telegram"
        v-if="props?.data.name == 'CtaTelegramCommon' && props?.data.fields">
        <div class="cta-telegram__container container">
            <div class="cta-telegram__left">
                <h2 class="cta-telegram__title title-level-2"> {{ props.data.fields.title }}</h2>
                <p class="cta-telegram__descr">
                    {{ props.data.fields.descr }}
                </p>
                <NuxtLink class="cta-telegram__btn btn btn--bg" :to="props.data.fields.btn.url">{{
                    props.data.fields.btn.title
                    }}</NuxtLink>
            </div>
            <NuxtImg loading="lazy" class="cta-telegram__img" :src="props.data.fields.img.node.sourceUrl"
                alt="telegram">
            </NuxtImg>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './CTA-Telegram.scss';
</style>
