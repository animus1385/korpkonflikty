<template>
    <div class="rewiew">
        <div class="rewiew__container container">
            <ul class="rewiew__btn-list">
                <UButton class="rewiew__btn btn">Отзывы</UButton>
                <UButton class="rewiew__btn btn"> Видео отзывы</UButton>
            </ul>
            <swiper-container
                :slides-per-view="4"
                :breakpoints="{
                    320: {
                        slidesPerView: 2,
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
                }"
            >
                <swiper-slide>
                    <div class="rewiew__elem">
                        <Icon class="rewiew__icon" name="svg:img" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="rewiew__elem">
                        <Icon class="rewiew__icon" name="svg:img" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="rewiew__elem">
                        <Icon class="rewiew__icon" name="svg:img" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="rewiew__elem">
                        <Icon class="rewiew__icon" name="svg:img" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="rewiew__elem">
                        <Icon class="rewiew__icon" name="svg:img" />
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@forward './Rewiew.scss';
</style>
