import Header from "./Header"
import Books from '../components/books/Books'
import styles from './BooksPage.module.css'

const BooksPage = () => {
    return (
        <div className={styles.books_page}>
            <Header />
            <h1>Bem-vindo à Livraria Asafe</h1>
            <p>
                A Livraria Asafe é mais do que uma simples livraria online. Nosso sistema foi criado para oferecer a melhor experiência de leitura para todos os amantes de livros. Aqui, você encontrará uma vasta coleção de títulos, desde clássicos atemporais até os lançamentos mais recentes.
            </p>
            <Books />
        </div>
    )
}

export default BooksPage
