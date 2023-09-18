import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Paper, CssBaseline } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();
function SignInSide() {
  
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
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                type="text"
                label="Usuario" 
                variant="filled" 
                margin="normal"
                fullWidth
                />

                <TextField
                type="email"
                label="Email"
                variant="filled"
                margin="normal" 
                fullWidth
                />
                
                <TextField
                type="password"
                label="Senha"
                variant="filled"
                margin="normal" 
                fullWidth
                />

                <TextField
                type="tel"
                label="Telefone"
                variant="filled"
                margin="normal" 
                fullWidth
                />

                <TextField
                type="text"
                label="CPF"
                variant="filled"
                margin="normal" 
                fullWidth
                />

              <FormControlLabel 
              control={<Checkbox value="remember" color="primary" />}
              label ="Eu li e concordo com os Termos e Condições"
              />
              <br></br>
              <FormControlLabel
                control= { <Checkbox value="remember" color="primary"/>}
                label ="Quero receber ofertas e descontos exclusivos"
            />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} color="primary">Cadastrar</Button>
              <Grid container>
                <Grid item xs>
                  <Link href="http://localhost:3000/suporte" variant="body2">
                    Suporte
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="http://localhost:3000/login" variant="body2">
                    Login
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;