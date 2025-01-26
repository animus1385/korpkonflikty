<template>
    <section class="clients" id="clients" v-if="props?.data.fields">
        <h2 class="clients__title title-level-2">{{ props?.data?.fields?.title }}</h2>
        <ClientOnly>
            <swiper-container
                class="clients__list"
                :slides-per-view="5"
                :modules="[Autoplay]"
                :autoplay="{
                    delay: 1000,
                    disableOnInteraction: false,
                }"
                :breakpoints="{
                    320: {
                        slidesPerView: 1,
                        initialSlide: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 5,
                    },
                }"
            >
                <swiper-slide class="clients__elem" v-for="(elem, index) in props?.data?.fields?.list" :key="`clients-${index}`">
                    <div class="clients__img-block">
                        <NuxtImg loading="lazy" format="webp" class="clients__img" :src="elem.img.node.sourceUrl" :alt="`clients-${index}`">
                        </NuxtImg>
                    </div>
                </swiper-slide>
            </swiper-container>
        </ClientOnly>
    </section>
</template>

<script setup lang="ts">
import { Autoplay } from 'swiper/modules';
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './Clients.scss';
</style>
