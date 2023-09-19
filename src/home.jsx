import React from 'react'
import {AppBar, Button, CssBaseline, Stack, Box, Toolbar, Typography, Link, Avatar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import Img from './Julinho.png';
import ImagesHome from './components/ImagesHome';
import ImagesCamisa from './components/ImagesCamisa';
import ImagesCamisa2 from './components/ImagesCamisa2';
import ImagesMarca from './components/ImagesMarca';
import ImagesAvatar from './components/ImagesAvatar';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">{'Copyright © '}
      <Link color="inherit" href={Img}> Surpresinha </Link>
      {' '} {new Date().getFullYear()} {'.'}
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
        <Box sx={{ width: '60%', textAlign: 'right' }}>
        <Typography fontSize={16} fontWeight="bold" > Fanáticos Shirt </Typography>
        </Box>
        <Box sx={{ mb: -1, width: '45%', textAlign: 'right' }}>
          <PersonIcon fontSize="large" ></PersonIcon>
        </Box>
          <Box sx={{width: '7%'}}>
            <a style={{color:"white", textDecoration:"none"}} href='http://localhost:3000/login'> <Typography fontSize={13}> Entrar </Typography></a>
            <a style={{color:"white", textDecoration:"none"}} href='http://localhost:3000/cadastro'> <Typography fontSize={13}> Cadastre-se </Typography></a>
          </Box>
        </Toolbar>
      </AppBar>
      <main>
        <Box sx={{pt: 8, pb: 6}}>
        <ImagesHome/>
        <ImagesCamisa />
        <ImagesAvatar />
        <ImagesCamisa2 />
          <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
              <Button variant="contained">Camisas de Futebol</Button>
              <a href='http://localhost:3000/produtos'><Button variant="outlined">Cadastrar Camisas</Button></a>
          </Stack>
        </Box>
      </main>
      <Box sx={{ p: 6 }} component="footer">
        <ImagesMarca /><br />
        <Typography variant="subtitle2" align="center" color="gray">
          Preços e condições de pagamento exclusivos para compras neste site. Evite comprar produtos mais baratos ou de outras lojas, pois você pode estar sendo enganado(a) por um golpista. Caso você compre os mesmos produtos em outras lojas, não nos responsabilizaremos por quaisquer problemas. 
        </Typography><br/>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}