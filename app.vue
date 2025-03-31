<template>
    <NuxtLayout>
        <NuxtPage></NuxtPage>
    </NuxtLayout>
</template>
<script setup lang="ts">
useSchemaOrg([
    defineWebPage({
        name: 'Институт Корпоративных Технологий',
    }),
    defineWebSite({
        name: 'Институт Корпоративных Технологий',
    }),
]);
</script>
<style></style>
