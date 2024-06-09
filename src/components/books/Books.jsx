import { useEffect, useState } from "react"
import api from '../../services/api'
import styles from './Books.module.css'

const Books = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await api.get('/api/books')
                console.log("Books data:", response.data)
                setBooks(response.data.content)
            } catch (error) {
                setError("Falha ao consultar os livros. Tente novamente mais tarde.")
                console.log("Error fetching books:", error);
            } finally {
                setLoading(false)
            }
        }
        fetchBooks()
    }, [])

    if (loading) {
        return <p>Carregando...</p>
    }

    if (error) {
        return <p className={styles.error}>{error}</p>
    }

    const formatDateTime = (dateString) => {
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }
        return new Date(dateString).toLocaleString('pt-BR', options);
    }

    return (
        <div className={styles.books_page}>
            <p>Livros cadastrados</p>
            <table className={styles.books_table}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Descrição</th>
                        <th>Autor</th>
                        <th>Data de Registro</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.name}</td>
                            <td>{book.price}</td>
                            <td>{book.description}</td>
                            <td>{book.author}</td>
                            <td>{formatDateTime(book.registrationDate)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Books
