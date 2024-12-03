<template>
    <div class="command">    
        <div class="command__container container">
            <div class="command__top">
                <div class="command__info">
                    <h2 class="command__title title-level-2"> {{ props?.data?.title }}</h2>
                    <p class="command__descr">
                    {{ props?.data?.descr }}
                    </p>
                </div>
                <ul class="command__list">
                    <li class="command__elem" v-for="(elem,index) in props?.data?.list.slice(0,2)" :key="`${elem.title}-${index}`">
                        <NuxtImg class="command__img" :src="elem.img.node.sourceUrl"></NuxtImg>
                        <h3 class="command__title-elem">{{ elem.title }}</h3>
                        <p class="command__descr-elem">{{ elem.position }}</p>
                    </li>
             
                </ul>
            </div>
            <swiper-container class="command__swiper" :slides-per-view="5">
                <swiper-slide v-for="(elem,index) in props?.data?.list.slice(2)" :key="`${elem.title}-${index}`">
                    <li class="command__elem">
                        <NuxtImg class="command__img" :src="elem.img.node.sourceUrl"></NuxtImg>
                        <h3 class="command__title-elem">{{ elem.title }}</h3>
                        <p class="command__descr-elem">{{ elem.position }}</p>
                    </li>
                </swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();

</script>

<style scoped lang="scss">
@forward './Command.scss';
</style>
