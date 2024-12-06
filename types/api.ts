export interface Api {
    getSettingsAll: () => Promise<any[]>;
    getPage: (id: string) => Promise<any[]>;

    post: {
        getPost: (slug: string) => Promise<any[]>;
        sendComment: (author: string, authorEmail: string, commentOn: string, content: string) => Promise<any[]>;
    };
}
