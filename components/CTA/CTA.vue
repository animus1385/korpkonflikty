<template>
    <div class="cta">
        <div class="cta__container container">
            <NuxtPicture class="cta__img" src="/img/CTA.png"></NuxtPicture>
            <div class="cta__left">
                <h2 class="cta__title">Что вы получите в итоге</h2>
                <p class="cta__descr">
                    По итогам оказания услуги мы вместе с вами радуемся успешному завершению дела! Также АО “ИКТ” разработает для вас
                    комплекс мер, которые позволят не допустить в будущем появления очередного конфликта.
                </p>
                <UButton class="cta__btn btn">Хочу сейчас обезопасить свой бизнес</UButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@forward './CTA.scss';
</style>
