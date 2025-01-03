<template>
    <section class="about" is="about" v-if="props?.data.name == 'AboutCommon' || props?.data.name == 'AboutCustom' && props?.data.fields">
        <div class="about__container container">
            <h2 class="about__title title-level-2">{{ props?.data?.fields?.title }}</h2>
            <ul class="about__list">
                <li class="about__elem" v-for="elem in props?.data?.fields?.aboutList">
                    <h3 class="about__title-elem">{{ elem.title }}</h3>
                    <span class="about__text-elem">{{ elem.descr }}</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './About.scss';
</style>
