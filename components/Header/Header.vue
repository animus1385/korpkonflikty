<template>
    <header class="header" v-if="menuStore.items">
        <div class="header__contaniner container">
            <NuxtLink class="header__logo" to="/" aria-label="header logo" v-if="menuStore.logo">
                <NuxtPicture loading="lazy" format="webp" preload :src="menuStore.logo" alt="header-logo"></NuxtPicture>
            </NuxtLink>
            <nav class="header__nav">
                <ul class="header__list" v-if="menuStore.items">
                    <li class="header__elem" v-for="elem in menuStore.items" :key="elem.node.id">
                        <NuxtLink class="header__link" :to="elem.node.uri" :aria-label="elem.node.label">{{
                            elem.node.label }}</NuxtLink>
                    </li>
                </ul>
            </nav>

            <div class="header__connect">
                <NuxtLink class="header__email" v-if="menuStore.mail.url" :to="menuStore.mail.url"
                    :aria-label="menuStore.mail.title">
                    <Icon class="header__icon" name="svg:mail" />
                    <span> {{ menuStore.mail.title }}</span>
                </NuxtLink>
                <NuxtLink class="header__tel" v-if="menuStore.tel.url" :to="menuStore.tel.url"
                    :aria-label="menuStore.tel.title">
                    <Icon class="header__icon" name="svg:tel" />
                    <span>{{ menuStore.tel.title }}</span>

                </NuxtLink>
            </div>
            <ul class="header__social" v-if="menuStore.social">
                <li class="header__social-elem" v-for="elem in menuStore.social">
                    <NuxtLink :to="elem.link.url" :aria-label="elem.link.title">
                        <NuxtPicture loading="lazy" format="webp" preload :src="elem.img.node.sourceUrl"
                            :alt="elem.link.title">
                        </NuxtPicture>
                    </NuxtLink>
                </li>
            </ul>
            <NuxtLink class="header__btn-call btn" v-if="menuStore.link.url" :to="menuStore.link.url"
                :aria-label="menuStore.link.title">{{ menuStore.link.title }}</NuxtLink>
            <UButton class="header__burger" variant="ghost" size="xl" icon="iconamoon:menu-burger-horizontal-bold"
                @click="menuStore.burger = true" />
        </div>
        <USlideover v-model="menuStore.burger" side="left" :ui="{ wrapper: 'z-[1000]' }">
            <UCard>
                <template #header>
                    <div class="header__top-mobile">
                        <NuxtLink class="header__logo-mobile" to="/" aria-label="header logo"
                            v-if="menuStore.logoMobile">
                            <NuxtPicture loading="lazy" format="webp" preload :src="menuStore.logoMobile"
                                alt="header-logo-mobile">
                            </NuxtPicture>
                        </NuxtLink>
                        <UButton color="gray" variant="ghost" size="sm" icon="i-heroicons-x-mark-20-solid"
                            class="flex sm:hidden absolute end-5 top-5 z-10" square padded @click="menuStore.burger = false" />
                    </div>

                    <div class="header__connect-mobile">
                        <NuxtLink class="header__email-mobile" v-if="menuStore.mail.url" :to="menuStore.mail.url"
                            :aria-label="menuStore.mail.title">
                            <div class="header__email-block-mobile">
                                <Icon class="header__icon-mobile" name="svg:mail" />
                                <span> {{ menuStore.mail.title }}</span>
                            </div>
                        </NuxtLink>
                        <NuxtLink class="header__tel-mobile" v-if="menuStore.tel.url" :to="menuStore.tel.url"
                            :aria-label="menuStore.tel.title">
                            <div class="header__tel-block-mobile">
                                <Icon class="header__icon-mobile" name="svg:tel" />
                                <span>{{ menuStore.tel.title }}</span>
                            </div>
                            <span class="footer__tel-text">с 8.00 до 17.00 по МСК</span>
                        </NuxtLink>
                    </div>
                </template>
                <nav class="header__nav-mobile">
                    <ul class="header__list-mobile" v-if="menuStore.items">
                        <li class="header__elem-mobile" v-for="elem in menuStore.items" :key="elem.node.id">
                            <NuxtLink class="header__link-mobile" :to="elem.node.uri" :aria-label="elem.node.label">{{
                                elem.node.label }}</NuxtLink>
                        </li>
                    </ul>
                </nav>
                <NuxtLink class="header__btn-call btn" v-if="menuStore.link.url" :to="menuStore.link.url"
                    :aria-label="menuStore.link.title">{{ menuStore.link.title }}</NuxtLink>
                <ul class="header__social-mobile" v-if="menuStore.social">
                    <li class="header__social-elem-mobile" v-for="elem in menuStore.social">
                        <NuxtLink :to="elem.link.url" :aria-label="elem.link.title">
                            <NuxtPicture loading="lazy" format="webp" preload :src="elem.img.node.sourceUrl"
                                :alt="elem.link.title">
                            </NuxtPicture>
                        </NuxtLink>
                    </li>
                </ul>
            </UCard>
        </USlideover>
    </header>
</template>

<script setup lang="ts">
const menuStore = useMenuStore();
onMounted(() => {
    menuStore.getHeader();
});
</script>

<style scoped lang="scss">
@forward './Header.scss';
</style>
