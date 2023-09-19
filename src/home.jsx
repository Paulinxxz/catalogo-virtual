import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import Img from './images/Captura de tela 2023-09-18 230314.png';
import Img2 from './images/Captura de tela 2023-09-18 230951.png';
import Img3 from './images/Captura de tela 2023-09-18 232034.png';
import Img4 from './images/Captura de tela 2023-09-18 231926.png';
import Img5 from './images/Captura de tela 2023-09-18 232006.png';
import Img6 from './images/Corinthians_simbolo.png';
import Img7 from './images/Palmeiras_logo.svg.webp';
import Img8 from './images/Santos_Logo.png';
import Img9 from './images/São_Paulo_Futebol_Clube.png';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={Img}>
        Surpresinha
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
      <AppBar  position="relative">
        <Toolbar>
        <Box
        sx={{
          width: '60%',
          textAlign: 'right'
        }}
        >
        <Typography fontSize={16} fontWeight="bold" >
          Fanáticos Shirt
        </Typography>
        </Box>
        <Box sx={{
          mb: -1,
          width: '45%',
          textAlign: 'right'
        }}>
        <PersonIcon fontSize="large" ></PersonIcon>
        </Box>
        <Box sx={{
          width: '7%',
        }}>
        <a href='http://localhost:3000/login' ><Typography fontSize={13}>
          Entrar
        </Typography></a>
        <a href='http://localhost:3000/cadastro' ><Typography fontSize={13}>
          Cadastre-se
        </Typography></a>
        </Box>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
        <Typography variant="h4" align="left" fontWeight="bold">
          Seu time do coração:
        </Typography>
          <Box>
              <img src={Img6}/>
              <img src={Img7}/>
              <img src={Img8}/>
              <img src={Img9}/>
          </Box>
        <Typography variant="h4" align="left" fontWeight="bold">
          Camisas em destaque:
        </Typography>
          <Container maxWidth="sm">
            <Box>
              <img src={Img2}/>
              <img src={Img3}/>
              <img src={Img4}/>
              <img src={Img5}/>
              </Box>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Camisas de Futebol</Button>
              <a href='http://localhost:3000/produtos'><Button variant="outlined">Cadastrar Camisas</Button></a>
            </Stack>
          </Container>
        </Box>
      </main>
      <Box sx={{ p: 6 }} component="footer">
        <Typography
          variant="subtitle2"
          align="center"
          color="gray"
        >
          Preços e condições de pagamento exclusivos para compras neste site. Evite comprar produtos mais baratos ou de outras lojas, pois você pode estar sendo enganado(a) por um golpista. Caso você compre os mesmos produtos em outras lojas, não nos responsabilizaremos por quaisquer problemas. 
        </Typography><br />
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}