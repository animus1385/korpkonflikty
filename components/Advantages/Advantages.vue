<template>
    <section class="advantages" id="advantages" v-if="props.data.name == 'AdvantagesCommon' && props.data.fields">
        <div class="advantages__container container">
            <h2 class="advantages__title title-level-2">{{ props?.data?.fields?.title }}</h2>
            <ul class="advantages__list">
                <li class="advantages__elem" v-for="elem in props?.data?.fields?.advantagesList">
                    <NuxtPicture loading="lazy" format="webp" class="advantages__img" :src="elem.icon.node.sourceUrl"
                        :alt="props?.data?.fields?.title">
                    </NuxtPicture>
                    <div class="advantages__info-elem">
                        <h3 class="advantages__elem-title">{{ elem.title }}</h3>
                        <p class="advantages__elem-text">{{ elem.subtitle }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './Advantages.scss';
</style>
