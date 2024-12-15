<template>
    <section class="hero" id="hero" v-if="props.data.name == 'HeroCustom' && props.data.fields">
        <div class="hero__container container">
            <div class="hero__left">
                <h1 v-if="props?.data?.fields?.title" class="hero__title">{{ props?.data?.fields?.title }}</h1>
                <p v-if="props?.data?.fields?.subtitle" class="hero__descr">{{ props?.data?.fields?.subtitle }}</p>
                <NuxtLink v-if="props?.data?.fields?.btn.title && props?.data?.fields?.btn.url" class="hero__btn btn"
                    :href="props?.data?.fields?.btn.url">{{
                    props?.data?.fields?.btn.title
                    }}</NuxtLink>
            </div>
            <NuxtPicture loading="lazy" format="webp" preload v-if="props?.data?.fields?.img" class="hero__img"
                :src="props?.data?.fields?.img.node.sourceUrl" :alt="props?.data?.fields?.title" />
        </div>
        <div class="hero__info">
            <span class="hero__info-text" v-if="props?.data?.fields?.message">{{ props?.data?.fields?.message }} </span>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './Hero.scss';
</style>
