import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MailLockIcon from '@mui/icons-material/MailLock';

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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <MailLockIcon fontSize='large' >
          </MailLockIcon>
          <Typography component="h2" variant="h7">
            Esqueceu sua senha?
          </Typography><br />
          <Typography>
            Preencha com o e-mail que você usou para se cadastrar. Você receberá um e-mail com instruções sobre como redefinir sua senha.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              label="Endereço de email"
              type="email"
            />
            <a href='http://localhost:3000/emailenviado' ><Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar E-mail
            </Button>
            </a>
            <Grid container>
              <Grid item xs>
                <Typography>
                  Lembrou sua senha?
                </Typography>
              </Grid>
              <Grid item>
                <Link href="http://localhost:3000/login" variant="body2">
                {"Entrar"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}