<template>
  <section class="suitable-services" id="suitable-services"
    v-if="props?.data.name == 'SuitableServicesCustom' && props?.data.fields">
    <div class="suitable-services__container container">
      <div class="suitable-services__top">
        <h2 class="suitable-services__title title-level-2">{{ props?.data.fields.title }}</h2>
        <div class="suitable-services__nav-btns" v-if="$viewport.isGreaterOrEquals('tablet')">
          <UButton class="suitable-services__nav-btn" @click="swiper.prev()" variant="ghost"
            icon="custom-icons:arrow-slide-prev">
          </UButton>
          <UButton class="suitable-services__nav-btn" @click="swiper.next()" variant="ghost"
            icon="custom-icons:arrow-slide-next">
          </UButton>
        </div>
      </div>

      <p>{{ props?.data.fields.descr }}</p>
      <swiper-container ref="swiperRef" class="suitable-services__list" :breakpoints="{
        320: {
          slidesPerView: 1.1,
          spaceBetween: 30
        },
        480: {
          slidesPerView: 1.2,
          spaceBetween: 30
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 50
        },
        1440: {
          slidesPerView: 3.5,
          spaceBetween: 50
        },
      }" :auto-height="true">
        <swiper-slide class="suitable-services__elem" v-for="elem in props?.data?.fields.suitableServicesList.edges"
          :key="elem.node.id">
          <NuxtLink :to="elem.node.link" class="suitable-services__elem-link">
            <h3 class="suitable-services__title-elem">{{ elem.node.title }}</h3>
            <p class="suitable-services__descr-elem">
              {{ elem.node.pageBuilder.flexible[0].heroCustom.subtitle }}
            </p>
            <UButton class="suitable-services__btn-elem btn">Перейти</UButton>
          </NuxtLink>
        </swiper-slide>
      </swiper-container>
      <div class="suitable-services__nav-btns" v-if="$viewport.isLessThan('tablet')">
        <UButton class="suitable-services__nav-btn" @click="swiper.prev()" variant="ghost"
          icon="custom-icons:arrow-slide-prev">
        </UButton>
        <UButton class="suitable-services__nav-btn" @click="swiper.next()" variant="ghost"
          icon="custom-icons:arrow-slide-next">
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
const swiperRef = ref(null);
const { $viewport } = useNuxtApp()
const swiper = useSwiper(swiperRef);
</script>

<style lang="scss" scoped>
@forward "./SuitableServices.scss";
</style>
