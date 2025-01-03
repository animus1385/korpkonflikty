<template>
    <section class="map" v-if="props?.data.name == 'MapCommon' || props?.data.name == 'MapCustom' && props?.data.fields">
        <div class="map__container container">
            <div class="map__content">
                <yandex-map v-model="map" :settings="{
                    location: {
                        center: [37.617644, 55.755819],
                        zoom: 9,
                    },
                }" width="100%" height="500px">
                    <yandex-map-default-scheme-layer />
                </yandex-map>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
import type { YMap } from '@yandex/ymaps3-types';
import { YandexMap, YandexMapDefaultSchemeLayer } from 'vue-yandex-maps';

const map = shallowRef<null | YMap>(null);
</script>

<style scoped lang="scss">
@forward './Map.scss';
</style>
