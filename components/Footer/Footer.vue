<template>
    <footer class="footer">
        <div class="footer__container container">
            <div class="footer__top">
                <NuxtLink class="footer__logo" to="/">
                    <NuxtPicture :src="menuStore.footer.logo"></NuxtPicture>
                </NuxtLink>
                <ul class="footer__list">
                    <li class="footer__elem" v-for="elem in menuStore.footer.items" :key="elem.node.id">
                        <NuxtLink class="footer__link" :to="elem.node.uri"> {{ elem.node.label }}</NuxtLink>
                    </li>
                </ul>
                <UButton class="footer__btn-call">Оставить заявку</UButton>
                <NuxtLink class="footer__address" :to="menuStore.footer.address.url">
                    <Icon class="footer__icon" name="svg:ping" />
                    <span> {{ menuStore.footer.address.title }}</span></NuxtLink
                >
                <div class="footer__connect">
                    <NuxtLink class="footer__email" :to="menuStore.footer.mail.url">
                        <Icon class="footer__icon" name="svg:mail" />
                        <span>{{ menuStore.footer.mail.title }}</span>
                    </NuxtLink>
                    <NuxtLink class="footer__tel" :to="menuStore.footer.tel.url">
                        <Icon class="footer__icon" name="svg:tel" />
                        <span class="footer__tel-number">{{ menuStore.footer.tel.title }}</span>
                        <span class="footer__tel-text">с 8.00 до 17.00 по МСК</span>
                    </NuxtLink>
                </div>
                <hr class="footer__hr" />
                <span class="footer__copy">©2008-2024 Все права защищены</span>
                <NuxtLink class="footer__policy" :to="menuStore.footer.url">{{ menuStore.footer.policy.title }}</NuxtLink>

                <ul class="footer__social">
                    <li class="footer__social-elem" v-for="elem in menuStore.footer.social">
                        <NuxtLink class="footer__social-link" :to="elem.link.url">
                            <NuxtPicture :src="elem.img.node.sourceUrl"></NuxtPicture>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const menuStore = useMenuStore();
onMounted(() => {
    menuStore.getFooter();
});
</script>

<style scoped lang="scss">
@forward './Footer.scss';
</style>
