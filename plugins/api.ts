import axios from "axios";
import allQuery from "../gql/queries/getSettingsAll.gql";
import GET_PAGE from "../gql/queries/getIndexPage.gql";
import type { Api } from "../types/api";
import GET_POST from "../gql/queries/getPost.gql";
import VIEW_POST from "../gql/mutations/setPostViews.gql";
import { CREATE_COMMENT } from "~/gql/mutations/createComment";
import GET_POSTS from "~/gql/queries/getPosts.gql";
import GET_POST_SERVICE from "~/gql/queries/getService.gql";
import GET_LAYOUT from "~/gql/queries/getLayout.gql";
import GET_SITEMAP from "~/gql/queries/getSitemap.gql";
import GET_SEO_PAGE from "~/gql/queries/getSeoPage.gql";
import GET_SEO_POST from "~/gql/queries/getSeoPost.gql";
import GET_SEO_SERVICE from "~/gql/queries/getSeoServices.gql";
import GET_ALL_MODIFIED_POST from "~/gql/queries/getAllModifiedPosts.gql";

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    const BASE_API: string = config.public.API;
    const { $graphql } = useNuxtApp();
    const api: Api = {
        getSettingsAll: async () => {
            let result: any = {};
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
                const res = await $graphql?.default?.request(GET_PAGE, { ID: name });

                result = {
                    flexible: res.page.pageBuilder.flexible,
                    seo: res.page.seo,
                    breadcrumbs: res.page.pageBuilder.customBreadcrumbs,
                };
            } catch (e) {
                console.error(`текст ошибки ${e}`);
            }
            return result;
        },
        getLayout: async () => {
            let result: any = {};

            try {
                const res = await $graphql?.default?.request(GET_LAYOUT);
                result = res;
            } catch (e) {
                console.error(`текст ошибки ${e}`);
            }
            return result;
        },
        getSiteMap: async () => {
            let result: any = {};

            try {
                const res = await $graphql?.default?.request(GET_SITEMAP);
                result = res.allUrls;
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
            getAllModifiedPosts: async () => {
              let result: any = {};

              try {
                  const res = await $graphql?.default?.request(GET_ALL_MODIFIED_POST);
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

                    result = {
                        postInfo: {
                            uri: res.post.uri,
                            title: res.post.title,
                            date: res.post.date,
                            img: res.post.featuredImage.node.sourceUrl,
                            postViews: res.post.postViews,
                            contentPost: res.post.contentPost.contentPost,
                            modified: res.post.modified
                        },
                        pageId: res.post.postId,
                        flexible: res.post.pageBuilder.flexible,
                        comments: res.post.comments.edges,
                        seo: res.post.seo,
                        breadcrumbs: res.post.pageBuilder.customBreadcrumbs,
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
                            "Content-Type": "application/json",
                        },
                    });
                    result = res;
                } catch (e) {
                    console.error(`текст ошибки ${e}`);
                }
                return result;
            },
            viewPost: async (slug: string) => {
                let result: any = {};

                try {
                    const res = await $graphql?.default?.request(VIEW_POST, { slug });
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

                    result = {
                        flexible: res.postService.pageBuilder.flexible,
                        seo: res.postService.seo,
                        breadcrumbs: res.postService.pageBuilder.customBreadcrumbs,
                    };
                } catch (e) {
                    console.error(`текст ошибки ${e}`);
                }
                return result;
            },
        },
        seo: {
            getSeoPage: async (slug: string) => {
                let result: any = {};

                try {
                    const res = await $graphql?.default?.request(GET_SEO_PAGE, { ID: slug });
                    result = res.page;
                } catch (e) {
                    console.error(`текст ошибки ${e}`);
                }
                return result;
            },
            getSeoPost: async (slug: string) => {
                let result: any = {};

                try {
                    const res = await $graphql?.default?.request(GET_SEO_POST, { ID: slug });
                    result = res.post;
                } catch (e) {
                    console.error(`текст ошибки ${e}`);
                }
                return result;
            },
            getSeoService: async (slug: string) => {
                let result: any = {};

                try {
                    const res = await $graphql?.default?.request(GET_SEO_SERVICE, { ID: slug });
                    result = res.postService;
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
