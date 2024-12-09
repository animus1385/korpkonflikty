<template>
    <header class="header">
        <div class="header__contaniner container">
            <NuxtLink class="header__logo" to="/">
                <NuxtPicture :src="menuStore.logo"></NuxtPicture>
            </NuxtLink>
            <nav class="header__nav">
                <ul class="header__list">
                    <li class="header__elem" v-for="elem in menuStore.items" :key="elem.node.id">
                        <NuxtLink class="header__link" :to="elem.node.uri">{{ elem.node.label }}</NuxtLink>
                    </li>
                </ul>
            </nav>

            <div class="header__connect">
                <NuxtLink class="header__email" :to="menuStore.mail.url">
                    <Icon class="header__icon" name="svg:mail" />
                    <span> {{ menuStore.mail.title }}</span>
                </NuxtLink>
                <NuxtLink class="header__tel" :to="menuStore.tel.url">
                    <Icon class="header__icon" name="svg:tel" />
                    <span>{{ menuStore.tel.title }}</span>
                </NuxtLink>
            </div>
            <ul class="header__social">
                <li class="header__social-elem" v-for="elem in menuStore.social">
                    <NuxtLink :to="elem.link.url">
                        <NuxtPicture :src="elem.img.node.sourceUrl"></NuxtPicture>
                    </NuxtLink>
                </li>
            </ul>
            <NuxtLink class="header__btn-call btn" :to="menuStore.link.url">{{ menuStore.link.title }}</NuxtLink>
            <UButton
                class="header__burger"
                variant="ghost"
                size="xl"
                color="white"
                icon="iconamoon:menu-burger-horizontal-bold"
                @click="isOpen = true"
            />
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
