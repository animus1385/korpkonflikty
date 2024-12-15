<template>
  <section class="suitable-services" id="suitable-services"
    v-if="props?.data.name == 'SuitableServicesCustom' && props?.data.fields">
    <div class="suitable-services__container container">
      <h2 class="suitable-services__title title-level-2">{{ props?.data.fields.title }}</h2>
      <p>{{ props?.data.fields.descr }}</p>
      <swiper-container class="suitable-services__list" :breakpoints="{
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
      }">
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
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style lang="scss" scoped>
@forward "./SuitableServices.scss";
</style>
