<template>
    <div class="hero">
        <NuxtPicture class="hero__img" src="/img/hero-1.png"></NuxtPicture>
        <div class="hero__container container">
            <div class="hero__left">
                <h1 class="hero__title">Корпоративные споры и конфликты</h1>
                <p class="hero__descr">Разрешение конфликтных ситуаций любой сложности под ключ с гарантией конфиденциальности.</p>
                <UButton class="hero__btn btn">Запись на консультацию</UButton>
            </div>
            <div class="hero__info">
                <span class="hero__info-text">Спасли бизнес и репутацию 100% своих клиентов! </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@forward './Hero.scss';
</style>
