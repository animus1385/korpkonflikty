<template>
    <section class="blog-content" v-if="props?.data.fields">
        <div v-for="dataValue in props?.data.fields.list">

            <div class="blog-content__container container" :id="dataValue.idBlock">
                <h2 class="blog-content__title title-level-2" v-if="dataValue.title">{{ dataValue.title }}</h2>
                <div class="blog-content__content" v-if="dataValue.descr" v-html="dataValue.descr"></div>
                <div class="blog-content__all-metric" v-if="dataValue.activeMetric">
                    <div class="blog-content__views blog-content__metric" v-if="metrics?.node?.postViews">
                        <Icon class="blog-content__icon" name="mdi:eye" />
                        <span class="blog-content__metric-text">{{ metrics?.node?.postViews }} </span>
                    </div>
                    <div class="blog-content__comments blog-content__metric" v-if="metrics?.node?.comments?.edges">
                        <Icon class="blog-content__icon" name="majesticons:comment-text" />
                        <span class="blog-content__metric-text"> {{ metrics?.node?.comments?.edges?.length }} </span>
                    </div>

                </div>
            </div>

        </div>

    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
const storeBlog = useBlogStore();
const route = useRoute();

const metrics = computed(() => storeBlog.items.find((e: any) => e.node.uri == route.fullPath))

onMounted(async () => {
    await storeBlog.getAll()
})
</script>

<style scoped lang="scss">
@forward './BlogContent.scss';
</style>
