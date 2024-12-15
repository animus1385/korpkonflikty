<template>
    <section class="map" v-if="props?.data.name == 'MapCommon' && props?.data.fields">
        <div class="map__container container">
            <div class="map__content">

                <yandex-map :settings="{
                    location: {
                        center: [37.617644, 55.755819],
                        zoom: 9,
                    },
                }" height="100vh">
                    <yandex-map-default-scheme-layer :settings="{ theme: 'dark' }" />
                    <yandex-map-controls :settings="{ position: 'right' }">
                        <yandex-map-zoom-control />
                    </yandex-map-controls>
                </yandex-map>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
import {
    YandexMap,
    YandexMapControls,
    YandexMapDefaultSchemeLayer,
    YandexMapZoomControl,
} from "vue-yandex-maps";
</script>

<style scoped lang="scss">
@forward './Map.scss';
</style>
