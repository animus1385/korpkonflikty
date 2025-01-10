<template>
    <section class="rewiew" id="rewiew" v-if="props?.data.fields">
        <div class="rewiew__container container">
            <div class="rewiew__top">
                <ul class="rewiew__btn-list">
                    <li class="rewiew__list-elem">
                        <UButton class="rewiew__btn btn" :class="{
                            'btn--dont-active': activeBtn == 'video'
                        }" @click="activeBtn = 'img'">Отзывы</UButton>
                    </li>
                    <li class="rewiew__list-elem">
                        <UButton class="rewiew__btn btn" :class="{
                            'btn--dont-active': activeBtn == 'img'
                        }" @click="activeBtn = 'video'"> Видео отзывы</UButton>
                    </li>
                </ul>
                <div class="rewiew__nav-btns" v-if="$viewport.isGreaterOrEquals('tablet')">
                    <UButton class="rewiew__nav-btn" @click="swiper.prev()" variant="ghost"
                        icon="custom-icons:arrow-slide-prev">
                    </UButton>
                    <UButton class="rewiew__nav-btn" @click="swiper.next()" variant="ghost"
                        icon="custom-icons:arrow-slide-next">
                    </UButton>
                </div>
            </div>
            <swiper-container class="rewiew__swiper" ref="swiperReviewRef" v-if="activeBtn == 'img'"
                :slides-per-view="4" :breakpoints="{
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }">
                <swiper-slide v-for="(elem, index) in props.data.fields.listImg" :key="elem.img.node.id">
                    <div class="rewiew__elem">
                        <NuxtImg loading="lazy" :src="elem.img.node.sourceUrl" @click="setDataPopup({
                            type: activeBtn,
                            value: elem.img.node.sourceUrl
                        })" :alt="`cover-img-${index}`"></NuxtImg>
                    </div>
                </swiper-slide>
            </swiper-container>
            <swiper-container class="rewiew__swiper" ref="swiperVideoRef" v-if="activeBtn == 'video'"
                :slides-per-view="4" :breakpoints="{
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
                <swiper-slide v-for="(elem, index) in props.data.fields.listVideo" :key="`video-review-${index}`">
                    <div class="rewiew__elem">
                        <NuxtImg loading="lazy" :src="elem.cover.node.sourceUrl" @click="setDataPopup({
                            type: activeBtn,
                            value: elem.videoElem
                        })" :alt="`cover-video-${index}`"></NuxtImg>
                    </div>
                </swiper-slide>

            </swiper-container>
            <div class="rewiew__nav-btns" v-if="$viewport.isLessThan('tablet')">
                <UButton class="rewiew__nav-btn" @click="swiper.prev()" variant="ghost"
                    icon="custom-icons:arrow-slide-prev">
                </UButton>
                <UButton class="rewiew__nav-btn" @click="swiper.next()" variant="ghost"
                    icon="custom-icons:arrow-slide-next">
                </UButton>
            </div>
            <UModal v-model="activePopup" class=" rewiew__modal" fullscreen :ui="{
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
                    <div class="rewiew__elem-modal img" v-if="dataPopup.type == 'img'">
                        <NuxtImg loading="lazy" :src="dataPopup.value" alt="cover-modal"></NuxtImg>
                    </div>
                    <div class="rewiew__elem-modal video" v-if="dataPopup.type == 'video'">
                        <div v-html="dataPopup.value"> </div>
                    </div>
                </UCard>
            </UModal>
        </div>

    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
const swiperReviewRef = ref(null);
const swiperVideoRef = ref(null);
const activeBtn = ref('img');
const { $viewport } = useNuxtApp()
const swiper = computed(() => activeBtn.value == 'img' ? useSwiper(swiperReviewRef) : useSwiper(swiperVideoRef))

const activePopup = ref(false);
const dataPopup = ref({
    type: '',
    value: ''
})
function setDataPopup(e: any) {
    activePopup.value = true;
    dataPopup.value = e;
}
</script>

<style scoped lang="scss">
@forward './Rewiew.scss';
</style>
