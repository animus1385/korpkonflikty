<template>
    <section class="related-blog" id="related-blog" v-if="props?.data.fields">
        <div class="related-blog__container container">
            <h2 class="related-blog__title title-level-2">{{ props?.data.fields.title }}</h2>
            <span class="related-blog__subtitle">{{ props?.data.fields.descr }}</span>
            <ClientOnly>
                <swiper-container
                    ref="swiperRef"
                    :breakpoints="{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 1.5,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        1440: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                        1920: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }"
                    class="related-blog__swiper"
                >
                    <swiper-slide class="related-blog__elem" v-for="elem in props?.data?.fields.relatedBlogList.edges" :key="elem.node.id">
                        <NuxtLink :to="elem.node.uri" class="related-blog__elem-link" :title="elem.node.title">
                            <h3 class="related-blog__title-elem">{{ elem.node.title }}</h3>
                            <NuxtImg
                                loading="lazy"
                                format="webp"
                                class="related-blog__img"
                                :src="elem.node.featuredImage.node.sourceUrl"
                                :alt="elem.node.title"
                            >
                            </NuxtImg>
                            <div class="related-blog__date">
                                <time :datetime="dayjs(elem.node.modified).utc().toString()">
                                    {{ dayjs(elem.node.modified).format('DD.MM.YYYY') }}
                                </time>
                            </div>
                            <div class="related-blog__name">{{ elem.node.contentPost.contentPost.authorPost }}</div>
                        </NuxtLink>
                    </swiper-slide>
                </swiper-container>
            </ClientOnly>
            <div class="related-blog__nav-btns" v-if="$viewport.isLessThan('tablet')">
                <UButton
                    class="related-blog__nav-btn"
                    @click="swiper.prev()"
                    variant="ghost"
                    :aria-label="`Кнопка назад для слайдера ${props?.data.fields.title}`"
                    icon="custom-icons:arrow-slide-prev"
                >
                </UButton>
                <UButton
                    class="related-blog__nav-btn"
                    @click="swiper.next()"
                    variant="ghost"
                    :aria-label="`Кнопка назад для слайдера ${props?.data.fields.title}`"
                    icon="custom-icons:arrow-slide-next"
                >
                </UButton>
            </div>
            <NuxtLink :to="props?.data?.fields.btnBlog.url ?? /blog/" :target="props?.data?.fields.btnBlog.target" class="related-blog__btn btn btn--bg">
                <span>{{  props?.data?.fields.btnBlog.title ?? 'Все статьи' }}</span>
                <Icon name="custom-icons:arrow" />
            </NuxtLink>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
const dayjs = useDayjs();
const { $viewport } = useNuxtApp();
const swiperRef = ref(null);
const swiper = useSwiper(swiperRef);
</script>

<style scoped lang="scss">
@forward './RelatedBlog.scss';
</style>
