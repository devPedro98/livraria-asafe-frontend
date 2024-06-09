import { useState } from "react"
import axios from 'axios'
import { Navigate } from 'react-router-dom';
import Input from "../components/input/Input"
import Button from "../components/button/Button"
import styles from './Login.module.css'

const Login = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                login,
                password
            })
            console.log(response.data.token)
            localStorage.setItem('token', response.data.token)
            setLoggedIn(true)
        } catch (error) {
            setError('O login falhou, por favor tente novamente.')
            console.error('Login failed:', error)
        } finally {
            setLoading(false)
        }
    }

    if (loggedIn) {
        return <Navigate to="/home" />
    }

    return (
        <div className={styles.login_container}>
            <form onSubmit={handleSubmit}>
                <div>
                    <Input type="text"
                        text="Usuário:"
                        name="username"
                        placeholder="Digite seu usuário"
                        handleChange={(e) => setLogin(e.target.value)}
                        value={login}
                        required
                    />
                </div>
                <div>
                    <Input type="password"
                        text="Senha:"
                        name="password"
                        placeholder="Digite sua senha"
                        handleChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <Button type="submit" text={loading ? "Carregando..." : "Login"} />
            </form>
        </div>
    )
}

export default Login
