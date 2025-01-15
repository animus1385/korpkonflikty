<template>
  <section class="form-1" v-if="props.data.fields.cf7FormDynamicFields">
    <div class="form-1__container container">
      <div class="form-1__content">
        <div class="form-1__left" v-if="props?.data.fields.title">
          <h2 class="form-1__title">{{ props?.data.fields.title }}</h2>
          <p class="form-1__descr">{{ props?.data.fields.descr }}</p>
        </div>
        <UForm ref="form" :schema="schema" :state="filedState" class="form-1__form" @submit="onSubmit">
          <div class="form-1__fileds-block">
            <UFormGroup v-for="field in fields" :key="field.property"
              :class="`form-1__field-label form-1__${field.type}`"
              :label="field.type !== 'hidden' ? field.placeholder : null" :name="field.property">
              <UInput v-if="field.type !== 'acceptance'" :type="field.type" class="form-1__field-input input-field"
                v-maska="(field.type == 'text' && (field.property.includes('phone') || field.property.includes('tel'))) ? '+7 (###) ### ##-##' : false"
                v-model="filedState[field.property]" :placeholder="field.placeholder" />
              <UCheckbox v-else v-model="filedState[field.property]" :label="field.label" />

            </UFormGroup>

            <UButton :loading="loadingSend" class="form-1__btn btn" type="submit"> {{
              props.data.fields.nameBtn }} </UButton>
          </div>
        </UForm>
      </div>
    </div>

  </section>
  <Teleport to="body">
    <UModal v-model="successActive" :ui="{
      base: 'h-full flex flex-col max-w-max rounded-[20px] overflow-hidden',
      container: 'items-center',
      rounded: '',
      wrapper: 'z-[10000]',
      margin: ''
    }">
      <UCard :ui="{
        ring: '',
        base: 'h-full flex flex-col',
        rounded: '',
        divide: '',

      }">
        <div v-html="props.data.fields.successMessage"></div>
      </UCard>
    </UModal>
  </Teleport>
</template>

<script setup lang="ts">
import { string, boolean, object } from "yup";
const props = defineProps<{ data: any }>();
const rePhoneNumber = /^\+7\s?\(?\d{3}\)?\s?\d{3}\s[-\s]?\d{2}[-\s]?\d{2}$/;

const loadingSend = ref(false);
const successActive = ref(false);
const runtimeConfig = useRuntimeConfig()


const fields = ref(JSON.parse(props.data.fields.cf7FormDynamicFields));
const fieldsSchema = computed<any>(() => {
  const schemaArr: any = {};
  fields.value.forEach((el: any) => {
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
const schema = object(fieldsSchema.value);
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

async function onSubmit(e: any) {
  const formData = new FormData();
  formData.append("_wpcf7_unit_tag", props.data?.id);
  Object.entries(filedState).forEach((e: any) => {
    formData.append(e[0], e[1])
  })
  loadingSend.value = true;

  await fetch(
    `${runtimeConfig.public.websiteAdmin}/wp-json/contact-form-7/v1/contact-forms/${props.data.fields?.id}/feedback`,
    {
      method: "POST",
      body: formData,
    },
  ).then(e => e.json()).then((data) => {
    loadingSend.value = false;
    successActive.value = true;
  }).catch(e => {
    loadingSend.value = false;
  });


}
</script>

<style scoped lang="scss">
@forward "./Form-1.scss";
</style>
