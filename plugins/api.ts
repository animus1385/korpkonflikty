import axios from 'axios';
import { allQuery } from '../gql/queries/getSettingsAll';
import { pageQuery } from '../gql/queries/getIndexPage';
import type { Api } from '../types/api';
import { GET_POST } from '../gql/queries/getPost';
import { CREATE_COMMENT } from '~/gql/mutations/createComment';
import { GET_POSTS } from '~/gql/queries/getPosts';
import { GET_POST_SERVICE } from '~/gql/queries/getService';
import { GET_MENU } from '~/gql/queries/getMenu';

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    const BASE_API: string = config.public.API;

    const api: Api = {
        getSettingsAll: async () => {
            let result = [];

            try {
                const res = await axios.post(BASE_API, {
                    query: allQuery,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                result = res?.data.data.settingsAll.gQLSettings;
            } catch (e) {
                console.error(`текст ошибки ${e}`);
            }
            return result;
        },
        getPage: async (id: string) => {
            let result = [];

            try {
                const res = await axios.post(BASE_API, {
                    query: pageQuery,
                    variables: { ID: id },
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                result = res?.data.data.page.pageBuilder.flexible;
            } catch (e) {
                console.error(`текст ошибки ${e}`);
            }
            return result;
        },
        async getMenu(slug: string) {
            let result = [];

            try {
                const res = await axios.post(BASE_API, {
                    query: GET_MENU,
                    variables: { ID: slug },
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                result = res?.data.data;
            } catch (e) {
                console.error(`текст ошибки ${e}`);
            }
            return result;
        },
        post: {
            getAll: async (variables: { first: number; after: string | null }) => {
                let result: any = {};

                try {
                    const res = await axios.post(BASE_API, {
                        query: GET_POSTS,
                        variables: variables,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    result = res.data.data;
                } catch (e) {
                    console.error(`Error fetching posts: ${e}`);
                }
                return result;
            },
            getPost: async (slug: string) => {
                let result: any = {};

                try {
                    const res = await axios.post(BASE_API, {
                        query: GET_POST,
                        variables: { ID: slug },
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    result = {
                        pageId: res.data.data.post.postId,
                        flexible: res?.data.data.post.pageBuilder.flexible,
                        comments: res?.data.data.post.comments.edges,
                    };
                } catch (e) {
                    console.error(`текст ошибки ${e}`);
                }
                return result;
            },
            sendComment: async (author: string, authorEmail: string, commentOn: string, content: string) => {
                let result: any = {};

                try {
                    const res = await axios.post(BASE_API, {
                        query: CREATE_COMMENT,
                        variables: { author, authorEmail, commentOn, content },
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    result = res;
                } catch (e) {
                    console.error(`текст ошибки ${e}`);
                }
                return result;
            },
        },
        services: {
            getService: async (slug: string) => {
                let result = [];

                try {
                    const res = await axios.post(BASE_API, {
                        query: GET_POST_SERVICE,
                        variables: { ID: slug },
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    result = res?.data.data.postService.pageBuilder.flexible;
                } catch (e) {
                    console.error(`текст ошибки ${e}`);
                }
                return result;
            },
        },
    };

    return {
        provide: { api: api },
    };
});
