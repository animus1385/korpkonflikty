<template>
    <header class="header" v-if="menuStore.items">
        <div class="header__contaniner container">
            <NuxtLink class="header__logo" to="/" aria-label="header logo" v-if="menuStore.logo">
                <NuxtPicture :src="menuStore.logo" alt="header-logo"></NuxtPicture>
            </NuxtLink>
            <nav class="header__nav">
                <ul class="header__list" v-if="menuStore.items">
                    <li class="header__elem" v-for="elem in menuStore.items" :key="elem.node.id">
                        <NuxtLink class="header__link" :to="elem.node.uri" :aria-label="elem.node.label">{{
                            elem.node.label }}</NuxtLink>
                    </li>
                </ul>
            </nav>

            <div class="header__connect">
                <NuxtLink class="header__email" v-if="menuStore.mail.url" :to="menuStore.mail.url"
                    :aria-label="menuStore.mail.title">
                    <Icon class="header__icon" name="svg:mail" />
                    <span> {{ menuStore.mail.title }}</span>
                </NuxtLink>
                <NuxtLink class="header__tel" v-if="menuStore.tel.url" :to="menuStore.tel.url"
                    :aria-label="menuStore.tel.title">
                    <Icon class="header__icon" name="svg:tel" />
                    <span>{{ menuStore.tel.title }}</span>
                </NuxtLink>
            </div>
            <ul class="header__social" v-if="menuStore.social">
                <li class="header__social-elem" v-for="elem in menuStore.social">
                    <NuxtLink :to="elem.link.url" :aria-label="elem.link.title">
                        <NuxtPicture :src="elem.img.node.sourceUrl" :alt="elem.link.title"></NuxtPicture>
                    </NuxtLink>
                </li>
            </ul>
            <NuxtLink class="header__btn-call btn" v-if="menuStore.link.url" :to="menuStore.link.url"
                :aria-label="menuStore.link.title">{{ menuStore.link.title }}</NuxtLink>
            <UButton class="header__burger" variant="ghost" size="xl" color="white"
                icon="iconamoon:menu-burger-horizontal-bold" @click="isOpen = true" />
        </div>
        <!-- <USlideover v-model="isOpen" side="left">
            <div class="p-4 flex-1">
                <UButton
                    color="gray"
                    variant="ghost"
                    size="sm"
                    icon="i-heroicons-x-mark-20-solid"
                    class="flex sm:hidden absolute end-5 top-5 z-10"
                    square
                    padded
                    @click="isOpen = false"
                />
                <Placeholder class="h-full" />
            </div>
        </USlideover> -->
    </header>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const menuStore = useMenuStore();
onMounted(() => {
    menuStore.getHeader();
});
</script>

<style scoped lang="scss">
@forward './Header.scss';
</style>
