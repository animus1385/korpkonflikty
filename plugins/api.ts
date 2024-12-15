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
        getPage: async (name: string) => {
            let result: any = {};

            try {
                const res = await axios.post(BASE_API, {
                    query: pageQuery,
                    variables: { name: name },
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (res?.data.data.pages.edges.length == 0) {
                    showError({
                        statusCode: 404,
                        statusMessage: 'Страница не найдена',
                    });
                    throw createError({
                        statusCode: 404,
                        statusMessage: 'Страница не найдена',
                    });
                }
                result = {
                    flexible: res?.data.data.pages.edges[0].node.pageBuilder.flexible,
                    seo: res?.data.data.pages.edges[0].node.seo,
                };
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
            getAll: async (variables: { offset: number; size: number }) => {
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
                    if (res?.data.data.post == null) {
                        showError({
                            statusCode: 404,
                            statusMessage: 'Страница не найдена',
                        });
                        throw createError({
                            statusCode: 404,
                            statusMessage: 'Страница не найдена',
                        });
                    }
                    result = {
                        postInfo: {
                            uri: res.data.data.post.uri,
                            title: res.data.data.post.title,
                            date: res.data.data.post.date,
                            img: res.data.data.post.featuredImage.node.sourceUrl,
                            postViews: res.data.data.post.postViews,
                            contentPost: res.data.data.post.contentPost.contentPost,
                        },
                        pageId: res.data.data.post.postId,
                        flexible: res?.data.data.post.pageBuilder.flexible,
                        comments: res?.data.data.post.comments.edges,
                        seo: res.data.data.post.seo,
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
                let result: any = {};

                try {
                    const res = await axios.post(BASE_API, {
                        query: GET_POST_SERVICE,
                        variables: { ID: slug },
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    if (res?.data.data.postService == null) {
                        showError({
                            statusCode: 404,
                            statusMessage: 'Страница не найдена',
                        });
                        throw createError({
                            statusCode: 404,
                            statusMessage: 'Страница не найдена',
                        });
                    }
                    result = {
                        flexible: res?.data.data.postService.pageBuilder.flexible,
                        seo: res?.data.data.postService.seo,
                    };
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
