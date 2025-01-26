<template>
    <section class="cases" id="cases" v-if="props?.data.fields">
        <div class="cases__container container">
            <h2 class="cases__title title-level-2">{{ props?.data?.fields?.title }}</h2>
            <ClientOnly>
                <swiper-container
                    class="cases__btn-list"
                    :breakpoints="{
                        320: {
                            slidesPerView: 2,
                        },
                        480: {
                            slidesPerView: 2.5,
                        },
                        768: {
                            slidesPerView: 3.5,
                        },
                        1024: {
                            slidesPerView: 4.5,
                        },
                        1280: {
                            slidesPerView: 6,
                        },
                    }"
                >
                    <swiper-slide
                        class="cases__btn-elem"
                        v-for="(elem, index) in props?.data?.fields?.casesCommonList"
                        :key="`cases-btn-${index + 1}`"
                        @click="active = index"
                    >
                        <UButton
                            class="btn cases__btn"
                            :aria-lavel="`Кнопка Кейс ${index + 1}`"
                            :class="{
                                'btn--dont-active': active !== index,
                            }"
                            >Кейс {{ index + 1 }}</UButton
                        >
                    </swiper-slide>
                </swiper-container>
            </ClientOnly>
            <div class="info-case">
                <div class="info-case__left">
                    <h3 class="info-case__title">{{ activeCases.title }}</h3>
                    <p class="info-case__descr">
                        {{ activeCases.descr }}
                    </p>
                </div>
                <div class="info-case__right">
                    <ul class="info-case__list-deep">
                        <li class="info-case__elem-deep" v-for="(elem, index) in activeCases.elems" :key="`info-case-elem-${index}`">
                            <span class="info-case__number-deep">{{ index + 1 }}</span>
                            <div class="info-case__info-deep">
                                <h4 class="info-case__elem-title-deep">{{ elem.title }}</h4>
                                <p class="info-case__elem-descr-deep">
                                    {{ elem.descr }}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
const active = ref(0);
const activeCases = computed(() => props?.data?.fields?.casesCommonList[active.value]);
</script>

<style scoped lang="scss">
@forward './Cases.scss';
</style>
