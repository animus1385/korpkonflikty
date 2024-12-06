<template>
    <div class="form-commnent">
        <div class="form-commnent__container container">
            <div class="form-commnent__block-enter">
                <h2 class="form-commnent__title">Оставьте комментарий</h2>
                <UForm class="form-commnent__form" :schema="schema" :state="state" @submit="onSubmit">
                    <div class="form-commnent__content">
                        <UFormGroup class="form-commnent form-commnent__comment" label="Ваш комментарий" name="comment">
                            <UTextarea class="form-commnent__field-textarea" v-model="state.comment" placeholder="Иван Иванов" />
                        </UFormGroup>
                        <div class="form-commnent__fileds-block">
                            <UFormGroup class="form-commnent__field-label form-commnent__name" label="Имя" name="name">
                                <UInput class="form-commnent__field-input input-field" v-model="state.name" placeholder="Иван Иванов" />
                            </UFormGroup>
                            <UFormGroup class="form-commnent__field-label form-commnent__email" label="E-mail" name="email">
                                <UInput
                                    class="form-commnent__field-input input-field"
                                    v-model="state.email"
                                    placeholder="example@mail.ru"
                                />
                            </UFormGroup>
                            <div class="form-commnent__bottom">
                                <UFormGroup class="form-commnent__field-label form-commnent__check" name="check">
                                    <UCheckbox
                                        v-model="state.check"
                                        label="Отправляя данные, вы соглашаетесь с Политикой обработки данных "
                                    />
                                </UFormGroup>
                                <UButton class="form-commnent__btn btn" type="submit"> Отправить </UButton>
                            </div>
                        </div>
                    </div>
                </UForm>
            </div>
            <div class="form-commnent__all-comments">
                <span class="form-commnent__span">Комментарии</span>
                <ul class="form-commnent__list">
                    <li class="form-commnent__elem" v-for="comment in props.data" :key="comment.node.id">
                        <UAvatar class="form-commnent__elem-avatar" src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
                        <div class="form-commnent__elem-info">
                            <span class="form-commnent__elem-name">{{ comment.node.author.name }}</span>
                            <div class="form-commnent__elem-comment" v-html="comment.node.content"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { object, string, type InferType, boolean } from 'yup';
import type { FormSubmitEvent } from '#ui/types';
const props = defineProps<{ data: any; pageId: string }>();
const { $api } = useNuxtApp();

const schema = object({
    name: string().min(2, 'Имя должно состоять как минимум из 2 символов').required('Обязательное поле'),
    comment: string().required('Обязательное поле'),
    email: string().email('Не валидный Email').required('Обязательное поле'),
    check: boolean().oneOf([true], 'Вы должны согласиться с Политикой обработки данных').required('Обязательное поле'),
});

type Schema = InferType<typeof schema>;

const state = reactive({
    name: '',
    comment: '',
    email: '',
    check: false,
});
 
async function onSubmit(event: FormSubmitEvent<Schema>) {
    const { data, status } = useAsyncData(
        'createComment',
        async () => await $api.post.sendComment(state.name, state.email, props.pageId, state.comment)
    );
    console.log(data);
}
</script>

<style scoped lang="scss">
@forward './Form-Commnent.scss';
</style>
