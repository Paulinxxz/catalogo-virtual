import { Alert, Button, TextField, Link, Grid, Box, Typography, } from '@mui/material';
import { useState } from 'react';
import { useEffect } from "react";
import style from './camisas.module.css'

function Copyright(props) {
    return (
        <Typography variant="body2" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

function Camisa() {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [ano, setAno] = useState("");
    const [duracao, setDuracao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("");
    const [cadastro, setCadastro] = useState(false);
    const [erro, setErro] = useState(false);


    function CadastrarCamisas(evento) {

        evento.preventDefault();
        fetch(process.env.REACT_APP_BACKEND + "produtos", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    titulo: titulo,
                    descricao: descricao,
                    ano: ano,
                    duracao: duracao,
                    categoria: categoria,
                    imagem: imagem,
                    usuario: localStorage.getItem("usuario")
                }
            )
        })
            .then((resposta) => resposta.json())
            .then((json) => {
                if (json._id) {
                    setCadastro(true);
                    setErro(false);
                } else {
                    setErro(true);
                    setCadastro(false);
                }
            })
            .catch((erro) => { setErro(true) })
    }

    useEffect(() => {

        setTitulo("");
        setDescricao("");
        setAno("");
        setDuracao("");
        setCategoria("");
        setImagem("");

    }, [cadastro]);

    return (
        <Grid container >
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2023/07/33pu4bz-preview.jpg)',
                }}
            />
            <Grid item xs={12} sm={8} md={5} elevation={6} square>
                <Box
                    sx={{
                        my: 4,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant='h5' sx={{ mt: 2, fontWeight: 'bold' }} >Cadastre uma Camisa</Typography>
                    {erro && (<Alert severity="warning" sx={{ mt: 2, mb: 2, width: "300px", fontSize: '11px', }} >Camisa já cadastrada. Tente novamente jogador(a)!</Alert>)}
                    {cadastro && (<Alert severity="success" sx={{ mt: 2, mb: 2, width: "300px", fontSize: '11px', }} >Boaa! Camisa cadastrada. Obrigado jogador(a)</Alert>)}
                    <Box component="form" onSubmit={CadastrarCamisas}
                        sx={{
                            mt: 1,
                            textAlign: "center"
                        }}>
                        <TextField
                            type="text"
                            label="Preço"
                            margin="normal"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            fullWidth
                        />

                        <TextField
                            type="text"
                            label="Descricao"
                            margin="normal"
                            fullWidth
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                        <TextField
                            type="number"
                            label="Ano"
                            margin="normal"
                            fullWidth
                            value={ano}
                            onChange={(e) => setAno(e.target.value)}
                        />
                        <TextField
                            type="text"
                            label="Campeonato"
                            margin="normal"
                            fullWidth
                            value={duracao}
                            onChange={(e) => setDuracao(e.target.value)}
                        />
                        <TextField
                            type="text"
                            label="Time"
                            margin="normal"
                            fullWidth
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                        </TextField>

                        <TextField
                            type="text"
                            label="URL da Imagem"
                            margin="normal"
                            fullWidth
                            value={imagem}
                            onChange={(e) => setImagem(e.target.value)}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                mb: 2, mt: 2
                            }}>
                            Cadastrar Camisa
                        </Button>
                        <a href='http://localhost:3000/app' ><Button
                            fullWidth
                            variant="outlined"
                            sx={{
                                mb: 2
                            }}>
                            Camisas Cadastradas
                        </Button>
                        </a>
                        <Grid container>
                            <Grid item>
                                <Link href="http://localhost:3000/" variant="body2" sx={{ pl: 1.5 }}>
                                    {"Voltar"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Copyright sx={{ mt: 1 }} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
export default Camisa