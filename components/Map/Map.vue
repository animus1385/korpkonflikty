<template>
    <section class="map" v-if="props?.data.name == 'MapCommon' && props?.data.fields">
        <div class="map__container container">
            <div class="map__content">
                <div id="map"></div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
import { onMounted } from 'vue';

onMounted(() => {
    // Инициализация карты при монтировании компонента
    if (typeof ymaps !== 'undefined') {
        ymaps.ready(() => {
            const map = new ymaps.Map('map', {
                center: [55.76, 37.64], // Москва
                zoom: 10, // Уровень приближения
                controls: [], // Убираем все элементы управления
            });
            // Добавление метки на карту
            const placemark = new ymaps.Placemark([55.76, 37.64], {
                balloonContent: 'Москва, Россия',
            });
            map.geoObjects.add(placemark);
        });
    }
});
</script>

<style scoped lang="scss">
@forward './Map.scss';
</style>
