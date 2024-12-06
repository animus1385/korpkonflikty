<template>
    <header class="header">
        <div class="header__contaniner container">
            <NuxtLink class="header__logo" to="/">
                <Icon class="header__icon" name="svg:logo" />
            </NuxtLink>
            <nav class="header__nav">
                <ul class="header__list">
                    <li class="header__elem">
                        <NuxtLink class="header__link" to="/">О нас</NuxtLink>
                    </li>
                    <li class="header__elem">
                        <NuxtLink class="header__link" to="/">Услуги</NuxtLink>
                    </li>
                    <li class="header__elem">
                        <NuxtLink class="header__link" to="/">Кейсы</NuxtLink>
                    </li>
                    <li class="header__elem">
                        <NuxtLink class="header__link" to="/">Вопросы</NuxtLink>
                    </li>
                    <li class="header__elem">
                        <NuxtLink class="header__link" to="/">Блог</NuxtLink>
                    </li>
                    <li class="header__elem">
                        <NuxtLink class="header__link" to="/">Контакты</NuxtLink>
                    </li>
                </ul>
            </nav>

            <div class="header__connect">
                <NuxtLink class="header__email" to="mailto:company@mail.ru">
                    <Icon class="header__icon" name="svg:mail" />
                    <span> company@mail.ru</span>
                </NuxtLink>
                <NuxtLink class="header__tel" to="mailto:company@mail.ru">
                    <Icon class="header__icon" name="svg:tel" />
                    <span>8 894 045 65 03</span>
                </NuxtLink>
            </div>
            <ul class="header__social">
                <li class="header__social-elem">
                    <Icon class="header__icon" name="svg:dzen" />
                </li>
                <li class="header__social-elem">
                    <Icon class="header__icon" name="svg:vk" />
                </li>
                <li class="header__social-elem">
                    <Icon class="header__icon" name="svg:telegram" />
                </li>
                <li class="header__social-elem">
                    <Icon class="header__icon" name="svg:whats-app" />
                </li>
                <li class="header__social-elem">
                    <Icon class="header__icon" name="svg:youtube" />
                </li>
            </ul>
            <UButton class="header__btn-call btn">Консультация</UButton>
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
</script>

<style scoped lang="scss">
@forward './Header.scss';
</style>
