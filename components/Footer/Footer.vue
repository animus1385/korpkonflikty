<template>
    <footer class="footer">
        <div class="footer__container container">
            <div class="footer__top">
                <UButton class="footer__logo" variant="ghost" @click="navigateTo('/')" v-if="menuStore.footer.logo"
                    aria-label="footer logo">
                    <NuxtImg class="footer__logo-icon" loading="lazy" format="webp" :src="menuStore.footer.logo"
                        alt="footer-logo">
                    </NuxtImg>
                </UButton>
                <ul class="footer__list" v-if="menuStore.level1Items">
                    <li class="footer__elem" v-for="elem in menuStore.level1Items.filter((e: any) => e.node.uri)"
                        :key="elem.node.id">
                        <NuxtLink vv class="footer__link" :to="elem.node.uri" :aria-label="elem.node.label"> {{
                            elem.node.label }}</NuxtLink>
                    </li>
                </ul>
                <NuxtLink class="footer__btn-call" :to="menuStore.footer.link.url">{{ menuStore.footer.link.label }}</NuxtLink>
                <NuxtLink class="footer__address" :to="menuStore.footer.address.url"
                    :aria-label="menuStore.footer.address.title" v-if="menuStore.footer.address.url">
                    <Icon class="footer__icon" name="custom-icons:ping" />
                    <span> {{ menuStore.footer.address.title }}</span>
                </NuxtLink>
                <div class="footer__connect">
                    <NuxtLink class="footer__email" :to="menuStore.footer.mail.url" v-if="menuStore.footer.mail.url"
                        :aria-label="menuStore.footer.mail.title">
                        <Icon class="footer__icon" name="custom-icons:mail" />
                        <span>{{ menuStore.footer.mail.title }}</span>
                    </NuxtLink>
                    <NuxtLink class="footer__tel" :to="menuStore.footer.tel.url" v-if="menuStore.footer.tel.url"
                        :aria-label="menuStore.footer.tel.title">
                        <Icon class="footer__icon" name="custom-icons:tel" />
                        <span class="footer__tel-number">{{ menuStore.footer.tel.title }}</span>
                        <span class="footer__tel-text">с 8.00 до 17.00 по МСК</span>
                    </NuxtLink>
                </div>
                <hr class="footer__hr" />
                <span class="footer__copy">©2008-2024 Все права защищены</span>
                <NuxtLink class="footer__policy" :to="menuStore.footer.policy.url" v-if="menuStore.footer.policy.title"
                    :aria-label="menuStore.footer.policy.title">
                    {{
                        menuStore.footer.policy.title }}
                </NuxtLink>

                <ul class="footer__social" v-if="menuStore.footer.social">
                    <li class="footer__social-elem" v-for="elem in menuStore.footer.social">
                        <NuxtLink class="footer__social-link" :to="elem.link.url" v-if="elem.link.url"
                            :aria-label="elem.link.title">
                            <Icon class="footer__icon" :name="setIcon(elem.icon[0])" />
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const menuStore = useMenuStore();
const setIcon = (param: string) => {
    let result = '';
    switch (param) {
        case 'Вконтакте':
            result = 'custom-icons:vk';
            break;
        case 'Дзен':
            result = 'custom-icons:dzen';
            break;
        case 'YouTube':
            result = 'custom-icons:youtube';
            break;
        case 'Telegram':
            result = 'custom-icons:telegram';
            break;
        case 'WhatsApp':
            result = 'custom-icons:whats-app';
            break;
    }
    return result;
}
</script>

<style scoped lang="scss">
@forward './Footer.scss';
</style>
