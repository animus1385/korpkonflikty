<template>
    <section class="command" id="command" v-if="props?.data.fields">
        <div class="command__container container">
            <div class="command__content">
                <div class="command__top">
                    <div class="command__info">
                        <h2 class="command__title title-level-2">{{ props?.data?.fields?.title }}</h2>
                        <p class="command__descr">
                            {{ props?.data?.fields?.descr }}
                        </p>
                    </div>
                    <div class="command__elem" v-for="(elem, index) in props?.data?.fields?.list" :key="`${elem.title}-${index}`">
                        <NuxtImg loading="lazy" format="webp" class="command__img" :src="elem.img.node.sourceUrl" :alt="elem.title">
                        </NuxtImg>
                        <h3 class="command__title-elem">{{ elem.title }}</h3>
                        <p class="command__descr-elem">{{ elem.position }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
const isDesktop = ref(true);

const checkWindowSize = () => {
    if (typeof window !== 'undefined') {
        isDesktop.value = window.innerWidth >= 1280;
    }
};

onMounted(() => {
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', checkWindowSize);
});
</script>

<style scoped lang="scss">
@forward './Command.scss';
</style>
