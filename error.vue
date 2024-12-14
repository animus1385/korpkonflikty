<template>
    <div class="wrapper">
        <Header></Header>
        <div class="block-404 content">
            <h1 class="block-404__title">{{ props?.error?.statusCode }}</h1>
            <p class="block-404__descr">{{ props?.error?.message }}</p>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
    error: Object as () => NuxtError
});
</script>

<style scoped lang="scss">
.block-404 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding-bottom: 20px;
}

.block-404__title {
    font-size: 50px;
}

.block-404__descr {
    font-size: 30px;
}
</style>
