<template>
    <div class="corp-servies">
        <div class="corp-servies__container container">
            <h2 class="corp-servies__title title-level-2">Услуги по корпоративным спорам</h2>
            <Swiper space-between="50" :slides-per-view="2" class="corp-servies__swiper">
                <SwiperSlide class="corp-servies__elem">
                    <div class="corp-servies__elem">
                        <img class="corp-servies__img" src="#"></img>
                        <div class="corp-servies__elem-info">
                            <h3 class="corp-servies__elem-title">Юрист по корпоративным спорам</h3>
                            <p class="corp-servies__elem-descr">
                                Закрепляем за вашим проектом группу юристов по корпоративному праву и смежным отраслям, которые будут
                                оказывать вам юридические услуги в области разрешения конфликтной ситуации. Рабочая группа будет
                                координировать все вопросы, связанные со спором, направлять обращения в необходимые органы и инстанции,
                                взаимодействовать со стороной оппонента и всегда оставаться на связи с вами - что важно для быстрого
                                реагирования на возможные изменения ситуации.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="corp-servies__elem">
                        <img class="corp-servies__img" src="#"></img>
                        <div class="corp-servies__elem-info">
                            <h3 class="corp-servies__elem-title">Конфликты в ООО</h3>
                            <p class="corp-servies__elem-descr">
                                Корпоративные конфликты могут привести к полному разрушению бизнеса. ООО чаще других форм страдают от споров
                                между учредителями, участниками, руководящим звеном и т.д. Вовремя выявить корпоративный конфликт и
                                среагировать на него - значит спасти компанию от убытков, остановки производства, массовых увольнений
                                сотрудников и полного разрушения. Мы успешно помогаем ООО справляться со спорами и разногласиями на самых
                                разных стадиях зарождения или течения.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="corp-servies__elem">
                        <img class="corp-servies__img" src="#"></img>
                        <div class="corp-servies__elem-info">
                            <h3 class="corp-servies__elem-title">Конфликты в ООО</h3>
                            <p class="corp-servies__elem-descr">
                                Корпоративные конфликты могут привести к полному разрушению бизнеса. ООО чаще других форм страдают от споров
                                между учредителями, участниками, руководящим звеном и т.д. Вовремя выявить корпоративный конфликт и
                                среагировать на него - значит спасти компанию от убытков, остановки производства, массовых увольнений
                                сотрудников и полного разрушения. Мы успешно помогаем ООО справляться со спорами и разногласиями на самых
                                разных стадиях зарождения или течения.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@forward './CorpServies.scss';
</style>
