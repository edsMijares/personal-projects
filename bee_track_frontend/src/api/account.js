export async function register({ username, email, password, password_confirmation }, api) {
    const response = await api.post('/api/account/create', { username, email, password, password_confirmation});
    return response;
}