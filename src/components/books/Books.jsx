import { useEffect, useState } from "react"
import api from '../../services/api'
import { MdEdit } from "react-icons/md"
import { BsFillTrash3Fill } from "react-icons/bs"
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import styles from './Books.module.css'
import { Link } from "react-router-dom"
import { Flip, toast } from 'react-toastify'

const Books = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

    const fetchBooks = async (pageNumber) => {
        setLoading(true)
        try {
            const response = await api.get(`/api/books?page=${pageNumber}&size=10`)
            setBooks(response.data.content)
            setTotalPages(response.data.totalPages)
        } catch (error) {
            setError("Falha ao consultar os livros. Tente novamente mais tarde.")
            console.log("Error fetching books:", error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBooks(page)
    }, [page])



    if (loading) {
        return <p className={styles.loading}>Carregando...</p>
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

    const handleDelete = async (id) => {
        const confirmed = window.confirm("Tem certeza de que deseja deletar este livro?")
        if (confirmed) {
            try {
                await api.delete(`/api/books/${id}`)
                setBooks(books.filter(book => book.id !== id))
                toast.success("Livro deletado com sucesso.", {
                    position: "bottom-center",
                    autoClose: 2000,
                    transition: Flip,
                })
            } catch (error) {
                console.log("Error deleting book:", error)
                setError("Falha ao deletar o livro. Tente novamente mais tarde.")
            }
        }

    }

    const handlePreviousPage = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }

    const handleNextPage = () => {
        if (page < totalPages - 1) {
            setPage(page + 1)
        }
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
                        <th>Ações</th>
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
                            <td>
                                <Link to={`/book/${book.id}`}><MdEdit className={styles.icon} /></Link>
                                <BsFillTrash3Fill className={styles.icon} onClick={() => handleDelete(book.id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.pagination}>
                <GrFormPreviousLink
                    onClick={handlePreviousPage}
                    className={`${styles.icon} ${styles.navIcon} ${page === 0 ? styles.disabled : ''}`}
                />
                <span>Página {page + 1} de {totalPages}</span>
                <GrFormNextLink
                    onClick={handleNextPage}
                    className={`${styles.icon} ${styles.navIcon} ${page === totalPages - 1 ? styles.disabled : ''}`}
                />
            </div>
        </div>
    )
}

export default Books
