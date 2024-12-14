<template>
  <div class="suitable-services" id="suitable-services">
    <div class="suitable-services__container container">
      <h2 class="suitable-services__title">Подходящие услуги</h2>
      <swiper-container
        class="suitable-services__list"
        :space-between="50"
        :breakpoints="{
          320: {
            slidesPerView: 1.5,
          },
          992: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 3.5,
          },
        }"
      >
        <swiper-slide
          class="suitable-services__elem"
          v-for="elem in props.data.suitableServicesList.edges"
          :key="elem.node.id"
        >
          <NuxtLink :to="elem.node.link" class="suitable-services__elem-link">
            <h3 class="suitable-services__title-elem">{{ elem.node.title }}</h3>
            <p class="suitable-services__descr-elem">
              {{ elem.node.pageBuilder.flexible[0].heroCustom.subtitle }}
            </p>
            <UButton class="suitable-services__btn-elem btn">Перейти</UButton>
          </NuxtLink>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style lang="scss" scoped>
@forward "./SuitableServices.scss";
</style>
