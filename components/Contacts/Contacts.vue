<template>
    <div class="contacts" v-if="props.data.list">
        <div class="contacts__container container">

            <h1 class="contacts__title">Контакты</h1>
            <ul class="contacts__list">
                <li class="contacts__elem" v-if="props.data.list[0].tel.url">
                    <span class="contacts__label-elem">Телефон</span>
                    <NuxtLink class="contacts__elem-text" :to="props.data.list[0].tel.url"
                        :aria-label="props.data.list[0].tel.title">{{
                        props.data.list[0].tel.title }}</NuxtLink>
                    <span>с 8.00 до 17.00 по МСК</span>
                </li>
                <li class="contacts__elem" v-if="props.data.list[0].email.url">
                    <span class="contacts__label-elem">E-mail</span>
                    <NuxtLink class="contacts__elem-text" :to="props.data.list[0].email.url"
                        :aria-label="props.data.list[0].email.title"> {{
                        props.data.list[0].email.title }}</NuxtLink>
                </li>
                <li class="contacts__elem" v-if="props.data.list[0].address.url">
                    <span class="contacts__label-elem">Адрес</span>
                    <NuxtLink class="contacts__elem-text" :to="props.data.list[0].address.url"
                        :aria-label="props.data.list[0].address.title">{{
                        props.data.list[0].address.title }}
                    </NuxtLink>
                </li>
                <li class="contacts__elem" v-if="props.data.list[0].rekvizit">
                    <span class="contacts__label-elem">Реквизиты</span>
                    <p class="contacts__elem-text">{{ props.data.list[0].rekvizit }} </p>
                </li>
                <li class="contacts__elem-social-block">
                    <div class="contacts__elem-top">
                        <span class="contacts__label-elem">Наши социальные сети</span>
                        <ul class="contacts__social" v-if="props.data.list[0].social">
                            <li class="contacts__social-elem" v-for="socialElem in props.data.list[0].social">
                                <NuxtLink :to="socialElem.link.url" :aria-label="socialElem.link.title">
                                    <NuxtPicture class="contacts__picture" :alt="socialElem.link.title"
                                        :src="socialElem.icon.node.sourceUrl" />
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="contacts__elem-bottom">
                        <span class="contacts__label-elem">Напишите нам</span>
                        <ul class="contacts__social" v-if="props.data.list[0].socialCall">
                            <li class="contacts__social-elem" v-for="socialElem in props.data.list[0].socialCall">
                                <NuxtLink :to="socialElem.link.url" :aria-label="socialElem.link.title">
                                    <NuxtPicture class="contacts__picture" :alt="socialElem.link.title"
                                        :src="socialElem.icon.node.sourceUrl" />
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './Contacts.scss';
</style>
