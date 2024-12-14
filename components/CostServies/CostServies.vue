<template>
    <div class="cost-servies" id="cost-servies" v-if="props?.data">
        <div class="cost-servies__container container">
            <div class="cost-servies__img-block">
                <NuxtPicture class="cost-servies__img-left" :src="props?.data?.img1.node.sourceUrl" alt="cost-servies-1"></NuxtPicture>
                <NuxtPicture class="cost-servies__img-right" :src="props?.data?.img2.node.sourceUrl" alt="cost-servies-2"></NuxtPicture>
            </div>
            <div class="cost-servies__info">
                <h2 class="cost-servies__title title-level-2">{{ props?.data?.title }}</h2>
                <p class="cost-servies__descr">
                    {{ props?.data?.descr }}
                </p>
                <UButton class="cost-servies__btn btn"> {{ props?.data?.btn.title }}</UButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './CostServies.scss';
</style>
