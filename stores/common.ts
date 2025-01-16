export const useCommonStore = defineStore('common-store', {
    state: (): any => {
        return {
            loader: true,
            statusLoading: '',
            popoverHeader: false,
        };
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot));
}
