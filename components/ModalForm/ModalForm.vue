<template>

    <div class="modal-form">
        <UModal class="modal-form__modal" v-model="isOpen" :transition="false" :ui="{
            base: 'h-full flex flex-col max-w-max rounded-[20px] overflow-hidden',
            container: 'items-center',
            rounded: '',
            wrapper: 'z-[10000]',
        }">
            <UCard :ui="{
                ring: '',
                base: 'h-full flex flex-col',
                rounded: '',
                divide: '',
                body: {
                    base: 'grow'
                }
            }">
                <template #header>
                    <div class="flex items-center justify-between">
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="ml-auto "
                            @click="isOpen = false" />
                    </div>
                    <div class="modal-form__content" v-if="!successActive">
                        <h3 class="modal-form__title" v-if="props.data.title">
                            {{ props.data.title }}
                        </h3>
                        <p class="modal-form__descr" v-if="props.data.descr">
                            {{ props.data.descr }}
                        </p>
                        <UForm ref="form" :schema="schema" :state="filedState" class="modal-form__form"
                            @submit="onSubmit">
                            <div class="modal-form__fileds-block">
                                <UFormGroup v-for="field in JSON.parse(props.data.cf7FormDynamicFields)"
                                    :key="field.property" class="modal-form__field-label modal-form__phone"
                                    :label="field.placeholder" :name="field.property">
                                    <UInput v-if="field.type !== 'acceptance'" :type="field.type"
                                        class="modal-form__field-input input-field"
                                        v-maska="(field.type == 'text' && (field.property.includes('phone') || field.property.includes('tel'))) ? '+7 (###) ### ##-##' : false"
                                        v-model="filedState[field.property]" :placeholder="field.placeholder" />
                                    <UCheckbox v-else v-model="filedState[field.property]" :label="field.label" />
                                </UFormGroup>

                                <UButton :loading="loadingSend" class="modal-form__btn btn" type="submit"> {{
                                    props.data.nameBtn }} </UButton>
                            </div>
                        </UForm>
                    </div>
                    <div v-else class="modal-form__success" v-html="props.data.successMessage"></div>
                </template>
                <!--  -->
            </UCard>
        </UModal>
    </div>
</template>

<script setup lang="ts">
import { object, string, boolean } from "yup";
const props = defineProps<{ data: any }>();
const rePhoneNumber = /^\+7\s?\(?\d{3}\)?\s?\d{3}\s[-\s]?\d{2}[-\s]?\d{2}$/;

const route = useRoute()
const toast = useToast()

const fieldsSchema = computed<any>(() => {
    const arr = JSON.parse(props.data.cf7FormDynamicFields);
    const schemaArr: any = {};
    arr.forEach((el: any) => {
        if (el.type == 'text' && !(el.property.includes('phone') || el.property.includes('tel'))) {
            schemaArr[el.property] = string();
        } else if (el.type == 'email') {

            schemaArr[el.property] = string().email("Не валидный Email");
        } else if (el.type == 'text' && (el.property.includes('phone') || el.property.includes('tel'))) {

            schemaArr[el.property] = string().matches(rePhoneNumber, "Номер телефона не валидный");
        } else if (el.type == "acceptance") {
            schemaArr[el.property] = boolean();
        }

        if (el.is_required && el.type !== "acceptance") {

            schemaArr[el.property] = schemaArr[el.property].required("Обязательное поле")
        }
        if (el.type == "acceptance" && el.is_required) {
            schemaArr[el.property] = schemaArr[el.property].oneOf([true], "Вы должны согласиться с Политикой обработки данных")
        }
    });

    return schemaArr

})

const filedState = reactive(
    JSON.parse(props.data.cf7FormDynamicFields).reduce((accumulator: any, current: any) => {
        if (current.type === 'acceptance') {
            accumulator[current.property] = false;
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
            isOpen.value = true
        } else {
            isOpen.value = false
        }
    },
    { immediate: true }
)
onMounted(() => {
    const btn = document.querySelector(`[href="/${route.hash}"]`);
    btn?.addEventListener('click', function () {
        isOpen.value = true
    })
})
async function onSubmit(e: any) {
    const formData = new FormData();
    formData.append("_wpcf7_unit_tag", props.data?.id);
    Object.entries(filedState).forEach((e: any) => {
        formData.append(e[0], e[1])
    })
    loadingSend.value = true;

    await fetch(
        `https://admin.korpkonflikty.ru/wp-json/contact-form-7/v1/contact-forms/${props.data?.id}/feedback`,
        {
            method: "POST",
            body: formData,
        },
    ).then(e => e.json()).then((data) => {
        toast.add({
            icon: "i-heroicons-check-circle", timeout: 3000, title: 'Успешно', description: data.message, 'closeButton': {
                color: 'white'
            },
            ui: {
                title: 'text-white',
                description: 'text-white',
                background: 'bg-green-500',
                progress: {
                    background: 'bg-white'
                },
                icon: {
                    color: 'text-white'
                }
            }

        })
        loadingSend.value = false;
        successActive.value = true;
    }).catch(e => {
        toast.add({
            title: `Ошибка  ${e.statusCode}`, description: e.message,
            icon: "carbon:close-filled",
            ui: {
                title: 'text-white',
                description: 'text-white',
                background: 'bg-red-500',
                progress: {
                    background: 'bg-white'
                },
                icon: {
                    color: 'text-white'
                }
            }
        })
        loadingSend.value = false;

    });


}
</script>

<style scoped lang="scss">
@forward './ModalForm.scss';
</style>