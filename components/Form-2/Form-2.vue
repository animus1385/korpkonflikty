<template>
    <div class="form-2">
        <div class="form-2__container container">
            <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                <div class="form-2__content">
                    <div class="form-2__fileds-block">
                        <UFormGroup class="form-2__field-label form-2__name" label="Имя" name="name">
                            <UInput class="form-2__field-input input-field" v-model="state.name" placeholder="Иван Иванов" />
                        </UFormGroup>

                        <UFormGroup class="form-2__field-label form-2__phone" label="Номер телефона" name="phone">
                            <UInput
                                class="form-2__field-input input-field"
                                v-maska="'+7 (###) ### ##-##'"
                                v-model="state.phone"
                                placeholder="+7 (xxx) xxx-xx-xx"
                            />
                        </UFormGroup>

                        <UFormGroup class="form-2__field-label form-2__email" label="E-mail" name="email">
                            <UInput class="form-2__field-input input-field" v-model="state.email" placeholder="example@mail.ru" />
                        </UFormGroup>

                        <UFormGroup class="form-2__field-label form-2__check" name="check">
                            <UCheckbox v-model="state.check" label="Отправляя данные, вы соглашаетесь с Политикой обработки данных " />
                        </UFormGroup>
                    </div>
                    <UButton class="form-2__btn btn" type="submit"> Получить консультацию </UButton>
                </div>
            </UForm>
        </div>
    </div>
</template>

<script setup lang="ts">
import { object, string, type InferType, boolean } from 'yup';
import type { FormSubmitEvent } from '#ui/types';

const rePhoneNumber = /^\+7\s?\(?\d{3}\)?\s?\d{3}\s[-\s]?\d{2}[-\s]?\d{2}$/;

const schema = object({
    name: string().min(2, 'Имя должно состоять как минимум из 2 символов').required('Обязательное поле'),
    phone: string().matches(rePhoneNumber, 'Номер телефона не валидный'),
    email: string().email('Не валидный Email').required('Обязательное поле'),
    check: boolean().oneOf([true], 'Вы должны согласиться с Политикой обработки данных').required('Обязательное поле'),
});

type Schema = InferType<typeof schema>;

const state = reactive({
    name: '',
    phone: '',
    email: '',
    check: false,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Действия при отправке формы
    console.log(event.data);
}
</script>

<style scoped lang="scss">
@forward './Form-2.scss';
</style>
