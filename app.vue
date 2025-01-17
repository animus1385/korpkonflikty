<template>
    <NuxtLayout>
        <NuxtPage></NuxtPage>
    </NuxtLayout>
</template>
<script setup lang="ts">
useSchemaOrg([
    defineWebPage({
        name: 'Корпоративные кофликты',
    }),
    defineWebSite({
        name: 'Корпоративные кофликты',
    }),
    defineOrganization({
        name: 'TechCorp Solutions',
    }),
]);
</script>
<style></style>
