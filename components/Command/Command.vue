<template>
  <section class="command" id="command" v-if="props?.data.name == 'CommandCommon' || props?.data.name == 'CommandCustom' && props?.data.fields">
    <div class="command__container container">
      <div class="command__content">
        <div class="command__top">
          <div class="command__info">
            <h2 class="command__title title-level-2">{{ props?.data?.fields?.title }}</h2>
            <p class="command__descr">
              {{ props?.data?.fields?.descr }}
            </p>
          </div>
          <ul class="command__list" v-if="isDesktop">
            <li class="command__elem" v-for="(elem, index) in props?.data?.fields?.list.slice(0, 2)"
              :key="`${elem.title}-${index}`">
              <NuxtImg loading="lazy" format="webp" class="command__img" :src="elem.img.node.sourceUrl"
                :alt="elem.title">
              </NuxtImg>
              <h3 class="command__title-elem">{{ elem.title }}</h3>
              <p class="command__descr-elem">{{ elem.position }}</p>
            </li>
          </ul>
        </div>
        <swiper-container class="command__swiper" :breakpoints="{
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3.5,
          },
          1440: {
            slidesPerView: 4,
          },
          1500: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 4.5,
          },
          1920: {
            slidesPerView: 5.6,
          },
        }" v-if="isDesktop">
          <swiper-slide v-for="(elem, index) in props?.data?.fields?.list.slice(2)" :key="`${elem.title}-${index}`">
            <div class="command__elem">
              <NuxtImg loading="lazy" format="webp" class="command__img" :src="elem.img.node.sourceUrl"
                :alt="elem.title">
              </NuxtImg>
              <h3 class="command__title-elem">{{ elem.title }}</h3>
              <p class="command__descr-elem">{{ elem.position }}</p>
            </div>
          </swiper-slide>
        </swiper-container>
        <ul v-else class="command__list">
          <li class="command__elem" v-for="(elem, index) in props?.data?.fields?.list" :key="`${elem.title}-${index}`">
            <NuxtImg loading="lazy" format="webp" class="command__img" :src="elem.img.node.sourceUrl" :alt="elem.title">
            </NuxtImg>
            <h3 class="command__title-elem">{{ elem.title }}</h3>
            <p class="command__descr-elem">{{ elem.position }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
const isDesktop = ref(true);

const checkWindowSize = () => {
  if (typeof window !== "undefined") {
    isDesktop.value = window.innerWidth >= 1280;
  }
};

onMounted(() => {
  checkWindowSize();
  window.addEventListener("resize", checkWindowSize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkWindowSize);
});
</script>

<style scoped lang="scss">
@forward "./Command.scss";
</style>
