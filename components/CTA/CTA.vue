<template>
    <div class="cta">
        <div class="cta__container container">
            <img class="cta__img" src="/img/CTA.png"></img>
            <div class="cta__left">
                <h2 class="cta__title">{{ props.data.title }}</h2>
                <p class="cta__descr">
                    {{ props.data.descr }}
                </p>
                <NuxtLink :to="props.data.btn.url" class="cta__btn btn">{{ props.data.btn.title }}</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    data: Object,
});

</script>

<style scoped lang="scss">
@forward './CTA.scss';
</style>
