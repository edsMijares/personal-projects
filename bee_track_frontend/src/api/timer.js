export async function time_log(api) {
    const response = await api.post('/api/time_log/create');
    return response;
}

export async function get_time_log({page}, api) {
    const response = await api.get(`/api/time_log`, { params: { page } });
    return response;
}