<template>
    <div class="rewiew" id="rewiew">
        <div class="rewiew__container container">
            <ul class="rewiew__btn-list">
                <li class="rewiew__list-elem">
                    <UButton class="rewiew__btn btn">Отзывы</UButton>
                </li>
                <li class="rewiew__list-elem">
                    <UButton class="rewiew__btn btn"> Видео отзывы</UButton>
                </li>

            </ul>
            <swiper-container :slides-per-view="4" :breakpoints="{
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }">
                <swiper-slide>
                    <div class="rewiew__elem">
                        <Icon class="rewiew__icon" name="svg:img" />
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './Rewiew.scss';
</style>
