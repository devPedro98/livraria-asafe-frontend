import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080',
})

// Interceptando todas as requisições HTTP
api.interceptors.request.use(config => {
    // Obtendo o token JWT do localStorage
    const token = localStorage.getItem('token')

    // Verificando se o token está presente
    if (token) {
        // Adicionando o token ao cabeçalho Authorization
        config.headers.Authorization = token
    }

    return config
}, error => {
    return Promise.reject(error)
})

export default api
