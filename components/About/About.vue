<template>
    <div class="about" is="about">
        <div class="about__container container">
            <h2 class="about__title title-level-2">{{ props?.data?.title }}</h2>
            <ul class="about__list">
                <li class="about__elem" v-for="elem in props?.data?.aboutList">
                    <h3 class="about__title-elem">{{ elem.title }}</h3>
                    <span class="about__text-elem">{{ elem.descr }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './About.scss';
</style>
