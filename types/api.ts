export interface Api {
    getSettingsAll: () => Promise<any[]>;
    getPage: (id: string) => Promise<any[]>;

    post: {
        getAll: () => Promise<any[]>;
        getPost: (slug: string) => Promise<any[]>;
        sendComment: (author: string, authorEmail: string, commentOn: string, content: string) => Promise<any[]>;
    };
    services: {
        getService: (slug: string) => Promise<any[]>;
    }
}
