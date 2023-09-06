import { Box, Button, Container, TextField, Typography, Alert } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from 'react';

function Filmes() {
    const[ titulo, setTitulo ] = useState ( "" );
    const[ descricao, setDescricao ] = useState ( "" );
    const[ ano, setAno ] = useState ( "" );
    const[ duracao, setDuracao ] = useState ( "" );
    const[ categoria, setCategoria ] = useState ( "" );
    const[ imagem, setImagem ] = useState ( "" );
    const[ cadastrar, setCadastrar ] = useState ( false );
    const[ erro, setErro ] = useState ( false );

    function CadastrarFilmes( evento ) {

        evento.preventDefault();
        fetch("http://10.139.75.32:8080/filmes", {
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
                imagem: imagem
            }
        )
    } )
    .then( (resposta) => resposta.json() )
    .then( ( json ) => { 
        if( json.titulo ) {
            setTitulo( true );
        } else {
            setErro( true );
        }
    } )
    .catch( ( erro ) => {setErro( true ) } )
    }

    useEffect( () => {

        setTitulo( "" );
        setDescricao( "" );
        setAno( "" );
        setDuracao( "" );
        setCategoria( "" );
        setImagem( "" );

    }, [ cadastrar ] );

  return (
    <Container component="section" maxWidth= "xs">
        <Box sx={{ 
            mt: 5,
            padding: "40px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#ececec",
        }}>
            <Typography component="h1" variant='h5'>Filmes</Typography>
            { erro && ( <Alert severity="warning" sx={{ mt: 2, mb: 2 }} >Desculpe tente novamente</Alert> )}
            { cadastrar && ( <Alert severity="success" sx={{ mt: 2, mb: 2 }} >Filme Cadastrado</Alert> )}
            <Box component="form" onSubmit={CadastrarFilmes} >
                <TextField
                    type="text"
                    label="Titulo" 
                    variant="filled" 
                    margin="normal"
                    value={titulo}
                    onChange={ (e) => setTitulo( e.target.value ) }
                    fullWidth
                />
                <TextField
                    type="text"
                    label="Descricao"
                    variant="filled"
                    margin="normal" 
                    fullWidth
                    value={descricao}
                    onChange={ (e) => setDescricao( e.target.value ) }
                />
                <TextField
                    type="number"
                    label="Ano"
                    variant="filled"
                    margin="normal" 
                    fullWidth
                    value={ano}
                    onChange={ (e) => setAno( e.target.value ) }
                />
                <TextField
                    type="text"
                    label="Duracao"
                    variant="filled"
                    margin="normal" 
                    fullWidth
                    value={duracao}
                    onChange={ (e) => setDuracao( e.target.value ) }
                />
                <TextField
                    type="text"
                    label="Categoria"
                    variant="filled"
                    margin="normal" 
                    fullWidth
                    value={categoria}
                    onChange={ (e) => setCategoria( e.target.value ) }
                />
                <TextField
                    type="text"
                    label="Imagem"
                    margin="normal" 
                    variant="filled"
                    fullWidth
                    value={imagem}
                    onChange={ (e) => setImagem( e.target.value ) }
                />
                <Button type="submit" variant="contained" fullWidth sx={ {mt: 2, mb: 2}} color="primary" >Cadastrar</Button>
            </Box>
        </Box>
    </Container>
  )
}

export default Filmes;


