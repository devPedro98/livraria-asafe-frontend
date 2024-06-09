import Header from './Header'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.home}>
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
