export default defineNuxtRouteMiddleware((to, from) => {
    const storeCommon: any = useCommonStore();
    const storeMenu = useMenuStore();

    watchEffect(() => {
        let anchorTo = to.hash;
        storeMenu.burger = false;
        storeCommon.popoverHeader = false;
        if (storeCommon.statusLoading == 'success') {
            storeCommon.loader = false;
        } else if (storeCommon.statusLoading == 'pending') {
            storeCommon.loader = true;
        }
        if (storeCommon.statusLoading == 'success' && anchorTo) {
            setTimeout(() => {
                const element = document.querySelector(anchorTo);
                if (element) {
                    element.scrollIntoView();
                    anchorTo = '';
                }
            }, 500);
        }
    });
});
