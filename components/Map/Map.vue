<template>
    <section class="map" v-if="props?.data.name == 'MapCommon' && props?.data.fields">
        <div class="map__container container">
            <div class="map__content">
                <yandex-map v-model="map" :settings="{
                    showScaleInCopyrights: true,
                    location: {
                        center: [props?.data.fields.centerX, props?.data.fields.centerY],
                        zoom: props?.data.fields.zoom,

                    },
                }" width="100%" height="500px">
                    <yandex-map-default-marker position="top-center left-center" :settings="{
                        coordinates: [props?.data.fields.metka.centerX, props?.data.fields.metka.centerY],

                        title: props?.data.fields.metka.title,
                        subtitle: props?.data.fields.metka.descr,
                        color: props?.data.fields.metka.color,
                    }">
                    </yandex-map-default-marker>
                    <yandex-map-default-scheme-layer />
                    <yandex-map-default-features-layer />
                </yandex-map>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
import type { YMap } from '@yandex/ymaps3-types';
import {
    YandexMap,
    YandexMapDefaultFeaturesLayer,
    YandexMapDefaultMarker,
    YandexMapDefaultSchemeLayer,
} from 'vue-yandex-maps';

const map = shallowRef<null | YMap>(null);
</script>

<style scoped lang="scss">
@forward './Map.scss';
</style>
