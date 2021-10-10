import axios from 'axios';

const customAxios = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 10000,
})

let interceptor: number;

export function setupInterceptor(idToken: string) {
    interceptor = customAxios.interceptors.request.use((config) => {
        config.headers.Authorization = "Bearer " + idToken;
        return config;
    })
}

export function injectInterceptor() {
    customAxios.interceptors.request.eject(interceptor)
}

export default customAxios;