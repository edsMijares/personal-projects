import axios from 'axios';

// Laravel API URL
const API_URL = 'http://localhost:8000';

// Create Axios instance
const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    withXSRFToken: true,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
    },
});
const exemptedPaths = ['/login', '/register'];

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
        if (!exemptedPaths.includes(window.location.pathname)) {
            window.location.href = '/login';
        }
    }
    // return Promise.reject(error);
  }
);

export default api;
