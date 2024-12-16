import axios from 'axios';
import allQuery from '../gql/queries/getSettingsAll.gql';
import pageQuery from '../gql/queries/getIndexPage.gql';
import type { Api } from '../types/api';
import GET_POST from '../gql/queries/getPost.gql';
import { CREATE_COMMENT } from '~/gql/mutations/createComment';
import GET_POSTS from '~/gql/queries/getPosts.gql';
import GET_POST_SERVICE from '~/gql/queries/getService.gql';
import GET_MENU from '~/gql/queries/getMenu.gql';

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    const BASE_API: string = config.public.API;
    const { $graphql } = useNuxtApp();
    const api: Api = {
        getSettingsAll: async () => {
            let result = [];
            try {
                const res = await $graphql?.default?.request(allQuery);
                result = res.settingsAll.gQLSettings;
            } catch (e) {
                console.error(`текст ошибки ${e}`);
            }
            return result;
        },
        getPage: async (name: string) => {
            let result: any = {};

            try {
                const res = await $graphql?.default?.request(pageQuery, { name: name });

                if (res.pages.edges.length == 0) {
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
                    flexible: res.pages.edges[0].node.pageBuilder.flexible,
                    seo: res.pages.edges[0].node.seo,
                };
            } catch (e) {
                console.error(`текст ошибки ${e}`);
            }
            return result;
        },
        async getMenu(slug: string) {
            let result = [];

            try {
                const res = await $graphql?.default?.request(GET_MENU, { ID: slug });

                result = res;
            } catch (e) {
                console.error(`текст ошибки ${e}`);
            }
            return result;
        },
        post: {
            getAll: async (variables: { offset: number; size: number }) => {
                let result: any = {};

                try {
                    const res = await $graphql?.default?.request(GET_POSTS, variables);
                    result = res;
                } catch (e) {
                    console.error(`Error fetching posts: ${e}`);
                }
                return result;
            },
            getPost: async (slug: string) => {
                let result: any = {};

                try {
                    const res = await $graphql?.default?.request(GET_POST, { ID: slug });
                    result = res;

                    if (res?.post == null) {
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
                            uri: res.post.uri,
                            title: res.post.title,
                            date: res.post.date,
                            img: res.post.featuredImage.node.sourceUrl,
                            postViews: res.post.postViews,
                            contentPost: res.post.contentPost.contentPost,
                        },
                        pageId: res.post.postId,
                        flexible: res.post.pageBuilder.flexible,
                        comments: res.post.comments.edges,
                        seo: res.post.seo,
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
                    const res = await $graphql?.default?.request(GET_POST_SERVICE, { ID: slug });

                    if (res?.postService == null) {
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
                        flexible: res.postService.pageBuilder.flexible,
                        seo: res.postService.seo,
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
