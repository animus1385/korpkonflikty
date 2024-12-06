<template>
    <div class="popular-blog">
        {{ data }}
        <div class="popular-blog__container container">
            <h2 class="popular-blog__title title-level-2">Популярные статьи по корпоративному праву</h2>
            <span class="popular-blog__sub-title">Вам может понравиться</span>
            <ul class="popular-blog__list">
                <li class="popular-blog__elem">
                    <h3 class="popular-blog__elem-title">Являясь всего лишь частью общей картины, многие известные личности и.</h3>
                    <img class="popular-blog__img" src="/img/blog.png"></img>
                </li>
                <li class="popular-blog__elem">
                    <h3 class="popular-blog__elem-title">Являясь всего лишь частью общей картины, многие известные личности и.</h3>
                    <img class="popular-blog__img" src="/img/blog.png"></img>
                </li>
                <li class="popular-blog__elem">
                    <h3 class="popular-blog__elem-title">Являясь всего лишь частью общей картины, многие известные личности и.</h3>
                    <img class="popular-blog__img" src="/img/blog.png"></img>
                </li>

                <li class="popular-blog__elem">
                    <h3 class="popular-blog__elem-title">Являясь всего лишь частью общей картины, многие известные личности и.</h3>
                    <img class="popular-blog__img" src="/img/blog.png"></img>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

const { $api } = useNuxtApp();

const data = await $api.post.getPostViews('160');
const data1 = await $api.post.setPostViews('160');
</script>

<style scoped lang="scss">
@forward './PopularBlog.scss';
</style>
