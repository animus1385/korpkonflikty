<template>
    <div class="clients">
        <h2 class="clients__title title-level-2">{{ props?.data?.title }}</h2>
        <swiper-container
            class="clients__list"
            :slides-per-view="5"
            :loop="true"
            :breakpoints="{
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 5,
                },
            }"
        >
            <swiper-slide class="clients__elem" v-for="(elem, index) in props?.data?.list" :key="`clients-${index}`">
                <div class="clients__img-block">
                    <NuxtPicture class="clients__img" :src="elem.img.node.sourceUrl"></NuxtPicture>
                </div>
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './Clients.scss';
</style>
