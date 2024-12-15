<template>
    <section class="text-open"
        v-if="(props?.data.name == 'TextOpenCommon' || props?.data.name == 'TextOpenCustom') && props?.data.fields">
        <div class="text-open__container container">
            <h2 class="text-open__title title-level-2">{{ props.data.fields.title }}</h2>
            <div class="text-open__content">
                <div class="text-open__descr-block" :class="{
                    active: active
                }" v-html="props.data.fields.descr"></div>
                <UButton v-if="!active" class="text-open__btn btn" @click="active = true">Показать ещё</UButton>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
const active = ref(false);
</script>

<style scoped lang="scss">
@forward './TextOpen.scss';
</style>