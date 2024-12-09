export const useCommonStore = defineStore('common-store', {
    state: () => {
        return {
            loader: true,
        };
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot));
}
