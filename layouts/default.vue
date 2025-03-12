<template>
    <div class="wrapper">
        <Header></Header>
        <div class="content">
            <slot />

            <UNotifications />
        </div>
        <ModalForm v-if="menuStore.modal" v-for="form in menuStore.modal" :key="`form-${form.id}`" :data="form" />
        <Footer></Footer>
        <loader v-if="storeCommon.loader"></loader>
        <UModals />
    </div>
</template>

<script setup lang="ts">
const menuStore = useMenuStore();
const storeCommon = useCommonStore();

onMounted(() => {
    menuStore.getLayout();
});

</script>

<style scoped></style>
