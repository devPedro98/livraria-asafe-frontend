import Header from "./Header"
import Books from '../components/books/Books'
import styles from './BooksPage.module.css'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const BooksPage = () => {

    const navigate = useNavigate()

    const handleRegisterBook = () => {
        navigate('/new-book')
    }


    return (
        <div className={styles.books_page}>
            <Header />
            <h1>Bem-vindo à Livraria Asafe</h1>
            <Books />
            <Button
                variant="contained"
                sx={{ mt: 1 }}
                onClick={handleRegisterBook}
            >Cadastrar Livro</Button>
        </div>
    )
}

export default BooksPage
