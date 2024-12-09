export default defineNuxtRouteMiddleware((to, from) => {
    const storeCommon = useCommonStore();
    storeCommon.loader = true;
});
