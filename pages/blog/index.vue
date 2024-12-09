<template>
  <BlogList v-if="status == 'success' && data" :data="data?.posts?.edges"></BlogList>
  <Form1 class="blog-form"></Form1>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp();
const { data, status } = useAsyncData("getAll", async () => await $api.post.getAll(), { server: false });
</script>

<style scoped lang="scss">
.blog-form {
  margin-bottom: 50px;
}
</style>
