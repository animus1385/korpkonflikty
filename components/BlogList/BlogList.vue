<template>
    <div class="blog-list" id="blog-list">
        <div class="blog-list__container container">
            <h1 class="blog-list__title">Блог</h1>
            <ul class="blog-list__list">
                <li class="blog-list__elem" v-for="elem in storeBlog.items">
                    <NuxtLink :to="elem.node.uri" class="blog-list__image-blog">
                        <NuxtPicture class="blog-list__picture" :src="elem.node.featuredImage.node.sourceUrl">
                        </NuxtPicture>
                        <div class="blog-list__top">
                            <div class="blog-list__name-block">
                                <span class="blog-list__date">{{ elem.node.date }}</span>
                                <span class="blog-list__name">Фамилия Имя</span>
                            </div>
                            <div class="blog-list__all-metric">
                                <span class="blog-list__like">1234</span>
                                <span class="blog-list__comments">1234</span>
                                <span class="blog-list__views">{{ elem.node.postViews }}</span>
                            </div>
                        </div>
                    </NuxtLink>
                    <div class="blog-list__title-elem">{{ elem.node.title }}</div>
                </li>
            </ul>
            <loader v-if="storeBlog.loader"></loader>
        </div>
        <UPagination class="blog-list__pagination" v-model="storeBlog.page" :page-count="storeBlog.totalPages"
            :total="storeBlog.items.length" @click="storeBlog.handlePageChange(storeBlog.page)" />
    </div>
</template>

<script setup lang="ts">
const storeBlog = useBlogStore();
const storeCommon = useCommonStore();

const { status } = useAsyncData('getListBlog', () => storeBlog.getAll(), { server: false })
watchEffect(() => {
    storeCommon.statusLoading = status.value;
})
</script>

<style scoped lang="scss">
@forward './BlogList.scss';
</style>
