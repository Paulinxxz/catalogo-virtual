import { Box, Button, Container, FormControlLabel, TextField, Typography, Checkbox, Grid, Alert, Avatar } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from 'react';

function Cadastro() {

    const[ usuario, setUsuario ] = useState ( "" );
    const[ email, setEmail ] = useState ( "" );
    const[ senha, setSenha ] = useState ( "" );
    const[ telefone, setTelefone ] = useState ( "" );
    const[ cpf, setCpf ] = useState ( "" );
    const[ aceito, setAceito ] = useState ( false );
    const[ cadastrar, setCadastrar ] = useState ( false );
    const[ erro, setErro ] = useState ( false );

    function Cadastrar( evento ) {

        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                usuario: usuario,
                email: email,
                senha: senha,
                telefone: telefone,
                cpf: cpf
            }
        )
    } )
    .then( (resposta) => resposta.json() )
    .then( ( json ) => { 
        if( json.cpf ) {
            setCadastrar( true );
            setErro( false );
        } else {
            setErro( true );
            setCadastrar( false );
        }
    } )
    .catch( ( erro ) => {setErro( true ) } )
    }

    useEffect( () => {

        setUsuario( "" );
        setEmail( "" );
        setSenha( "" );
        setTelefone( "" );
        setCpf( "" );
        /*setCadastrar( false );*/

    }, [ cadastrar ] );

  return (
    <Container component="section" maxWidth="xs">
        <Box sx={{ 
            mt: 5,
            padding: "50px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#9BCD8A",
        }}>
            <Typography component="h1" variant='h7'>Junte-se a nós</Typography>
            { erro && ( <Alert severity="warning" sx={{ mt: 2, mb: 2 }} >Desculpe tente novamente</Alert> )}
            { cadastrar && ( <Alert severity="success" sx={{ mt: 2, mb: 2 }} >Obrigado por se cadastrar</Alert> )}
            <Box component="form" onSubmit={Cadastrar} >
                <TextField
                type="text"
                label="Usuario" 
                variant="filled" 
                margin="normal"
                value={usuario}
                onChange={ (e) => setUsuario( e.target.value ) }
                fullWidth
                />

                <TextField
                type="email"
                label="Email"
                variant="filled"
                margin="normal" 
                fullWidth
                value={email}
                onChange={ (e) => setEmail( e.target.value ) }
                />
                
                <TextField
                type="password"
                label="Senha"
                variant="filled"
                margin="normal" 
                fullWidth
                value={senha}
                onChange={ (e) => setSenha( e.target.value ) }
                />

                <TextField
                type="tel"
                label="Telefone"
                variant="filled"
                margin="normal" 
                fullWidth
                value={telefone}
                onChange={ (e) => setTelefone( e.target.value ) }
                />

                <TextField
                type="text"
                label="CPF"
                variant="filled"
                margin="normal" 
                fullWidth
                value={cpf}
                onChange={ (e) => setCpf( e.target.value ) }
                />

                <FormControlLabel
                    control= { <Checkbox value={aceito} name="aceito" onChange={(e) => setAceito( !aceito ) } />}
                    label ="Eu li e concordo com os Termos e Condições"
                />
                <FormControlLabel
                    control= { <Checkbox value={aceito} name="aceito" onChange={(e) => setAceito( !aceito ) } />}
                    label ="Quero receber ofertas e descontos exclusivos"
                />
                <Button type="submit" variant="contained" fullWidth sx={ {mt: 2, mb: 2}} color="primary" >Cadastrar</Button>
                <Grid container>
                    <Grid item xs>
                        Suporte
                    </Grid>
                    <Grid item>
                        Login
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Container>
  )
}

export default Cadastro;









