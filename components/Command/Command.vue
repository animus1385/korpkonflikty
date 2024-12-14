<template>
  <div class="command" id="command" v-if="props?.data.list">
    <div class="command__container container">
      <div class="command__content">
        <div class="command__top">
          <div class="command__info">
            <h2 class="command__title title-level-2">{{ props?.data?.title }}</h2>
            <p class="command__descr">
              {{ props?.data?.descr }}
            </p>
          </div>
          <ul class="command__list" v-if="isDesktop">
            <li class="command__elem" v-for="(elem, index) in props?.data?.list.slice(0, 2)"
              :key="`${elem.title}-${index}`">
              <NuxtPicture class="command__img" :src="elem.img.node.sourceUrl" :alt="elem.title"></NuxtPicture>
              <h3 class="command__title-elem">{{ elem.title }}</h3>
              <p class="command__descr-elem">{{ elem.position }}</p>
            </li>
          </ul>
        </div>
        <swiper-container class="command__swiper" :breakpoints="{
            1280: {
              slidesPerView: 3.5,
            },
            1440: {
              slidesPerView: 5,
            },
            1600: {
              slidesPerView: 5,
            },
          }" v-if="isDesktop">
          <swiper-slide v-for="(elem, index) in props?.data?.list.slice(2)" :key="`${elem.title}-${index}`">
            <div class="command__elem">
              <NuxtPicture class="command__img" :src="elem.img.node.sourceUrl" :alt="elem.title"></NuxtPicture>
              <h3 class="command__title-elem">{{ elem.title }}</h3>
              <p class="command__descr-elem">{{ elem.position }}</p>
            </div>
          </swiper-slide>
        </swiper-container>
        <ul v-else class="command__list">
          <li class="command__elem" v-for="(elem, index) in props?.data?.list" :key="`${elem.title}-${index}`">
            <NuxtPicture class="command__img" :src="elem.img.node.sourceUrl" :alt="elem.title"></NuxtPicture>
            <h3 class="command__title-elem">{{ elem.title }}</h3>
            <p class="command__descr-elem">{{ elem.position }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
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
