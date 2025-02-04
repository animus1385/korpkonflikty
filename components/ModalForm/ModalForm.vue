<template>
    <div class="modal-form">
        <UModal
            class="modal-form__modal"
            v-model="isOpen"
            :transition="false"
            @close="closeModal"
            :ui="{
                base: 'h-full flex flex-col max-w-max rounded-[20px] overflow-hidden max-w-[600px]',
                container: 'items-center',
                rounded: '',
                wrapper: 'z-[10000]',
            }"
        >
            <UCard
                :ui="{
                    ring: '',
                    base: 'h-full flex flex-col',
                    rounded: '',
                    divide: '',
                    body: {
                        base: 'grow',
                    },
                }"
            >
                <template #header>
                    <div class="flex items-center justify-between">
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="ml-auto" @click="closeModal" />
                    </div>
                    <div class="modal-form__content" v-if="!successActive">
                        <h3 class="modal-form__title" v-if="props.data.title">
                            {{ props.data.title }}
                        </h3>
                        <p class="modal-form__descr" v-if="props.data.descr">
                            {{ props.data.descr }}
                        </p>
                        <UForm ref="form" :schema="schema" :state="filedState" class="modal-form__form" @submit="onSubmit">
                            <div class="modal-form__fileds-block">
                                <UFormGroup
                                    v-for="field in fields"
                                    :key="field.property"
                                    class="modal-form__field-label modal-form__phone"
                                    :label="field.type !== 'hidden' ? field.placeholder : null"
                                    :name="field.property"
                                >
                                    <UInput
                                        v-if="field.type !== 'acceptance'"
                                        :type="field.type"
                                        class="modal-form__field-input input-field"
                                        v-maska="
                                            field.type == 'text' &&
                                            (field.property.toLowerCase().includes('phone') || field.property.toLowerCase().includes('tel'))
                                                ? '+7 (###) ### ##-##'
                                                : false
                                        "
                                        v-model="filedState[field.property]"
                                        :placeholder="field.placeholder"
                                    />
                                    <UCheckbox v-else v-model="filedState[field.property]" :label="field.label" />
                                </UFormGroup>

                                <UButton
                                    :loading="loadingSend"
                                    class="modal-form__btn btn"
                                    type="submit"
                                    :aria-label="`Кнопка ${props.data.nameBtn}`"
                                >
                                    {{ props.data.nameBtn }}
                                </UButton>
                            </div>
                        </UForm>
                    </div>
                    <div v-else class="modal-form__success" v-html="props.data.successMessage"></div>
                </template>
            </UCard>
        </UModal>
    </div>
</template>

<script setup lang="ts">
import { object, string, boolean } from 'yup';
const props = defineProps<{ data: any }>();
const rePhoneNumber = /^\+7\s?\(?\d{3}\)?\s?\d{3}\s[-\s]?\d{2}[-\s]?\d{2}$/;
const { reachGoal } = useYandexMetrika();
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const fields = ref(JSON.parse(props.data.cf7FormDynamicFields));
const fieldsSchema = computed<any>(() => {
    const schemaArr: any = {};
    fields.value.forEach((el: any) => {
        if (el.type == 'text' && !(el.property.includes('phone') || el.property.includes('tel'))) {
            schemaArr[el.property] = string();
        } else if (el.type == 'email') {
            schemaArr[el.property] = string().email('Не валидный Email');
        } else if (el.type == 'text' && (el.property.includes('phone') || el.property.includes('tel'))) {
            schemaArr[el.property] = string().matches(rePhoneNumber, 'Номер телефона не валидный');
        } else if (el.type == 'acceptance') {
            schemaArr[el.property] = boolean();
        }

        if (el.is_required && el.type !== 'acceptance') {
            schemaArr[el.property] = schemaArr[el.property].required('Обязательное поле');
        }
        if (el.type == 'acceptance' && el.is_required) {
            schemaArr[el.property] = schemaArr[el.property].oneOf([true], 'Вы должны согласиться с Политикой обработки данных');
        }
    });

    return schemaArr;
});

const filedState = reactive(
    fields.value.reduce((accumulator: any, current: any) => {
        if (current.type === 'acceptance') {
            accumulator[current.property] = false;
        } else if (current.type === 'hidden') {
            accumulator[current.property] = current.placeholder;
        } else {
            accumulator[current.property] = '';
        }
        return accumulator;
    }, {})
);

const schema = object(fieldsSchema.value);
const isOpen = ref(false);
const successActive = ref(false);

const loadingSend = ref(false);

watch(
    () => route.hash,
    (newHash) => {
        successActive.value = false;
        if (newHash === props.data.hash) {
            isOpen.value = true;
        } else {
            isOpen.value = false;
        }
    },
    { immediate: true }
);
watchEffect(() => {
    const btn = document.querySelector(`[href="${route.hash}"]`);
    btn?.addEventListener('click', function () {
        isOpen.value = true;
    });
});
async function onSubmit(e: any) {
    const formData = new FormData();
    formData.append('_wpcf7_unit_tag', props.data?.id);
    Object.entries(filedState).forEach((e: any) => {
        formData.append(e[0], e[1]);
    });
    loadingSend.value = true;
   
    for (let i = 0; i < props.data.yandexMetrikaList.length; i++) {
        const elem = props.data.yandexMetrikaList[i];
        reachGoal(elem.name);
    }
    await fetch(`${runtimeConfig.public.websiteAdmin}/wp-json/contact-form-7/v1/contact-forms/${props.data?.id}/feedback`, {
        method: 'POST',
        body: formData,
    })
        .then((e) => e.json())
        .then((data) => {
            loadingSend.value = false;
            successActive.value = true;
        })
        .catch((e) => {
            loadingSend.value = false;
        });
}

function closeModal() {
    isOpen.value = false;
    location.hash = '#_';
}
</script>

<style scoped lang="scss">
@forward './ModalForm.scss';
</style>
