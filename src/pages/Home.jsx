import Header from './Header'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { Zoom, toast } from 'react-toastify'

const Home = () => {
    return (
        <div className={styles.home}>
            <button onClick={() => toast.error("erro rsrs", {
                autoClose: 3000,
                transition: Zoom
            })}>Clique aqui</button>
            <Header />
            <p>Seja bem vindo a Livraria Asafe</p>
            <Link to="/books">
                <p>Veja os livros cadastrados</p>
            </Link>
            <p>Veja os pessoas cadastradas</p>
        </div>
    )
}

export default Home
