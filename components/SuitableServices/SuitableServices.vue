<template>
    <section class="suitable-services" id="suitable-services" v-if="props?.data.fields">
        <div class="suitable-services__container container">
            <div class="suitable-services__top">
                <h2 class="suitable-services__title title-level-2">{{ props?.data.fields.title }}</h2>
                <div class="suitable-services__nav-btns" v-if="$viewport.isGreaterOrEquals('tablet')">
                    <UButton
                        class="suitable-services__nav-btn"
                        @click="swiper.prev()"
                        variant="ghost"
                        icon="custom-icons:arrow-slide-prev"
                        :aria-label="`Кнопка назад для слайдера ${props?.data.fields.title}`"
                    >
                    </UButton>
                    <UButton
                        class="suitable-services__nav-btn"
                        @click="swiper.next()"
                        variant="ghost"
                        icon="custom-icons:arrow-slide-next"
                        :aria-label="`Кнопка назад для слайдера ${props?.data.fields.title}`"
                    >
                    </UButton>
                </div>
            </div>

            <p>{{ props?.data.fields.descr }}</p>
            <ClientOnly>
                <swiper-container
                    ref="swiperRef"
                    class="suitable-services__list"
                    :breakpoints="{
                        320: {
                            slidesPerView: 1.1,
                            spaceBetween: 20,
                        },
                        480: {
                            slidesPerView: 1.2,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 2.5,
                            spaceBetween: 30,
                        },
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1600: {
                            slidesPerView: 3.5,
                            spaceBetween: 30,
                        },
                    }"
                >
                    <swiper-slide
                        class="suitable-services__elem"
                        v-for="elem in props?.data?.fields.suitableServicesList.edges"
                        :key="elem.node.id"
                    >
                        <NuxtLink :to="elem.node.link" class="suitable-services__elem-link" :title="elem.node.title">
                            <h3 class="suitable-services__title-elem">{{ elem.node.title }}</h3>
                            <p class="suitable-services__descr-elem">
                                {{ elem.node.pageBuilder.flexible[0].heroCustom.subtitle }}
                            </p>
                            <UButton class="suitable-services__btn-elem btn" :aria-label="`Кнопка ${elem.node.title}`">Перейти</UButton>
                        </NuxtLink>
                    </swiper-slide>
                </swiper-container>
            </ClientOnly>
            <div class="suitable-services__nav-btns" v-if="$viewport.isLessThan('tablet')">
                <UButton
                    class="suitable-services__nav-btn"
                    @click="swiper.prev()"
                    variant="ghost"
                    :aria-label="`Кнопка назад для слайдера ${props?.data.fields.title}`"
                    icon="custom-icons:arrow-slide-prev"
                >
                </UButton>
                <UButton
                    class="suitable-services__nav-btn"
                    @click="swiper.next()"
                    variant="ghost"
                    :aria-label="`Кнопка назад для слайдера ${props?.data.fields.title}`"
                    icon="custom-icons:arrow-slide-next"
                >
                </UButton>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
const swiperRef = ref(null);
const { $viewport } = useNuxtApp();
const swiper = useSwiper(swiperRef);
</script>

<style lang="scss" scoped>
@forward './SuitableServices.scss';
</style>
