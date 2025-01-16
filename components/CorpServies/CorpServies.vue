<template>
    <section class="corp-servies" id="corp-servies" v-if="props.data.fields">
        <div class="corp-servies__container container">
            <div class="corp-servies__top">
                <h2 class="corp-servies__title title-level-2">Услуги по корпоративным спорам</h2>
                <div class="corp-servies__nav-btns" v-if="$viewport.isGreaterOrEquals('tablet')">
                    <UButton
                        class="corp-servies__nav-btn"
                        @click="swiper.prev()"
                        variant="ghost"
                        aria-label="Кнопка назад для слайдера Услуги по корпоративным спорам"
                        icon="custom-icons:arrow-slide-prev"
                    >
                    </UButton>
                    <UButton
                        class="corp-servies__nav-btn"
                        @click="swiper.next()"
                        variant="ghost"
                        aria-label="Кнопка вперед для слайдера Услуги по корпоративным спорам"
                        icon="custom-icons:arrow-slide-next"
                    >
                    </UButton>
                </div>
            </div>
            <swiper-container
                ref="swiperRef"
                :space-between="50"
                :auto-height="true"
                :breakpoints="{
                    320: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                }"
                class="corp-servies__swiper"
            >
                <swiper-slide class="corp-servies__elem-swiper" v-for="elem in props?.data?.fields?.corpServiesList?.nodes" :key="elem.id">
                    <NuxtLink class="corp-servies__elem" :to="elem.uri">
                        <NuxtImg
                            v-if="elem?.featuredImage?.node?.sourceUrl"
                            class="corp-servies__img"
                            :src="elem.featuredImage.node.sourceUrl"
                            :alt="elem.title"
                        >
                        </NuxtImg>
                        <div class="corp-servies__elem-info">
                            <h3 class="corp-servies__elem-title" v-if="elem.title">{{ elem.title }}</h3>
                            <p class="corp-servies__elem-descr" v-if="elem?.pageBuilder?.flexible[0]?.heroCustom?.subtitle">
                                {{ elem.pageBuilder.flexible[0].heroCustom.subtitle }}
                            </p>
                            <NuxtLink class="corp-servies__btn" :to="elem.uri" v-if="elem?.uri">Подробнее</NuxtLink>
                        </div>
                    </NuxtLink>
                </swiper-slide>
            </swiper-container>
            <div class="corp-servies__nav-btns" v-if="$viewport.isLessThan('tablet')">
                <UButton class="corp-servies__nav-btn" @click="swiper.prev()" variant="ghost" icon="custom-icons:arrow-slide-prev">
                </UButton>
                <UButton class="corp-servies__nav-btn" @click="swiper.next()" variant="ghost" icon="custom-icons:arrow-slide-next">
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

<style scoped lang="scss">
@forward './CorpServies.scss';
</style>
