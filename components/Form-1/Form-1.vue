<template>
  <div class="form-1">
    <div class="form-1__container container">
      <div class="form-1__content">
        <div class="form-1__left">
          <h2 class="form-1__title">Узнайте стоимость и получите консультацию юриста</h2>
          <p class="form-1__descr">
            Оставьте заявку, чтобы получить бесплатную консультацию юриста по корпоративному праву в сфере
            урегулирования конфликтов и понять примерную стоимость и сроки реализации проекта!
          </p>
        </div>
        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
          <div class="form-1__fileds-block">
            <UFormGroup class="form-1__field-label form-1__phone" label="Номер телефона" name="phone">
              <UInput
                class="form-1__field-input input-field"
                v-maska="'+7 (###) ### ##-##'"
                v-model="state.phone"
                placeholder="+7 (xxx) xxx-xx-xx"
              />
            </UFormGroup>

            <UFormGroup class="form-1__field-label form-1__email" label="E-mail" name="email">
              <UInput class="form-1__field-input input-field" v-model="state.email" placeholder="example@mail.ru" />
            </UFormGroup>

            <UFormGroup class="form-1__field-label form-1__check" name="check">
              <UCheckbox
                v-model="state.check"
                label="Отправляя данные, вы соглашаетесь с Политикой обработки данных "
              />
            </UFormGroup>
            <UButton class="form-1__btn btn" type="submit"> Получить консультацию </UButton>
          </div>
        </UForm>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { object, string, type InferType, boolean } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const rePhoneNumber = /^\+7\s?\(?\d{3}\)?\s?\d{3}\s[-\s]?\d{2}[-\s]?\d{2}$/;

const schema = object({
  phone: string().matches(rePhoneNumber, "Номер телефона не валидный"),
  email: string().email("Не валидный Email").required("Обязательное поле"),
  check: boolean().oneOf([true], "Вы должны согласиться с Политикой обработки данных").required("Обязательное поле"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  phone: "",
  email: "",
  check: false,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Действия при отправке формы
  console.log(event.data);
}
</script>

<style scoped lang="scss">
@forward "./Form-1.scss";
</style>
