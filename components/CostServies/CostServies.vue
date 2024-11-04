<template>
    <div class="cost-servies">
        <div class="cost-servies__container container">
            <div class="cost-servies__img-block">
                <img class="cost-servies__img-left" src="/img/cost-2.png"></img>
                <img class="cost-servies__img-right" src="/img/cost-1.png"></img>
            </div>
            <div class="cost-servies__info">
                <h2 class="cost-servies__title title-level-2">Стоимость услуг при корпоративных спорах</h2>
                <p class="cost-servies__descr">
                    Стоимость разрешения корпоративного конфликта всегда рассчитывается в индивидуальном порядке и зависит от многих
                    факторов: масштаб бизнеса, количество участвующих сторон, стадия спора и т.д. Пройдите небольшой тест по кнопке ниже,
                    чтобы определить стоимость услуг по разрешению конфликта в вашей ситуации!
                </p>
                <UButton class="cost-servies__btn btn">Рассчитать стоимость</UButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@forward './CostServies.scss';
</style>
