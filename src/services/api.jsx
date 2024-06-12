import axios from 'axios'
import { Zoom, toast } from 'react-toastify'

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

// Interceptando todas as respostas HTTP
api.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        localStorage.removeItem('token')
        toast.warn('Sua sessão expirou. Por favor, faça login novamente.', {
            position: "bottom-center",
            autoClose: 3000,
            transition: Zoom
        })
        setTimeout(() => {
            window.location.href = '/login'
        }, 3000) // Espera 3 segundos antes de redirecionar
    }
    return Promise.reject(error)
})

export default api