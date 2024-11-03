<template>
    <div class="included-servies">
        <div class="included-servies__container container">
            <h2 class="included-servies__title title-level-2">Что входит в состав услуги</h2>
            <ul class="included-servies__list">
                <li class="included-servies__elem" v-for="index in 5">
                    <div class="included-servies__icon">{{index}}</div>
                    <h3 class="included-servies__elem-title">Получение информации</h3>
                    <p class="included-servies__elem-text">
                        Получаем от вас все необходимые нам сведения о конфликте (на условиях полной конфиденциальности).
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@forward './IncludedServies.scss';
</style>
