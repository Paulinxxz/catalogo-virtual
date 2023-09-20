import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Paper, CssBaseline, Alert } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';

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

const defaultTheme = createTheme();
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
      fetch( process.env.REACT_APP_BACKEND + "usuarios", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(
          {
              nome: usuario,
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

  }, [ cadastrar ] );
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{ 
            backgroundImage: 'url(https://brechodofutebol.com/wp-content/uploads/2022/03/compramos-sua-camisa.jpg)',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Cadastrar
            </Typography>
            { erro && ( <Alert severity="warning" sx={{ mt: 2, mb: 2 }} >Desculpe tente novamente</Alert> )}
            { cadastrar && ( <Alert severity="success" sx={{ mt: 2, mb: 2 }} >Obrigado por se cadastrar</Alert> )}
            <Box component="form" onSubmit={Cadastrar} sx={{ mt: 1 }}>
            <TextField
                type="text"
                label="Usuario" 
                margin="normal"
                value={usuario}
                onChange={ (e) => setUsuario( e.target.value ) }
                fullWidth
                />

                <TextField
                type="email"
                label="Email"
                margin="normal" 
                fullWidth
                value={email}
                onChange={ (e) => setEmail( e.target.value ) }
                />
                
                <TextField
                type="password"
                label="Senha"
                margin="normal" 
                fullWidth
                value={senha}
                onChange={ (e) => setSenha( e.target.value ) }
                />

                <TextField
                type="tel"
                label="Telefone"
                margin="normal" 
                fullWidth
                value={telefone}
                onChange={ (e) => setTelefone( e.target.value ) }
                />

                <TextField
                type="text"
                label="CPF"
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
                <Grid item>
                  <Link href="http://localhost:3000/login" variant="body2">
                    Login
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 1 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Cadastro;