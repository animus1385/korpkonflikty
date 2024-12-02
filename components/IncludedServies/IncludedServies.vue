<template>
    <div class="included-servies">
        <div class="included-servies__container container">
            <h2 class="included-servies__title title-level-2">{{ props.data.title }}</h2>
            <ul class="included-servies__list">
                <li class="included-servies__elem" v-for="(elem, index) in props.data.includedServiesList">
                    <div class="included-servies__icon">{{ index + 1 }}</div>
                    <h3 class="included-servies__elem-title">{{ elem.title }}</h3>
                    <p class="included-servies__elem-text">
                        {{ elem.descr }}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    data: Object,
});
</script>

<style scoped lang="scss">
@forward './IncludedServies.scss';
</style>
