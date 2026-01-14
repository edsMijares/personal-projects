import { auth_check } from "../api/api";
export default async function auth_checker () {
    try {
        const auth = await auth_check();
        if (auth) {
            window.location.href = '/';
        }
    } catch (error) {
        console.log('Not authenticated');
    }
}