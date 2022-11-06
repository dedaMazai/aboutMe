import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorages';

// const baseUrl = __IS_DEV__ ? 'http://localhost:8000' : 'https://production:8000'; как альтернатива __API__

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
    },
});
