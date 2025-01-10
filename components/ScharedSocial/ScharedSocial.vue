<template>
    <div class="schared-social"  v-if="props.data?.shared.whatsapp && props.data?.shared.telegram">
        <div class="schared-social__container container">
            <ul class="schared-social__list">
                <li class="schared-social__item" v-if="props.data?.shared.whatsapp">
                    <a :href="props.data?.shared.whatsapp" aria-label="telegram" title="telegram" target="_blank"
                        class="schared-social__link">
                        <UIcon name="custom-icons:shared-telegram" />
                    </a>
                </li>
                <li class="schared-social__item" v-if="props.data?.shared.telegram">
                    <a :href="props.data?.shared.telegram" aria-label="vk" title="vk" target="_blank"
                        class="schared-social__link">
                        <UIcon name="custom-icons:shared-whatsapp" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@forward './ScharedSocial.scss';
</style>