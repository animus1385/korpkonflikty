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
    useSchemaOrg([
        defineOrganization({
            url: menuStore.siteUrl,
            logo: "/favicon.ico",
            name: menuStore.siteName,
            address: {
                "@type": "PostalAddress",
                addressCountry: menuStore.footer.address.addressCountry,
                postalCode: menuStore.footer.address.postalCode,
                streetAddress: menuStore.footer.address.streetAddress,
                addressLocality: menuStore.footer.address.addressLocality,
            },
            telephone: menuStore.footer.tel.title,
            email: menuStore.footer.mail.title,
        }),
    ]);
});
</script>

<style scoped></style>
