import Header from './Header'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.home}>
            <Header />
            <p>Seja bem vindo a Livraria Asafe</p>
        </div>
    )
}

export default Home
