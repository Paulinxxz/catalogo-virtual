import { Box, Button, Container, TextField, Alert, Typography } from "@mui/material";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function EditaFilmes() {

    const { id } = useParams();
    console.log( id );

    const[ titulo, setTitulo ] = useState ( "" );
    const[ descricao, setDescricao ] = useState ( "" );
    const[ ano, setAno ] = useState ( "" );
    const[ duracao, setDuracao ] = useState ( "" );
    const[ categoria, setCategoria ] = useState ( "" );
    const[ imagem, setImagem ] = useState ( "" );
    const[ editar, setEditar ] = useState ( false );
    const[ erro, setErro ] = useState ( false );

    useEffect( () => {
        fetch( process.env.REACT_APP_BACKEND + "filmes/" + id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then( (resposta) => resposta.json() )
            .then( ( json ) => { 
                if( !json.status ) {

                setTitulo( json.titulo );
                setDescricao( json.descricao );
                setAno( json.ano );
                setDuracao( json.duracao );
                setCategoria( json.categoria );
                setImagem( json.imagem );
            } else {
                setErro("Filme não encontrado");
            }
        })
            .catch( ( erro ) => {setErro( true ) } )
    }, [ ] );

    function Editar( evento ) {
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "filmes", {
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
                    imagem: imagem
                }
            )
        } )
            .then( (resposta) => resposta.json() )
            .then( ( json ) => { 
                if( json._id ) {
                setEditar( true );
                setErro( false );
    
            } else {
                setErro( true );
                setEditar( false );
            }
        })
            .catch( ( erro ) => {setErro( "Erro ao procesar a requisição" ) } )
    }

  return (
    <Container component="section" maxWidth="sm" >
        <Box sx={{ 
            mt: 5,
            padding: "50px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#ececec",
        }}>
            <Typography component="h1" variant='h5'>Edite seu Filme</Typography>
            { erro && ( <Alert severity="warning">{erro}</Alert> )}
            { editar && ( <Alert severity="success">Filme editado com sucesso</Alert> )}
        <Box component="form" onSubmit={Editar} >
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
                    label="URL da Imagem"
                    margin="normal" 
                    variant="filled"
                    fullWidth
                    value={imagem}
                    onChange={ (e) => setImagem( e.target.value ) }
                />
                <Button type="submit" variant="contained" fullWidth sx={ {mt: 2, mb: 2}} color="primary" >Editar</Button>
            </Box>
        </Box>
    </Container>
  )
}

export default EditaFilmes;