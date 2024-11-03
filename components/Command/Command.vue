<template>
    <div class="command">
        <div class="command__container container">
            <div class="command__top">
                <div class="command__info">
                    <h2 class="command__title title-level-2">Наша команда</h2>
                    <p class="command__descr">
                        Внезапно, тщательные исследования конкурентов объединены в целые кластеры себе подобных. Противоположная точка
                        зрения.
                    </p>
                </div>
                <ul class="command__list">
                    <li class="command__elem">
                        <NuxtPicture class="command__img" src="/img/user-1.png"></NuxtPicture>
                        <h3 class="command__title-elem">Урескул Сергей</h3>
                        <p class="command__descr-elem">Генеральный директор АО “ИКТ”</p>
                    </li>
                    <li class="command__elem">
                        <NuxtPicture class="command__img" src="/img/user-2.png"></NuxtPicture>
                        <h3 class="command__title-elem">Левина Алла</h3>
                        <p class="command__descr-elem">Руководитель управления корпоративно-правовых услуг</p>
                    </li>
                </ul>
            </div>
            <Swiper class="command__swiper" :slides-per-view="5">
                <SwiperSlide>
                    <li class="command__elem">
                        <NuxtPicture class="command__img" src="/img/user-3.png"></NuxtPicture>
                        <h3 class="command__title-elem">Зинов Сергей</h3>
                        <p class="command__descr-elem">Начальник отдела сопровождения стратегических и международных проектов</p>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li class="command__elem">
                        <NuxtPicture class="command__img" src="/img/user-4.png"></NuxtPicture>
                        <h3 class="command__title-elem">Дубилина Юлия</h3>
                        <p class="command__descr-elem">Юрист</p>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li class="command__elem">
                        <NuxtPicture class="command__img" src="/img/user-5.png"></NuxtPicture>
                        <h3 class="command__title-elem">Мачихин Алексей</h3>
                        <p class="command__descr-elem">Юрист</p>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li class="command__elem">
                        <NuxtPicture class="command__img" src="/img/user-6.png"></NuxtPicture>
                        <h3 class="command__title-elem">Васильева Елизавета</h3>
                        <p class="command__descr-elem">Помощник юриста</p>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li class="command__elem">
                        <NuxtPicture class="command__img" src="/img/user-6.png"></NuxtPicture>
                        <h3 class="command__title-elem">Васильева Елизавета</h3>
                        <p class="command__descr-elem">Помощник юриста</p>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li class="command__elem">
                        <NuxtPicture class="command__img" src="/img/user-6.png"></NuxtPicture>
                        <h3 class="command__title-elem">Васильева Елизавета</h3>
                        <p class="command__descr-elem">Помощник юриста</p>
                    </li>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@forward './Command.scss';
</style>
