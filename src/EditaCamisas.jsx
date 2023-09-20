import { Box, Button, Grid, TextField, Alert, Typography, Link } from "@mui/material";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

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

function EditaFilmes() {

    const { id } = useParams();
    console.log(id);

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [ano, setAno] = useState("");
    const [duracao, setDuracao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("");
    const [editar, setEditar] = useState(false);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        const usuario = localStorage.getItem("usuario");
        fetch(process.env.REACT_APP_BACKEND + "produtos/" + usuario + "/" + id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resposta) => resposta.json())
            .then((json) => {
                if (!json.status) {

                    setTitulo(json.titulo);
                    setDescricao(json.descricao);
                    setAno(json.ano);
                    setDuracao(json.duracao);
                    setCategoria(json.categoria);
                    setImagem(json.imagem);
                } else {
                    setErro("Camisa não encontrada");
                }
            })
            .catch((erro) => { setErro(true) })
    }, []);

    function Editar(evento) {
        evento.preventDefault();
        fetch(process.env.REACT_APP_BACKEND + "produtos", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id: id,
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
                    setEditar(true);
                    setErro(false);

                } else {
                    setErro(true);
                    setEditar(false);
                }
            })
            .catch((erro) => { setErro("Erro ao procesar a requisição") })
    }

    return (
        <Grid container >
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://diocesedesaomateus.org.br/wp-content/uploads/2018/07/30jun2013-jogadores-da-selecao-brasileira-se-abracam-apos-titulo-da-copa-das-confederacoes-1372637453569_1920x1080.jpg)',
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
                    <Typography component="h1" variant='h5' sx={{ mt: 2, fontWeight: 'bold' }}>Edite sua Camisa</Typography>
                    {erro && (<Alert severity="warning" sx={{ mt: 2, mb: 2, width: "300px", fontSize: '11px', }}>{erro}</Alert>)}
                    {editar && (<Alert severity="success" sx={{ mt: 2, mb: 2, width: "300px", fontSize: '11px', }}>Camisa editada com sucesso</Alert>)}
                    <Box component="form" onSubmit={Editar} 
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
                        />
                        <TextField
                            type="text"
                            label="URL da Imagem"
                            margin="normal"
                            fullWidth
                            value={imagem}
                            onChange={(e) => setImagem(e.target.value)}
                        />
                        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, mb: 2 }} color="primary" >Editar</Button>
                        <Grid container>
                            <Grid item>
                                <Link href="http://localhost:3000/app" variant="body2" sx={{ pl: 1.5 }}>
                                    {"Voltar"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Copyright sx={{ mt: 1 }} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default EditaFilmes;