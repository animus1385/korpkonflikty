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
                <SchemaOrgWebPage type="FAQPage" />
                <SchemaOrgQuestion
                    v-for="elem in props?.data?.fields?.list"
                    :key="elem.title"
                    :name="elem.title"
                    :accepted-answer="elem.descr"
                />
                <UAccordion class="faq__accordion accordion" variant="ghost" size="xl" color="black" :items="props?.data?.fields?.list">
                    <template #default="{ item, open }">
                        <UButton color="gray" variant="ghost" class="accordion__btn" :aria-label="item.title">
                            <span class="accordion__btn-text"> {{ item.title }}</span>

                            <template #trailing>
                                <UIcon
                                    :name="!open ? 'i-heroicons-plus' : 'i-heroicons-minus'"
                                    class="accordion__btn-icon w-5 h-5 ms-auto transform transition-transform duration-200"
                                />
                            </template>
                        </UButton>
                    </template>
                    <template #item="{ item }">
                        <p class="accordion__text-body">
                            {{ item.descr }}
                        </p>
                    </template>
                </UAccordion>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './FAQ.scss';
</style>
