<template>
    <section class="related-blog" id="related-blog"
        v-if="props?.data.name == 'RelatedBlogCustom' && props?.data.fields">
        <div class="related-blog__container container">
            <h2 class="related-blog__title title-level-2"> {{ props?.data.fields.title }}</h2>
            <span class="related-blog__subtitle">{{ props?.data.fields.descr }}</span>

            <swiper-container :breakpoints="{
                320: {
                    slidesPerView: 1.1,
                    spaceBetween: 30
                },
                480: {
                    slidesPerView: 1.2,
                    spaceBetween: 30
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
            }" class="related-blog__swiper">
                <swiper-slide class="related-blog__elem" v-for="elem in props?.data?.fields.relatedBlogList.edges"
                    :key="elem.node.id">
                    <NuxtLink :to="elem.node.uri" class="related-blog__elem-link">
                        <h3 class="related-blog__title-elem">{{ elem.node.title }}</h3>
                        <NuxtPicture loading="lazy" format="webp" preload class="related-blog__img"
                            :src="elem.node.featuredImage.node.sourceUrl" :alt="elem.node.title">
                        </NuxtPicture>
                        <div class="related-blog__date"> <time :datetime="$dayjs(elem.node.date).utc().toString()"> {{
                                $dayjs(elem.node.date).format('DD.MM.YYYY') }} </time></div>
                        <div class="related-blog__name">{{ elem.node.contentPost.contentPost.authorPost }}</div>
                    </NuxtLink>
                </swiper-slide>
            </swiper-container>
            <NuxtLink to="/blog/" class="related-blog__btn btn">Все статьи</NuxtLink>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './RelatedBlog.scss';
</style>
