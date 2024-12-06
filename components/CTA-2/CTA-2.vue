<template>
    <div class="cta-2">
        <div class="cta-2__container container">
            <div class="cta-2__left">
                <h2 class="cta-2__title ">{{ props?.data?.title }}</h2>
                <span class="cta-2__sub-title">{{ props?.data?.subtitle }}</span>
               <div class="cta-2__descr-block" v-html="props?.data?.descr"></div> 
            </div>
            <div class="cta-2__right">
                <NuxtLink class="cta-2__btn btn" color="white" :to="props?.data?.btn.url">{{ props?.data?.btn.title }}</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './CTA-2.scss';
</style>
