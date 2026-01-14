export async function login({ username, password }, api) {
    // REQUIRED for Sanctum SPA
    await api.get('/sanctum/csrf-cookie');
    const response = await api.post('/auth/login', { username, password });
    if (response.status === 200) {
        window.location.href = '/';
    }
    return response;
}

export async function logout(api) {
    const response = await api.post('/auth/logout');
    return response;
}

export async function auth_check(api) {
    const response = await api.get('/auth/check');
    return response;
}
