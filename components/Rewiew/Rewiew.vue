<template>
    <section class="rewiew" id="rewiew" v-if="props?.data.name == 'RewiewCommon' && props?.data.fields">
        <div class="rewiew__container container">
            <ul class="rewiew__btn-list">
                <li class="rewiew__list-elem">
                    <UButton class="rewiew__btn btn" @click="activeBtn = 'img'">Отзывы</UButton>
                </li>
                <li class="rewiew__list-elem">
                    <UButton class="rewiew__btn btn" @click="activeBtn = 'video'"> Видео отзывы</UButton>
                </li>
            </ul>
            <swiper-container v-if="activeBtn == 'img'" :slides-per-view="4" :breakpoints="{
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }">
                <swiper-slide v-for="elem in props.data.fields.listImg" :key="elem.img.node.id">
                    <div class="rewiew__elem">
                        <NuxtPicture loading="lazy" preload :src="elem.img.node.sourceUrl" @click="setDataPopup({
                            type: activeBtn,
                            value: elem.img.node.sourceUrl
                        })"></NuxtPicture>
                    </div>
                </swiper-slide>
            </swiper-container>
            <swiper-container v-if="activeBtn == 'video'" :slides-per-view="4" :breakpoints="{
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }">
                <swiper-slide v-for="(elem, index) in props.data.fields.listVideo" :key="`video-review-${index}`">
                    <div class="rewiew__elem">
                        <NuxtPicture loading="lazy" preload :src="elem.cover.node.sourceUrl" @click="setDataPopup({
                            type: activeBtn,
                            value: elem.videoElem
                        })"></NuxtPicture>
                    </div>
                </swiper-slide>
            </swiper-container>
            <UModal v-model="activePopup" class=" rewiew__modal" fullscreen :ui="{
                base: 'h-full flex flex-col',
                rounded: '',
                wrapper: 'z-[10000]',
                divide: 'divide-y divide-gray-100 dark:divide-gray-800',
                body: {
                    base: 'grow'
                }
            }">
                <UCard :ui="{
                    base: 'h-full flex flex-col',
                    rounded: '',
                    divide: 'divide-y divide-gray-100 dark:divide-gray-800',
                    body: {
                        base: 'grow'
                    }
                }">
                    <template #header>
                        <div class="flex items-center justify-between">
                            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid"
                                class="ml-auto my-1" @click="activePopup = false" />
                        </div>
                    </template>
                    <div class="rewiew__elem-modal" v-if="dataPopup.type == 'img'">
                        <NuxtPicture loading="lazy" preload :src="dataPopup.value"></NuxtPicture>
                    </div>
                    <div class="rewiew__elem-modal" v-if="dataPopup.type == 'video'">
                        <div v-html="dataPopup.value"> </div>
                    </div>
                </UCard>
            </UModal>
        </div>

    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>();
const activeBtn = ref('img');
const activePopup = ref(false);
const dataPopup = ref({
    type: '',
    value: ''
})
function setDataPopup(e: any) {
    activePopup.value = true;
    dataPopup.value = e;
}
</script>

<style scoped lang="scss">
@forward './Rewiew.scss';
</style>
