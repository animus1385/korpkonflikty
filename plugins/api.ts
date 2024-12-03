import axios from 'axios';
import { allQuery } from '../gql/queries/getSettingsAll';
import { pageQuery } from '../gql/queries/getIndexPage';
import type { Api } from '../types/api';

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    const BASE_API: string = config.public.API;

    const api: Api = {
        getSettingsAll: async () => {
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
        getPage: async (id: string) => {
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
        provide: { api: api },
    };
});
