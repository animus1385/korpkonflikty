<template>
  <div class="related-blog">
    <div class="related-blog__container container">
      <h2 class="related-blog__title">Популярные статьи по корпоративному праву</h2>
      <span class="related-blog__subtitle">Вам может понравиться</span>
      <ul class="related-blog__list">
        <li class="related-blog__elem" v-for="elem in props.data.relatedBlogList.edges" :key="elem.node.id">
          <NuxtLink :to="elem.node.uri" class="related-blog__elem-link">
            <h3 class="related-blog__title-elem">{{ elem.node.title }}</h3>
            <NuxtPicture class="related-blog__img"></NuxtPicture>
            <div class="related-blog__date">{{ elem.node.date }}</div>
            <div class="related-blog__name">{{ elem.node.author.node.name }}</div>
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/blog/" class="related-blog__btn btn">Все статьи</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward "./RelatedBlog.scss";
</style>
