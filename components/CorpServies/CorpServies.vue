<template>
    <section class="corp-servies" id="corp-servies" v-if="props.data.name == 'CorpServiesCommon' && props.data.fields">
        <div class="corp-servies__container container">
            <div class="corp-servies__top">
                <h2 class="corp-servies__title title-level-2">Услуги по корпоративным спорам</h2>
                <div class="corp-servies__nav-btns">
                    <UButton variant="ghost">
                        <Icon name="custom-icons:arrow-slide-prev"></Icon>
                    </UButton>
                    <UButton variant="ghost">
                        <Icon name="custom-icons:arrow-slide-next"></Icon>
                    </UButton>
                </div>
            </div>

            <swiper-container :space-between="50" :breakpoints="{
                320: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 2,
                }
            }" class="corp-servies__swiper">
                <swiper-slide class="corp-servies__elem-swiper"
                    v-for="elem in props?.data?.fields?.corpServiesList?.nodes">
                    <NuxtLink class="corp-servies__elem" :to="elem.uri">
                        <img class="corp-servies__img" src="#" alt="#"></img>
                        <div class="corp-servies__elem-info">
                            <h3 class="corp-servies__elem-title">{{ elem.title }}</h3>
                            <p class="corp-servies__elem-descr">
                                {{ elem.pageBuilder.flexible[0].heroCustom.subtitle }}
                            </p>
                            <NuxtLink class="corp-servies__btn" :to="elem.uri">Подробнее</NuxtLink>
                        </div>

                    </NuxtLink>
                </swiper-slide>

            </swiper-container>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();

</script>

<style scoped lang="scss">
@forward './CorpServies.scss';
</style>
