<template>
    <section class="faq" id="faq" v-if="props?.data.name == 'FaqCommon' || (props?.data.name == 'FaqCustom' && props?.data.fields)">
        <div class="faq__container container">
            <div class="faq__left">
                <h2 class="faq__title title-level-2">{{ props?.data?.fields?.title }}</h2>
                <p class="faq__descr">
                    {{ props?.data?.fields?.descr }}
                </p>
            </div>
            <div class="faq__right">
                <ul
                    itemscope
                    itemtype="https://schema.org/FAQPage"
                    class="faq__accordion accordion"
                    variant="ghost"
                    size="xl"
                    color="black"
                >
                    <li
                        class="accordion__elem"
                        itemscope
                        itemprop="mainEntity"
                        itemtype="https://schema.org/Question"
                        v-for="item in props?.data?.fields?.list"
                        :key="item.title"
                        :class="{ active: item.defaultOpen }"
                    >
                        <UButton
                            color="gray"
                            variant="ghost"
                            class="accordion__btn"
                            :aria-label="item.title"
                            @click="toggleAccordion(item)"
                        >
                            <span class="accordion__btn-text" itemprop="name"> {{ item.title }}</span>

                            <template #trailing>
                                <UIcon
                                    :name="!item.defaultOpen ? 'i-heroicons-plus' : 'i-heroicons-minus'"
                                    class="accordion__btn-icon w-5 h-5 ms-auto transform transition-transform duration-200"
                                />
                            </template>
                        </UButton>
                        <Transition name="accordion-slide">
                            <div
                                v-show="item.defaultOpen"
                                class="accordion__text-body"
                                itemscope
                                itemprop="acceptedAnswer"
                                itemtype="https://schema.org/Answer"
                            >
                                <p itemprop="text">
                                    {{ item.descr }}
                                </p>
                            </div>
                        </Transition>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();

function toggleAccordion(target: any) {
    props?.data?.fields?.list.forEach((e: any) => {
        e.defaultOpen = false;
        if (e.title == target.title) {
            target.defaultOpen = !target.defaultOpen;
        }
    });
}
</script>

<style scoped lang="scss">
@forward "./FAQ.scss";
</style>
