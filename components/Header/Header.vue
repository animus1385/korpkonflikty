<template>
    <header class="header" v-if="menuStore.items">
        <div class="header__contaniner container">
            <NuxtLink class="header__logo" to="/" variant="ghost" aria-label="логотип" v-if="menuStore.logo">
                <NuxtImg class="header__logo-img" loading="lazy" format="webp" :src="menuStore.logo" alt="header-logo"> </NuxtImg>
            </NuxtLink>
            <nav class="header__nav">
                <ul class="header__list" v-if="menuStore.items">
                    <li class="header__elem" v-for="elem in menuStore.level1Items" :key="elem.node.id">
                        <NuxtLink
                            :target="elem.node.target"
                            v-if="!menuStore.level2Items.find((e: any) => elem?.node?.id == e.node.parentId)"
                            class="header__link"
                            :class="{ active: route.path == elem.node.uri }"
                            :to="elem.node.uri"
                            :aria-label="elem.node.label"
                            >{{ elem.node.label }}
                        </NuxtLink>

                        <UPopover
                            v-model="openPopover"
                            v-else
                            :ui="{
                                container: 'header__nav-popup',
                            }"
                        >
                            <UButton
                                aria-label="arrow"
                                class="header__link"
                                :class="{ active: route.path.includes('services') }"
                                variant="ghost"
                                :label="elem.node.label"
                                trailing-icon="i-heroicons-chevron-down-20-solid"
                                @click="openPopover = !openPopover"
                            />
                            <template #panel>
                                <div class="header__level-2">
                                    <NuxtLink
                                        class="header__level-2-link"
                                        :class="{ active: route.path == level2Elem.node.uri }"
                                        v-for="level2Elem in menuStore.level2Items"
                                        :key="level2Elem.id"
                                        :to="level2Elem.node.uri"
                                        :target="level2Elem.node.target"
                                        :aria-label="level2Elem.node.label"
                                    >
                                        {{ level2Elem.node.label }}
                                    </NuxtLink>
                                </div>
                            </template>
                        </UPopover>
                    </li>
                </ul>
            </nav>

            <div class="header__connect">
                <NuxtLink
                    class="header__email"
                    v-if="menuStore.mail.url"
                    :target="menuStore.mail.target"
                    :to="menuStore.mail.url"
                    :aria-label="menuStore.mail.title"
                >
                    <div class="header__email-info">
                        <Icon class="header__icon" name="custom-icons:mail" />
                        <span> {{ menuStore.mail.title }}</span>
                    </div>
                </NuxtLink>
                <NuxtLink
                    class="header__tel"
                    v-if="menuStore.tel.url"
                    :target="menuStore.tel.target"
                    :to="menuStore.tel.url"
                    :aria-label="menuStore.tel.title"
                >
                    <div class="header__tel-info">
                        <Icon class="header__icon" name="custom-icons:tel" />
                        <span>{{ menuStore.tel.title }}</span>
                    </div>

                    <span class="header__tel-text">с 8.00 до 17.00 по МСК</span>
                </NuxtLink>
            </div>
            <ul class="header__social" v-if="menuStore.social">
                <li class="header__social-elem" v-for="elem in menuStore.social">
                    <NuxtLink :to="elem.link.url" :target="elem.link.target" :aria-label="elem.link.title">
                        <Icon class="header__icon" :name="setIcon(elem.icon[0])" />
                    </NuxtLink>
                </li>
            </ul>
            <NuxtLink
                class="header__btn-call btn btn--bg"
                v-if="menuStore.link.url"
                :to="menuStore.link.url"
                :target="menuStore.link.target"
                :aria-label="menuStore.link.title"
                >{{ menuStore.link.title }}</NuxtLink
            >
            <UButton
                class="header__burger"
                variant="ghost"
                size="xl"
                icon="iconamoon:menu-burger-horizontal-bold"
                @click="menuStore.burger = true"
                aria-label="burger"
            />
        </div>
        <USlideover v-model="menuStore.burger" side="left" :ui="{ wrapper: 'z-[1000]' }">
            <UCard class="h-full">
                <template #header>
                    <div class="header__top-mobile">
                        <NuxtLink class="header__logo-mobile" to="/" aria-label="Логотип мобильный" v-if="menuStore.logoMobile">
                            <NuxtImg loading="lazy" format="webp" :src="menuStore.logoMobile" alt="header-logo-mobile"> </NuxtImg>
                        </NuxtLink>
                        <UButton
                            variant="ghost"
                            size="sm"
                            icon="i-heroicons-x-mark-20-solid"
                            class="header__close"
                            square
                            padded
                            aria-label="Кнопка закрыть"
                            @click="menuStore.burger = false"
                        />
                    </div>

                    <div class="header__connect-mobile">
                        <NuxtLink
                            class="header__email-mobile"
                            v-if="menuStore.mail.url"
                            :to="menuStore.mail.url"
                            :target="menuStore.mail.target"
                            :aria-label="menuStore.mail.title"
                        >
                            <div class="header__email-block-mobile">
                                <Icon class="header__icon-mobile" name="custom-icons:mail" />
                                <span> {{ menuStore.mail.title }}</span>
                            </div>
                        </NuxtLink>
                        <NuxtLink
                            class="header__tel-mobile"
                            v-if="menuStore.tel.url"
                            :to="menuStore.tel.url"
                            :target="menuStore.tel.target"
                            :aria-label="menuStore.tel.title"
                        >
                            <div class="header__tel-block-mobile">
                                <Icon class="header__icon-mobile" name="custom-icons:tel" />
                                <span>{{ menuStore.tel.title }}</span>
                            </div>
                            <span class="footer__tel-text">с 8.00 до 17.00 по МСК</span>
                        </NuxtLink>
                    </div>
                </template>

                <nav class="header__nav-mobile">
                    <ul class="header__list-mobile" v-if="menuStore.items">
                        <li class="header__elem-mobile" v-for="elem in menuStore.level1Items" :key="elem.node.id">
                            <NuxtLink
                                v-if="!menuStore.level2Items.find((e: any) => elem?.node?.id == e.node.parentId)"
                                class="header__link-mobile"
                                :to="elem.node.uri"
                                :target="elem.node.target"
                                :aria-label="elem.node.label"
                            >
                                {{ elem.node.label }}</NuxtLink
                            >
                            <UAccordion
                                v-else
                                class="header__accordion"
                                variant="ghost"
                                size="xl"
                                color="black"
                                :items="[
                                    {
                                        label: 'Услуги',
                                    },
                                ]"
                            >
                                <template #default="{ open }">
                                    <UButton
                                        color="gray"
                                        variant="ghost"
                                        class="header__accordion-btn-mobile"
                                        aria-label="`Кнопка аккордеона"
                                    >
                                        <span class="header__accordion-btn-text">Услуги</span>
                                        <template #trailing>
                                            <UIcon
                                                :name="!open ? 'i-heroicons-chevron-down-20-solid' : 'i-heroicons-chevron-up-20-solid'"
                                            />
                                        </template>
                                    </UButton>
                                </template>
                                <template #item="{ item }">
                                    <ul class="header__accordion-mobile-list">
                                        <li
                                            class="header__accordion-mobile-elem"
                                            v-for="level2Elem in menuStore.level2Items"
                                            :key="level2Elem.id"
                                        >
                                            <NuxtLink
                                                class="header__accordion-link-mobile"
                                                :to="level2Elem.node.uri"
                                                :target="level2Elem.node.target"
                                                :aria-label="level2Elem.node.label"
                                            >
                                                {{ level2Elem.node.label }}
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </template>
                            </UAccordion>
                        </li>
                    </ul>
                </nav>

                <NuxtLink
                    class="header__btn-call btn mobile btn--bg"
                    v-if="menuStore.link.url"
                    :to="menuStore.link.url"
                    :target="menuStore.link.target"
                    :aria-label="menuStore.link.title"
                    >{{ menuStore.link.title }}</NuxtLink
                >
                <ul class="header__social-mobile" v-if="menuStore.social">
                    <li class="header__social-elem-mobile" v-for="elem in menuStore.social">
                        <NuxtLink :to="elem.link.url" :target="elem.link.target" :aria-label="elem.link.title">
                            <Icon class="header__icon-mobile" :name="setIcon(elem.icon[0])" />
                        </NuxtLink>
                    </li>
                </ul>
            </UCard>
        </USlideover>
    </header>
</template>

<script setup lang="ts">
const menuStore = useMenuStore();
const route = useRoute();
const openPopover = ref(false);
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
};
</script>

<style scoped lang="scss">
@forward './Header.scss';
</style>
