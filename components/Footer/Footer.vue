<template>
    <footer class="footer">
        <div class="footer__container container">
            <div class="footer__top">
                <NuxtLink class="footer__logo" to="/">
                    <Icon class="footer__icon" name="svg:logo" />
                </NuxtLink>
                <ul class="footer__list">
                    <li class="footer__elem">
                        <NuxtLink class="footer__link" to="/">О нас</NuxtLink>
                    </li>
                    <li class="footer__elem">
                        <NuxtLink class="footer__link" to="/">Услуги</NuxtLink>
                    </li>
                    <li class="footer__elem">
                        <NuxtLink class="footer__link" to="/">Кейсы</NuxtLink>
                    </li>
                    <li class="footer__elem">
                        <NuxtLink class="footer__link" to="/">Вопросы</NuxtLink>
                    </li>
                    <li class="footer__elem">
                        <NuxtLink class="footer__link" to="/">Блог</NuxtLink>
                    </li>
                    <li class="footer__elem">
                        <NuxtLink class="footer__link" to="/">Контакты</NuxtLink>
                    </li>
                </ul>
                <UButton class="footer__btn-call">Оставить заявку</UButton>
                <NuxtLink class="footer__address" to="/">
                    <Icon class="footer__icon" name="svg:ping" />
                    <span> г. Москва, 4-й Лесной переулок, д. 4, офис 428</span></NuxtLink
                >
                <div class="footer__connect">
                    <NuxtLink class="footer__email" to="mailto:company@mail.ru">
                        <Icon class="footer__icon" name="svg:mail" />
                        <span> company@mail.ru</span>
                    </NuxtLink>
                    <NuxtLink class="footer__tel" to="mailto:company@mail.ru">
                        <Icon class="footer__icon" name="svg:tel" />
                        <span class="footer__tel-number">8 894 045 65 03</span>
                        <span class="footer__tel-text">с 8.00 до 17.00 по МСК</span>
                    </NuxtLink>
                </div>
                <hr class="footer__hr" />
                <span class="footer__copy">©2008-2024 Все права защищены</span>
                <NuxtLink class="footer__policy" to="/">Политика конфиденциальности</NuxtLink>

                <ul class="footer__social">
                    <li class="footer__social-elem">
                        <Icon class="footer__icon" name="svg:dzen" />
                    </li>
                    <li class="footer__social-elem">
                        <Icon class="footer__icon" name="svg:vk" />
                    </li>
                    <li class="footer__social-elem">
                        <Icon class="footer__icon" name="svg:telegram" />
                    </li>
                    <li class="footer__social-elem">
                        <Icon class="footer__icon" name="svg:whats-app" />
                    </li>
                    <li class="footer__social-elem">
                        <Icon class="footer__icon" name="svg:youtube" />
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@forward './Footer.scss';
</style>
