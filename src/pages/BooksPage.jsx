import Header from "./Header"
import Books from '../components/books/Books'
import styles from './BooksPage.module.css'

const BooksPage = () => {
    return (
        <div className={styles.books_page}>
            <Header />
            <h1>Bem-vindo à Livraria Asafe</h1>
            <Books />
        </div>
    )
}

export default BooksPage
