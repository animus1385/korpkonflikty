export const useMenuStore = defineStore("menu-store", {
    state: (): any => ({
        items: [],
        burger: false,
        tel: {},
        mail: {},
        logo: "",
        social: [],
        link: {},
        logoMobile: "",
        footer: {
            items: [],
            tel: {},
            mail: {},
            logo: "",
            social: [],
            link: {},
            policy: {},
            address: {},
        },
        modal: {},
    }),

    actions: {
        async getLayout() {
            const { $api } = useNuxtApp();

            const data: any = await $api.getLayout();
            this.items = data.menus.nodes.find((e: any) => e.slug == "header").menuItems.edges;
            this.modal = data.settingsAll.gQLSettings.formModalCommon;
            this.mail = data.settingsAll.gQLSettings.headerRemove.email;
            this.tel = data.settingsAll.gQLSettings.headerRemove.tel;
            this.social = data.settingsAll.gQLSettings.headerRemove.social;
            this.logo = data.settingsAll.gQLSettings.headerRemove.logoBtn.logo.node.sourceUrl;
            this.link = data.settingsAll.gQLSettings.headerRemove.link;
            this.logoMobile = data.settingsAll.gQLSettings.headerRemove.logoMobile.node.sourceUrl;
            this.footer.items = data.menus.nodes.find((e: any) => e.slug == "footer").menuItems.edges;
            this.footer.mail = data.settingsAll.gQLSettings.footer.email;
            this.footer.tel = data.settingsAll.gQLSettings.footer.tel;
            this.footer.social = data.settingsAll.gQLSettings.footer.social;
            this.footer.logo = data.settingsAll.gQLSettings.footer.logoBtn.logo.node.sourceUrl;
            this.footer.link = data.settingsAll.gQLSettings.footer.link;
            this.footer.policy = data.settingsAll.gQLSettings.footer.linkCopy;
            this.footer.address.link = data.settingsAll.gQLSettings.footer.address.link;
            this.footer.address.addressLocality = data.settingsAll.gQLSettings.footer.address.addressLocality;
            this.footer.address.streetAddress = data.settingsAll.gQLSettings.footer.address.streetAddress;
            this.footer.address.postalCode = data.settingsAll.gQLSettings.footer.address.postalCode;
            this.footer.address.addressCountry = data.settingsAll.gQLSettings.footer.address.addressCountry;
        },
    },
    getters: {
        level1Items(context) {
            return context.items.filter((obj: any) => {
                const matchingObject = context.items.find((item: any) => obj.node.parentId === null);
                return !!matchingObject;
            });
        },
        level1ItemsFooter(context) {
            return context.footer.items.filter((obj: any) => {
                const matchingObject = context.footer.items.find((item: any) => obj.node.parentId === null);
                return !!matchingObject;
            });
        },
        level2Items(context) {
            return context.items.filter((obj: any) => {
                const matchingObject = context.items.find((item: any) => item.node.id === obj.node.parentId);
                return !!matchingObject;
            });
        },
    },
});
