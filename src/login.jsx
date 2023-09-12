import { Alert, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, json } from 'react-router-dom';

function Login() {

    const[ email, setEmail ] = useState ( "" );
    const[ senha, setSenha ] = useState ( "" );
    const[ lembrar, setLembrar ] = useState ( false );
    const[ login, setLogin ] = useState ( false );
    const[ erro, setErro ] = useState ( false );
    const navigate = useNavigate();

    /*O useEffect é usado aqui para realizar ações específicas após o login do usuário, como armazenar informações no localStorage e redirecioná-lo para a página inicial. Ele é acionado apenas quando a variável login muda, o que garante que essas ações sejam executadas somente quando o login for bem-sucedido.*/
    useEffect( () => {
    
        if( login ) {
            localStorage.setItem( "usuario" , JSON.stringify( {email: email } ) );
            setEmail( "" );
            setSenha( "" );
            navigate( "/" );
        }

    }, [ login ] );

    function Autenticar( evento )
    {
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                email: email,
                senha: senha
            }
        )
    } )
    .then( (resposta) => resposta.json() )
    .then( ( json ) => { 
        if( json.user ) {
            setLogin( true );
        } else {
            setErro( true );
        }
    } )
    .catch( ( erro ) => {setErro( true ) } )
}
  return (
    <Container component="section" maxWidth="xs">
        <Box 
        sx={{ 
            mt: 10,
            padding: "50px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#ececec",
        }}
        >
            <Typography component="h1" variant='h5'>Entrar</Typography>
            { erro && ( <Alert severity="warning">Revise seus dados e tente novamente</Alert > ) }
            <Box component="form" onSubmit={Autenticar}>
                <TextField
                type="email"
                label="Email" 
                variant="filled" 
                margin="normal"
                value={email}
                onChange={ (e) => setEmail( e.target.value ) }
                fullWidth
                {...erro && ( "error" ) }
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

                <FormControlLabel
                    control= { <Checkbox value={lembrar} name="lembrar" onChange={(e) => setLembrar( !lembrar ) } />}
                    label ="Lembrar-me"
                />
                <Button type="submit" variant="contained" fullWidth sx={ {mt: 2, mb: 2}} color="primary" >Login</Button>
                <Grid container>
                    <Grid item xs>
                        Esqueci a Senha
                    </Grid>
                    <Grid item>
                        Cadastrar
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Container>
    )
}

export default Login;