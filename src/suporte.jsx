import { AppBar, Card, CardContent, CssBaseline, Grid, Box, Toolbar, Typography, Container, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SecurityIcon from '@mui/icons-material/Security';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
            <a href='http://localhost:3000' ><CloseIcon fontSize='large'></CloseIcon></a>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            pt: 5,
            pb: 6,
          }}
        >
          <Container maxWidth="sx">
            <Typography
              component="h3"
              variant="h4"
              align="center"
              gutterBottom
            >Suporte
            </Typography>
            <Typography variant="h6" align="center" color="gray">
            Procurar ajuda por categoria
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 2 }}>
          <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
                    <CardContent sx={{ flexGrow: 1 }} align='center' >
                    <PersonIcon fontSize='large'></PersonIcon>
                    <Typography gutterBottom variant="h6" component="h2">
                      Conta
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
        <Container sx={{ py: 2 }}>
          <Grid container spacing={4} justifyContent="center">
              <Grid item xs={8} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
                    <CardContent sx={{ flexGrow: 1 }} align='center' >
                    <PaidIcon fontSize='large' ></PaidIcon>
                    <Typography gutterBottom variant="h6" component="h2">
                      Reembolsos
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
        <Container sx={{ py: 2 }}>
          <Grid container spacing={4} justifyContent="center">
              <Grid item xs={8} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }} align='center' >
                    <ChatIcon fontSize='large' ></ChatIcon>
                    <Typography gutterBottom variant="h6" component="h2">
                      Reclamações
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
        <Container sx={{ py: 2 }}>
          <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent align='center' >
                    <SecurityIcon fontSize='large' ></SecurityIcon>
                    <Typography gutterBottom variant="h6" component="h2">
                      Segurança
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center">
          Ajuda
        </Typography>
        <Typography
          align="center"
          color="gray"
        >
          Encontre informações sobre produtos, recursos e serviços que já não estão disponíveis ou serão descontinuados.
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
