import { useState } from "react"
import Header from "../../pages/Header"
import { TextField, Button, Grid, Container, Typography, Box, InputAdornment } from '@mui/material'
import api from "../../services/api"
import { Flip, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const NewBook = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await api.post('/api/books', {
                name,
                price,
                description,
                author
            })
            toast.success("Livro cadastrado com sucesso.", {
                position: "bottom-center",
                autoClose: 3000,
                transition: Flip,
            })
            navigate('/books')
        } catch (error) {
            console.error('Login failed:', error)
        }
    }

    return (
        <>
            <Header />
            <Container maxWidth="sm">
                <Typography variant="h4" align="center" gutterBottom>
                    Cadastrar Novo Livro
                </Typography>
                <Box sx={{
                    backgroundColor: '#f5f5f5',
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 3
                }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Nome"
                                    name="name"
                                    fullWidth
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Preço"
                                    name="price"
                                    type="number"
                                    fullWidth
                                    onChange={(e) => setPrice(e.target.value)}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                    }}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Descrição"
                                    name="description"
                                    multiline
                                    rows={1}
                                    fullWidth
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Autor"
                                    name="author"
                                    fullWidth
                                    onChange={(e) => setAuthor(e.target.value)}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Cadastrar Livro
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </>
    )
}

export default NewBook
