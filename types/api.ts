export interface Api {
    getSettingsAll: () => Promise<any[]>;
    getPage: (id: string) => Promise<any[]>;
}

