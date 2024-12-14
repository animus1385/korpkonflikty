export default defineNuxtRouteMiddleware((to, from) => {
    const storeCommon = useCommonStore();

    const anchorTo = to.hash;

    watchEffect(() => {
        if (storeCommon.statusLoading == 'success') {
            storeCommon.loader = false;
        } else if (storeCommon.statusLoading == 'pending') {
            storeCommon.loader = true;
        }
        if (storeCommon.statusLoading == 'success' && anchorTo) {
            const element = document.querySelector(anchorTo);
            if (element) {
                element.scrollIntoView();
            }
        }
    });
});
