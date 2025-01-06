<template>

    <section class="content" v-if=" props?.data.fields">
        <div class="content__container container items-center" v-html="props?.data.fields.content">
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped></style>