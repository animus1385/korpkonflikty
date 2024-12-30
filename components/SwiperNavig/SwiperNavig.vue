<template>
    <div class="SwiperNavig">
        <button class="btn" @click="swiper.slidePrev()">
            <Icon name="custom-icons:arrow" />
        </button>
        <button class="btn" @click="swiper.slideNext()">
            <Icon name="custom-icons:arrow" />
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({ data: Object  })
const swiper = useSwiper(props?.data as any);
</script>

<style scoped></style>