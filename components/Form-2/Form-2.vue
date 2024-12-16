<template>
    <section class="form-2" id="form-2" v-if="props?.data.name == 'Form2Custom' && props?.data.fields">
        <div class="form-2__container container">
            <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                <div class="form-2__content">
                    <div class="form-2__fileds-block">
                        <UFormGroup class="form-2__field-label form-2__name" label="Имя" name="name">
                            <UInput class="form-2__field-input input-field" v-model="state.name"
                                placeholder="Иван Иванов" />
                        </UFormGroup>

                        <UFormGroup class="form-2__field-label form-2__phone" label="Номер телефона" name="phone">
                            <UInput class="form-2__field-input input-field" v-maska="'+7 (###) ### ##-##'"
                                v-model="state.phone" placeholder="+7 (xxx) xxx-xx-xx" />
                        </UFormGroup>

                        <UFormGroup class="form-2__field-label form-2__email" label="E-mail" name="email">
                            <UInput class="form-2__field-input input-field" v-model="state.email"
                                placeholder="example@mail.ru" />
                        </UFormGroup>

                        <UFormGroup class="form-2__field-label form-2__check" name="check">
                            <UCheckbox v-model="state.check"
                                label="Отправляя данные, вы соглашаетесь с Политикой обработки данных " />
                        </UFormGroup>
                    </div>
                    <UButton class="form-2__btn btn" type="submit"> Получить консультацию </UButton>
                </div>
            </UForm>
        </div>
    </section>
</template>

<script setup lang="ts">
import { object, string, boolean } from 'yup';
const props = defineProps<{ data: any }>();
const rePhoneNumber = /^\+7\s?\(?\d{3}\)?\s?\d{3}\s[-\s]?\d{2}[-\s]?\d{2}$/;
const toast = useToast()
const loadingSend = ref(false);
const schema = object({
    name: string().min(2, 'Имя должно состоять как минимум из 2 символов').required('Обязательное поле'),
    phone: string().matches(rePhoneNumber, 'Номер телефона не валидный'),
    email: string().email('Не валидный Email').required('Обязательное поле'),
    check: boolean().oneOf([true], 'Вы должны согласиться с Политикой обработки данных').required('Обязательное поле'),
});



const state = reactive({
    name: '',
    phone: '',
    email: '',
    check: false,
});

async function onSubmit(e: any) {
    const formData = new FormData();
    formData.append("_wpcf7_unit_tag", props.data.fields?.id);
    formData.append('current-name', state.name);
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
@forward './Form-2.scss';
</style>
