<template>
    <section class="form-2" id="form-2" v-if="props?.data.name == 'Form2Custom' && props?.data.fields">
        <div class="form-2__container container">
            <UForm ref="form" :schema="schema" :state="filedState" class="form-2__content" @submit="onSubmit">
                <div class="form-2__fileds-block">
                    <UFormGroup
                        v-for="field in fields"
                        :key="field.property"
                        :class="`form-2__field-label form-2__${field.type}`"
                        :label="field.type !== 'hidden' ? field.placeholder : null"
                        :name="field.property"
                    >
                        <UInput
                            v-if="field.type !== 'acceptance'"
                            :type="field.type"
                            class="form-2__field-input input-field"
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
                </div>
                <UButton :loading="loadingSend" class="form-2__btn btn" type="submit" :aria-label="`Кнопка ${props.data.fields.nameBtn}`">
                    {{ props.data.fields.nameBtn }}
                </UButton>
            </UForm>
        </div>
        <Teleport to="body">
            <UModal
                v-model="successActive"
                :ui="{
                    base: 'h-full flex flex-col max-w-max rounded-[20px] overflow-hidden',
                    container: 'items-center',
                    rounded: '',
                    wrapper: 'z-[10000]',
                    margin: '',
                }"
            >
                <UCard
                    :ui="{
                        ring: '',
                        base: 'h-full flex flex-col',
                        rounded: '',
                        divide: '',
                    }"
                >
                    <div v-html="props.data.fields.successMessage"></div>
                </UCard>
            </UModal>
        </Teleport>
    </section>
</template>

<script setup lang="ts">
import { string, boolean, object } from 'yup';
const props = defineProps<{ data: any }>();
const rePhoneNumber = /^\+7\s?\(?\d{3}\)?\s?\d{3}\s[-\s]?\d{2}[-\s]?\d{2}$/;
const runtimeConfig = useRuntimeConfig();
const loadingSend = ref(false);
const successActive = ref(false);
const { reachGoal } = useYandexMetrika();
const fields = ref(JSON.parse(props.data.fields.cf7FormDynamicFields));
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
    formData.append('_wpcf7_unit_tag', props.data?.id);
    Object.entries(filedState).forEach((e: any) => {
        formData.append(e[0], e[1]);
    });
    loadingSend.value = true;

    for (let i = 0; i < props.data.yandexMetrikaList.length; i++) {
        const elem = props.data.yandexMetrikaList[i];
        reachGoal(elem.name);
    }
    await fetch(`${runtimeConfig.public.websiteAdmin}/wp-json/contact-form-7/v1/contact-forms/${props.data.fields?.id}/feedback`, {
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
</script>

<style scoped lang="scss">
@forward './Form-2.scss';
</style>
