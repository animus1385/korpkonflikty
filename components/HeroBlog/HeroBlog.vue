<template>
    <section class="hero-blog" id="hero-blog" v-if="props.data">
        <div class="hero-blog__container container">
            <h1 class="hero-blog__title "> {{ props.data?.title }}</h1>
            <div class="hero-blog__img-block">

                <NuxtImg loading="lazy" format="webp" class="hero-blog__img" :src="props.data?.img"
                    :alt="props.data?.title">
                </NuxtImg>
                <div class="hero-blog__img-info">
                    <time class="hero-blog__date" :datetime="$dayjs(props.data?.date).utc().toString()"> {{
                        $dayjs(props.data?.date).format('DD.MM.YYYY') }} </time>
                    <span class="hero-blog__name"> {{ props.data?.contentPost?.authorPost }}</span>
                </div>
            </div>
            <div class="hero-blog__content">
                <h2 class="hero-blog__content-title title-level-2">Содержание</h2>
                <PerfectScrollbar class="hero-blog__scrollbar">
                    <ul class="hero-blog__list">
                        <li class="hero-blog__elem" v-for="elem in props.data?.contentPost.list">
                            <NuxtLink class="hero-blog__elem-link" :to="elem.link.url"> {{ elem.link?.title }}
                            </NuxtLink>
                        </li>
                    </ul>
                </PerfectScrollbar>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './HeroBlog.scss';
</style>
