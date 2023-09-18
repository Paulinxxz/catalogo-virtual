import { Button, CssBaseline, Box, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BeenhereIcon from '@mui/icons-material/Beenhere';

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline  />
        <Box
          sx={{
            marginTop: 21,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <BeenhereIcon fontSize='large' >
          </BeenhereIcon>
          <Typography component="h2" variant="h7">
            Email enviado!
          </Typography><br />
          <Typography>
            Um e-mail foi enviado para o seu endereço de e-mail com instruções sobre como redefinir sua senha. Caso não o receba dentro de alguns minutos, verifique se usou o endereço de e-mail em questão na sua conta e tente novamente ou entre em contato conosco para obter ajuda.
          </Typography>
            <a href='http://localhost:3000/login' ><Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            </a>
          </Box>
      </Container>
    </ThemeProvider>
  );
}