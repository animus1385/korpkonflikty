<template>
    <div class="clients">
        <div class="clients__container container">
            <h2 class="clients__title title-level-2">{{ props.data.title }}</h2>
            <swiper-container class="clients__list" :slides-per-view="5" :virtual="true">
                <swiper-slide class="clients__elem" v-for="(elem, index) in props.data.list" :key="`clients-${index}`">
                    <div class="clients__img-block">
                        <NuxtPicture class="clients__img" :src="elem.img.node.sourceUrl"></NuxtPicture>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    data: Object,
});
</script>

<style scoped lang="scss">
@forward './Clients.scss';
</style>
