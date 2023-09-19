import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Paper, CssBaseline, Alert } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useNavigate, json } from 'react-router-dom';

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
function Login() {

  const[ email, setEmail ] = useState ( "" );
  const[ senha, setSenha ] = useState ( "" );
  const[ lembrar, setLembrar ] = useState ( false );
  const[ login, setLogin ] = useState ( false );
  const[ erro, setErro ] = useState ( false );
  const navigate = useNavigate();

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
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.mantosdofutebol.com.br/wp-content/uploads/2018/02/loja-de-camisas.jpg)',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
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
              Entrar
            </Typography>
            { erro && ( <Alert severity="warning">Revise seus dados e tente novamente</Alert > ) }
            <Box component="form" onSubmit={Autenticar} sx={{ mt: 1 }}>
              <TextField
                type="email"
                label="Email" 
                margin="normal"
                value={email}
                onChange={ (e) => setEmail( e.target.value ) }
                fullWidth
                {...erro && ( "error" ) }
              />
              <TextField
                type="password"
                label="Senha"
                margin="normal" 
                fullWidth
                value={senha}
                onChange={ (e) => setSenha( e.target.value ) }
              />

              <FormControlLabel 
              control= { <Checkbox value={lembrar} name="lembrar" onChange={(e) => setLembrar( !lembrar ) } />}
              label="Lembrar-me"
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} color="primary">Entrar</Button>
              <Grid container>
                <Grid item xs>
                  <Link href="http://localhost:3000/esquecisenha" variant="body2">
                    Esqueceu a senha?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="http://localhost:3000/cadastro" variant="body2">
                    Cadastre-se
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;