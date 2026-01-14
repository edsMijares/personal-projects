import api from '../api/axios';
import * as auth from './auth';
import * as account from './account';
import * as timer from './timer';

function tryCatch(asyncFunc) {
    return async (...args) => {
        try {
            const response = await asyncFunc(...args, api);
            return response?.data ?? response;
        } catch (error) {
            console.error('API Error:', error);
            //
        }
    };
}

// AUTH
export const login = tryCatch(auth.login);
export const logout = tryCatch(auth.logout);
export const auth_check = tryCatch(auth.auth_check);

// ACCOUNT
export const register = tryCatch(account.register);

// TIMER
export const time_log = tryCatch(timer.time_log);
export const get_time_log = tryCatch(timer.get_time_log);
