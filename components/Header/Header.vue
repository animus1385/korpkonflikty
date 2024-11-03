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
                    <Icon class="header__icon" name="svg:whatsApp" />
                </li>
                <li class="header__social-elem">
                    <Icon class="header__icon" name="svg:youtube" />
                </li>
            </ul>
            <UButton class="header__btn-call btn">Консультация</UButton>
        </div>
    </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@forward './Header.scss';
</style>
