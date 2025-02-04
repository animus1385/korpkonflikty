<template>
    <section class="blog-list" id="blog-list" v-if="props?.data.fields">
        <div class="blog-list__container container">
            <h1 class="blog-list__title title-level-2">Блог</h1>
            <ul class="blog-list__list">
                <li class="blog-list__elem" v-for="elem in storeBlog.items">
                    <NuxtLink :to="elem.node.uri" NuxtImg class="blog-list__image-blog"   :aria-lavel="elem.node.title">
                        <div class="blog-list__top">
                            <NuxtImg fit="fill" loading="lazy" format="webp" class="blog-list__picture"
                                :src="elem.node.featuredImage.node.sourceUrl" :alt="elem.node.title" />
                            <div class="blog-list__name-block">
                                <time :datetime="dayjs(elem.node.modified).utc().toString()"> {{
                                    dayjs(elem.node.modified).format('DD.MM.YYYY') }} </time>
                                <span class="blog-list__name">{{ elem.node.contentPost.contentPost.authorPost
                                    }}</span>
                            </div>
                            <div class="blog-list__all-metric">
                                <div class="blog-list__views blog-list__metric">
                                    <Icon class="blog-list__icon" name="mdi:eye" />
                                    <span class="blog-list__metric-text"> {{ elem.node.postViews }}</span>
                                </div>
                                <div class="blog-list__comments blog-list__metric">
                                    <Icon class="blog-list__icon" name="majesticons:comment-text" />
                                    <span class="blog-list__metric-text"> {{ elem.node.comments.edges.length
                                        }}</span>
                                </div>

                            </div>
                        </div>
                        <div class="blog-list__title-elem">{{ elem.node.title }}</div>
                    </NuxtLink>

                </li>
            </ul>
            <loader v-if="storeBlog.loader"></loader>
        </div>
        <UPagination v-if="storeBlog.items.length > storeBlog.postsPerPage" class="blog-list__pagination"
            v-model="storeBlog.page" :page-count="storeBlog.postsPerPage" :total="storeBlog.totalCount"
            @click="storeBlog.handlePageChange(storeBlog.page)" />
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
const storeBlog = useBlogStore();
const dayjs = useDayjs()
const storeCommon = useCommonStore();
storeCommon.statusLoading = 'success';
onMounted(async () => {
    await storeBlog.getAll()
})

</script>

<style scoped lang="scss">
@forward './BlogList.scss';
</style>
