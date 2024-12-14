<template>
    <div class="hero" id="hero">
        <div class="hero__container container">
            <div class="hero__left">
                <h1 v-if="props?.data?.title" class="hero__title">{{ props?.data?.title }}</h1>
                <p v-if="props?.data?.subtitle" class="hero__descr">{{ props?.data?.subtitle }}</p>
                <NuxtLink v-if="props?.data?.btn.title && props?.data?.btn.url" class="hero__btn btn" :href="props?.data?.btn.url">{{
                    props?.data?.btn.title
                }}</NuxtLink>
            </div>
            <NuxtPicture v-if="props?.data?.img" class="hero__img" :src="props?.data?.img.node.sourceUrl" />
        </div>
        <div class="hero__info">
            <span class="hero__info-text" v-if="props?.data?.message">{{ props?.data?.message }} </span>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './Hero.scss';
</style>
