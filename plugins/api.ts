import axios from 'axios';
import { allQuery } from '../gql/queries/getSettingsAll';
import { pageQuery } from '../gql/queries/getIndexPage';

interface Api {
    getSettingsAll(): Promise<any>;
    getPage(id: string): Promise<any>;
}

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    const BASE_API: string = config.public.API as string;

    const api: Api = {
        async getSettingsAll() {
            let result = [];

            try {
                const res = await axios.post(BASE_API, {
                    query: allQuery,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                result = res?.data.data.settingsAll.gQLSettings;
            } catch (e) {
                console.error(`текст ошибки ${e}`);
            }
            return result;
        },
        async getPage(id: string) {
            let result = [];

            try {
                const res = await axios.post(BASE_API, {
                    query: pageQuery,
                    variables: { ID: id },
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                result = res?.data.data.page.pageBuilder.flexible;
            } catch (e) {
                console.error(`текст ошибки ${e}`);
            }
            return result;
        },
    };

    return {
        provide: { api: api as Api },
    };
});
