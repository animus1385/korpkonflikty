<template>
    <div class="map">
        <div class="map__container container">
            <div class="map__content">
                <div id="map"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

const mapInstance = ref(null);

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
