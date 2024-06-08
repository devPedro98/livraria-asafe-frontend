import { useState } from "react"
import axios from 'axios'
import styles from './Login.module.css'
import Input from "../components/input/Input"
import Button from "../components/button/Button"

const Login = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                login,
                password
            })
            console.log(response.data.token)
        } catch (error) {
            console.error('Login failed:', error)
        }
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
                <Button type="submit" text="Login" />
            </form>
        </div>
    )
}

export default Login
