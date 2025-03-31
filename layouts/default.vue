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
const route = useRoute();

onMounted(() => {
    menuStore.getLayout();
});
if (route.fullPath.includes("contacts") || route.fullPath == "/") {
    useSchemaOrg([
        defineOrganization({
            url: "https://korp-konflikty.ru/",
            logo: "/favicon.ico",
            image: "/favicon.ico",
            name: "Институт Корпоративных Технологий",
            address: {
                "@type": "PostalAddress",
                addressCountry: "RU",
                postalCode: "125047",
                streetAddress: "4-й Лесной пер., д. 4, офис 532",
                addressLocality: "Москва",
            },
            telephone: "+7 928 420 78 69",
            email: "rop@iktmail.ru",
        }),
    ]);
}
</script>

<style scoped></style>
