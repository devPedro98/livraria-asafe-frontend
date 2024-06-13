import styles from './EditBook.module.css'
import Header from '../../pages/Header'
import Input from '../input/Input'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import Button from '../button/Button';
import { Flip, toast } from 'react-toastify';

const EditBook = () => {

    const { id } = useParams()
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [registrationDate, setRegistrationDate] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await api.get(`/api/books/${id}`)
                setName(response.data.name)
                setPrice(response.data.price)
                setDescription(response.data.description)
                setAuthor(response.data.author)
                setRegistrationDate(new Date(response.data.registrationDate).toISOString().split('T')[0])
            } catch (error) {
                console.log("Error fetching book:", error)
            }
        }
        if (id) {
            fetchBook()
        }
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const updatedBook = {
                name,
                price,
                description,
                author
            }
            await api.put(`/api/books/${id}`, updatedBook)
            toast.success("Livro atualizado com sucesso.", {
                position: "bottom-center",
                autoClose: 3000,
                transition: Flip,
            })
            navigate('/books')
        } catch (error) {
            toast.error("Erro ao atualizar o livro. Tente novamente", {
                position: "bottom-center",
                autoClose: 3000,
                transition: Flip,
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Header />
            <div className={styles.edit_book_container}>
                <form onSubmit={handleSubmit}>
                    <Input type="text"
                        text="Nome"
                        name="name"
                        placeholder="Digite o nome do livro"
                        handleChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                    <Input type="number"
                        text="Preço"
                        name="price"
                        placeholder="Digite o valor do livro"
                        handleChange={(e) => setPrice(e.target.value)}
                        value={price}
                        required
                    />
                    <Input type="textarea"
                        text="Descrição"
                        name="description"
                        placeholder="Digite a descrição do livro"
                        handleChange={(e) => setDescription(e.target.value)}
                        value={description}
                        required
                    />
                    <Input type="string"
                        text="Autor"
                        name="author"
                        placeholder="Digite o nome do autor"
                        handleChange={(e) => setAuthor(e.target.value)}
                        value={author}
                        required
                    />
                    <Input type="date"
                        text="Data de registro"
                        name="registrationDate"
                        placeholder=""
                        handleChange={(e) => setRegistrationDate(e.target.value)}
                        value={registrationDate}
                        disabled
                    />
                    <Button type="submit" text={loading ? "Carregando..." : "Salvar"} />
                </form>
            </div>
        </>
    )
}

export default EditBook
