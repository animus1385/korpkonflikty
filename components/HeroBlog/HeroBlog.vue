<template>
    <div class="hero-blog" id="hero-blog" v-if="props.data">
        <div class="hero-blog__container container">
            <h1 class="hero-blog__title "> {{ props.data?.title }}</h1>
            <div class="hero-blog__img-block">

                <NuxtPicture class="hero-blog__img" :src="props.data?.img" :alt="props.data?.title"></NuxtPicture>
                <div class="hero-blog__img-info">
                    <span class="hero-blog__date">{{ props.data?.date }}</span>
                    <span class="hero-blog__name"> {{ props.data?.contentPost?.authorPost }}</span>
                </div>
            </div>
            <div class="hero-blog__content">
                <h2 class="hero-blog__content-title">Содержание</h2>
                <ul class="hero-blog__list">
                    <li class="hero-blog__elem" v-for="elem in props.data?.contentPost.list">
                        <NuxtLink :to="elem.link.url"> {{ elem.link?.title }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './HeroBlog.scss';
</style>
