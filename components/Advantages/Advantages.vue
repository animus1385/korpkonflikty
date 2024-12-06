<template>
    <div class="advantages">
        <div class="advantages__container container">
            <h2 class="advantages__title title-level-2">{{ props?.data?.title }}</h2>
            <ul class="advantages__list">
                <div class="advantages__elem" v-for="elem in props?.data?.advantagesList">
                    <NuxtPicture class="advantages__img" :src="elem.icon.node.sourceUrl"></NuxtPicture>
                    <div class="advantages__info-elem">
                        <h3 class="advantages__elem-title">{{ elem.title }}</h3>
                        <p class="advantages__elem-text">{{ elem.subtitle }}</p>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './Advantages.scss';
</style>
