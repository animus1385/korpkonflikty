<template>
    <div class="wrapper">
        <Header></Header>
        <div class="block-404 content">
            <h1 class="block-404__title">{{ props?.error?.statusCode }}</h1>
            <p class="block-404__descr">{{ props?.error?.message }}</p>
            <NuxtLink to="/" class="btn btn--bg block-404__btn"> Вернуться на главную</NuxtLink>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";
const menuStore = useMenuStore();

onMounted(() => {
    menuStore.getLayout();
});
const props = defineProps({
    error: Object as () => NuxtError,
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
    font-size: 120px;
    font-weight: 600;
}

.block-404__btn {
    
}
.block-404__descr {
    font-size: 30px;
    margin-bottom: 30px;
}
</style>
