<template>
    <div class="cases">
        <div class="cases__container container">
            <h2 class="cases__title title-level-2">{{ props.data.title }}</h2>
            <ul class="cases__btn-list">
                <li
                    class="cases__btn-elem"
                    v-for="(elem, index) in props.data.casesCommonList"
                    :key="`cases-btn-${index + 1}`"
                    @click="active = index"
                >
                    <UButton class="btn">Кейс {{ index + 1 }}</UButton>
                </li>
            </ul>
            <div class="info-case">
                <div class="info-case__left">
                    <h3 class="info-case__title">{{ activeCases.title }}</h3>
                    <p class="info-case__descr">
                        {{ activeCases.descr }}
                    </p>
                </div>
                <div class="info-case__right">
                    <ul class="info-case__list-deep">
                        <li class="info-case__elem-deep" v-for="(elem, index) in activeCases.elems" :key="`info-case-elem-${index}`">
                            <span class="info-case__number-deep">{{ index + 1 }}</span>
                            <div class="info-case__info-deep">
                                <h4 class="info-case__elem-title-deep">{{ elem.title }}</h4>
                                <p class="info-case__elem-descr-deep">
                                    {{ elem.descr }}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    data: Object,
});
const active = ref(0);
const activeCases = computed(() => props.data.casesCommonList[active.value]);
</script>

<style scoped lang="scss">
@forward './Cases.scss';
</style>
