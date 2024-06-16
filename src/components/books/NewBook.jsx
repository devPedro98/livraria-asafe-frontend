import Header from "../../pages/Header"
import { TextField, Button, Grid, Container, Typography, Box } from '@mui/material';

const NewBook = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para manipular o envio do formulário
        console.log('Formulário enviado');
    };

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
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Preço"
                                    name="price"
                                    type="number"
                                    fullWidth
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
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Autor"
                                    name="author"
                                    fullWidth
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
