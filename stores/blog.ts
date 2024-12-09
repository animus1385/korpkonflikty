export const useBlogStore = defineStore('blog-store', {
    state: () => ({
        loader: true,
        items: [],
        postsPerPage: 6, 
        page: 1, 
        endCursor: null, 
        hasNextPage: false, 
        totalCount: 0,
    }),

    actions: {
        async getAll() {
            const { $api } = useNuxtApp();
            this.loader = true;

            const data: any = await $api.post.getAll({
                first: this.postsPerPage, 
                after: this.endCursor, 
            });

            this.items = data.posts.edges;
            this.endCursor = data.posts.pageInfo.endCursor; 
            this.hasNextPage = data.posts.pageInfo.hasNextPage;

            this.totalCount = data.posts.edges.length;

            this.loader = false;
        },

        async handlePageChange(newPage: number) {
            this.page = newPage;

          
            if (this.page === 1) {
                this.endCursor = null; 
            }

            this.getAll(); 
        },
    },

    getters: {
        totalPages(state) {
            // Вычисляем количество страниц
            return Math.ceil(state.totalCount / state.postsPerPage);
        },
    },
});
