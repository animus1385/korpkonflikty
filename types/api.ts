export interface Api {
    getSettingsAll: () => Promise<any[]>;
    getPage: (name: string) => Promise<any[]>;
    getMenu: (slug: string) => Promise<any[]>;
    post: {
        getAll: (variables: { first: number; after: string | null }) => Promise<any[]>;
        getPost: (slug: string) => Promise<any[]>;
        sendComment: (author: string, authorEmail: string, commentOn: string, content: string) => Promise<any[]>;
    };
    services: {
        getService: (slug: string) => Promise<any[]>;
    };
}
