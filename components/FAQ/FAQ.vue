<template>
    <div class="faq">
        <div class="faq__container container">
            <div class="faq__left">
                <h2 class="faq__title title-level-2">Часто задаваемые вопросы</h2>
                <p class="faq__descr">
                    А ещё активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, в равной
                    степени предоставлены сами себе. В целом, конечно, новая модель организационной деятельности говорит о возможностях
                    экономической целесообразности принимаемых решений.
                </p>
            </div>
            <div class="faq__right">
                <UAccordion class="faq__accordion accordion"  variant="ghost" size="xl" color="black">
                    <template #default="{ item, open }">
                        <UButton color="gray" variant="ghost" class="accordion__btn">
                            <span class="accordion__btn-text"> {{ item.label }}</span>

                            <template #trailing>
                                <UIcon
                                    :name="!open ? 'i-heroicons-plus' : 'i-heroicons-minus'"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                />
                            </template>
                        </UButton>
                    </template>
                    <template #item="{ item }">
                        <p class="accordion__text-body">
                            {{ item.content }}
                        </p>
                    </template>
                </UAccordion>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@forward './FAQ.scss';
</style>
