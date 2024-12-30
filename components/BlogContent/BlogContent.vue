<template>
    <section class="blog-content" v-if="props?.data.name == 'BlogContentCustom' && props?.data.fields">
        <div v-for="dataValue in props?.data.fields.list">
            
            <div class="blog-content__container container" :id="dataValue.idBlock">
                <h2 class="blog-content__title title-level-2">{{ dataValue.title }}</h2>
                <div class="blog-content__content" v-html="dataValue.descr"></div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './BlogContent.scss';
</style>
