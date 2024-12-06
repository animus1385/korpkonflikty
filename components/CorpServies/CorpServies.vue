<template>
    <div class="corp-servies">
        <div class="corp-servies__container container">
            <h2 class="corp-servies__title title-level-2">Услуги по корпоративным спорам</h2>
            <swiper-container 
            :space-between="50" 
            :breakpoints="{
                320: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 2,
                }
            }"  
            class="corp-servies__swiper"
            >
                <swiper-slide class="corp-servies__elem" v-for="elem in props?.data?.corpServiesList.nodes">
                    <div class="corp-servies__elem">
                        <img class="corp-servies__img" src="#"></img>
                        <div class="corp-servies__elem-info">
                            <h3 class="corp-servies__elem-title">{{ elem.title }}</h3>
                            <p class="corp-servies__elem-descr">
                               {{ elem.pageBuilder.flexible[0].heroCustom.subtitle }}
                            </p>
                             <NuxtLink class="corp-servies__btn" :to="elem.uri">Подробнее</NuxtLink>
                        </div>
                       
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
@forward './CorpServies.scss';
</style>
