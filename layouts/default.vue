<template>
    <div>
        <Header></Header>
        <div class="flex flex-col">
            <slot />
            <loader></loader>
            <UNotifications />
        </div>

        <Footer></Footer>

    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
