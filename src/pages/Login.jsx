import { useState } from "react"
import axios from 'axios'
import styles from './Login.module.css'

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
                    <label>Username:</label>
                    <input
                        type="text"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
