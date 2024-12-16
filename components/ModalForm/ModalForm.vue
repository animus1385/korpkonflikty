<template>
    <div class="modal-form" v-if="props?.data.name == 'FormModalCustom' && props?.data.fields">
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
                        <h3 class="modal-form__title" v-if="props.data.fields.title">
                            {{ props.data.fields.title }}
                        </h3>
                        <p class="modal-form__descr" v-if="props.data.fields.descr">
                            {{ props.data.fields.descr }}
                        </p>
                        <UForm ref="form" :schema="schema" :state="state" class="modal-form__form" @submit="onSubmit">
                            <div class="modal-form__fileds-block">
                                <UFormGroup class="modal-form__field-label modal-form__phone" label="Номер телефона"
                                    name="phone">
                                    <UInput class="modal-form__field-input input-field" v-maska="'+7 (###) ### ##-##'"
                                        v-model="state.phone" placeholder="+7 (xxx) xxx-xx-xx" />
                                </UFormGroup>

                                <UFormGroup class="modal-form__field-label modal-form__email" label="E-mail"
                                    name="email">
                                    <UInput class="modal-form__field-input input-field" v-model="state.email"
                                        placeholder="example@mail.ru" />
                                </UFormGroup>

                                <UFormGroup class="modal-form__field-label modal-form__check" name="check">
                                    <UCheckbox v-model="state.check"
                                        label="Отправляя данные, вы соглашаетесь с Политикой обработки данных " />
                                </UFormGroup>
                                <UButton :loading="loadingSend" class="modal-form__btn btn" type="submit"> {{
                                    props.data.fields.nameBtn }} </UButton>
                            </div>
                        </UForm>
                    </div>
                    <div v-else class="modal-form__success" v-html="props.data.fields.successMessage"></div>
                </template>

            </UCard>
        </UModal>
    </div>
</template>

<script setup lang="ts">
import { object, string, boolean } from "yup";
const props = defineProps<{ data: any }>();
const rePhoneNumber = /^\+7\s?\(?\d{3}\)?\s?\d{3}\s[-\s]?\d{2}[-\s]?\d{2}$/;
const schema = object({
    phone: string().matches(rePhoneNumber, "Номер телефона не валидный"),
    email: string().email("Не валидный Email").required("Обязательное поле"),
    check: boolean().oneOf([true], "Вы должны согласиться с Политикой обработки данных").required("Обязательное поле"),
});
const toast = useToast()

const isOpen = ref(false);
const successActive = ref(false);
const route = useRoute()
const loadingSend = ref(false);

const state = reactive({
    phone: "",
    email: "",
    check: false,
});

watch(
    () => route.hash,
    (newHash) => {
        successActive.value = false;
        if (newHash === props.data.fields.hash) {
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
    formData.append("_wpcf7_unit_tag", props.data.fields?.id);
    formData.append('current-phone', state.phone)
    formData.append('current-email', state.email)
    loadingSend.value = true;

    await fetch(
        `https://admin.korpkonflikty.ru/wp-json/contact-form-7/v1/contact-forms/${props.data.fields?.id}/feedback`,
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