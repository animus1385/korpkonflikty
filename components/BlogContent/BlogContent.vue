<template>
    <div class="blog-content" :id="props.data.idBlock" v-if="props.data">
        <div class="blog-content__container container">
            <h2 class="blog-content__title">{{ props.data.title }}</h2>
            <div class="blog-content__content" v-html="props.data.descr"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './BlogContent.scss';
</style>
