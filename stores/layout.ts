export const useMenuStore = defineStore('menu-store', {
    state: () => ({
        items: [],
        burger: false,
        tel: {},
        mail: {},
        logo: '',
        social: [],
        link: {},
        logoMobile: '',
        footer: {
            items: [],
            tel: {},
            mail: {},
            logo: '',
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
            this.items = data.menus.nodes.find((e: any) => e.slug == 'header').menuItems.edges;
            this.modal = data.settingsAll.gQLSettings.formModalCommon;
            this.mail = data.settingsAll.gQLSettings.headerRemove.email;
            this.tel = data.settingsAll.gQLSettings.headerRemove.tel;
            this.social = data.settingsAll.gQLSettings.headerRemove.social;
            this.logo = data.settingsAll.gQLSettings.headerRemove.logoBtn.logo.node.sourceUrl;
            this.link = data.settingsAll.gQLSettings.headerRemove.link;
            this.logoMobile = data.settingsAll.gQLSettings.headerRemove.logoMobile.node.sourceUrl;
            this.footer.items = data.menus.nodes.find((e: any) => e.slug == 'footer').menuItems.edges;
            this.footer.mail = data.settingsAll.gQLSettings.footer.email;
            this.footer.tel = data.settingsAll.gQLSettings.footer.tel;
            this.footer.social = data.settingsAll.gQLSettings.footer.social;
            this.footer.logo = data.settingsAll.gQLSettings.footer.logoBtn.logo.node.sourceUrl;
            this.footer.link = data.settingsAll.gQLSettings.footer.link;
            this.footer.policy = data.settingsAll.gQLSettings.footer.linkCopy;
            this.footer.address = data.settingsAll.gQLSettings.footer.address;
        },
    },
});
