export interface Api {
    getSettingsAll: () => Promise<any[]>;
    getPage: (name: string) => Promise<any[]>;
    getLayout: () => Promise<any[]>;
    getSiteMap: () => Promise<any[]>;
    post: {
        getAll: (variables: { offset: number; size: number }) => Promise<any[]>;
        getPost: (slug: string) => Promise<any[]>;
        sendComment: (author: string, authorEmail: string, commentOn: string, content: string) => Promise<any[]>;
        viewPost: (slug: string) => Promise<any[]>;
    };
    services: {
        getService: (slug: string) => Promise<any[]>;
    };
}
