<template>
    <section class="certificate" v-if="props?.data.fields">
        <div class="certificate__container container">
            <div class="certificate__top">
                <h2 class="certificate__title title-level-2">Наши сертификаты</h2>
                <div class="certificate__nav-btns" v-if="$viewport.isGreaterOrEquals('tablet')">
                    <UButton class="certificate__nav-btn" @click="swiper.prev()" variant="ghost"
                        icon="custom-icons:arrow-slide-prev">
                    </UButton>
                    <UButton class="certificate__nav-btn" @click="swiper.next()" variant="ghost"
                        icon="custom-icons:arrow-slide-next">
                    </UButton>
                </div>
            </div>
            <swiper-container class="certificate__swiper" ref="swiperRef" :slides-per-view="4" :breakpoints="{
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
                1920: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }">
                <swiper-slide v-for="(elem, index) in props.data.fields.listImg" :key="`certificate-${index}`">
                    <div class="certificate__elem">
                        <NuxtImg loading="lazy" :src="elem.img.node.sourceUrl"
                            @click="setDataPopup(elem.img.node.sourceUrl)" :alt="`cover-video-${index}`"></NuxtImg>
                    </div>
                </swiper-slide>

            </swiper-container>
            <div class="certificate__nav-btns" v-if="$viewport.isLessThan('tablet')">
                <UButton class="certificate__nav-btn" @click="swiper.prev()" variant="ghost"
                    icon="custom-icons:arrow-slide-prev">
                </UButton>
                <UButton class="certificate__nav-btn" @click="swiper.next()" variant="ghost"
                    icon="custom-icons:arrow-slide-next">
                </UButton>
            </div>
            <UModal v-model="activePopup" class=" certificate__modal" fullscreen :ui="{
                base: 'h-full flex flex-col',
                rounded: '',
                wrapper: 'z-[10000]',
                divide: 'divide-y divide-gray-100 dark:divide-gray-800',
                body: {
                    base: 'grow'
                }
            }">
                <UCard :ui="{
                    base: 'h-full flex flex-col',
                    rounded: '',
                    divide: 'divide-y divide-gray-100 dark:divide-gray-800',
                    body: {
                        base: 'grow'
                    }
                }">
                    <template #header>
                        <div class="flex items-center justify-between">
                            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid"
                                class="ml-auto my-1" @click="activePopup = false" />
                        </div>
                    </template>
                    <div class="certificate__elem-modal img">
                        <NuxtImg loading="lazy" :src="dataPopup" alt="cover-modal"></NuxtImg>
                    </div>
                </UCard>
            </UModal>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
const { $viewport } = useNuxtApp()
const swiperRef = ref(null);
const swiper = useSwiper(swiperRef);

const activePopup = ref(false);
const dataPopup = ref('')
function setDataPopup(e: any) {
    activePopup.value = true;
    dataPopup.value = e;
}
</script>

<style scoped lang="scss">
@forward './Certificate.scss';
</style>