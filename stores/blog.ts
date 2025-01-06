export const useBlogStore = defineStore('blog-store', {
    state: (): any => ({
        loader: true,
        items: [],
        postsPerPage: 6,
        page: 1,
        offset: 0,
        totalCount: 0,
    }),

    actions: {
        async getAll() {
            const { $api } = useNuxtApp();
            this.loader = true;
            const data: any = await $api.post.getAll({
                offset: this.offset,
                size: this.postsPerPage,
            });

            this.items = data.posts.edges;

            this.totalCount = data.posts.totalPosts;

            this.loader = false;

            return data;
        },
        async viewPost(slug: string) {
            const { $api } = useNuxtApp();
            return await $api.post.viewPost(slug);
        },
        async handlePageChange(newPage: number) {
            this.page = newPage;
            this.offset = (newPage - 1) * this.postsPerPage;
            await this.getAll();
        },
    },
});
