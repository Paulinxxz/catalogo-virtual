import React from 'react'
import { AppBar, Button, CssBaseline, Stack, Box, Toolbar, Typography, Link } from '@mui/material';
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
            <AppBar position="relative">
                <Toolbar>
                    <Box sx={{ width: '50%' }}>
                        <Typography fontSize="16" fontWeight="bold" noWrap>
                            Fanatico Shirt
                        </Typography>
                    </Box>
                    <Box sx={{ width: '50%', display: "inline-flex", justifyContent: "end" }}>
                        <PersonIcon fontSize="large" sx={{ mt: 0.5, mr: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <a style={{ color: "white", textDecoration: "none" }} href='http://localhost:3000/login'>
                                <Typography fontSize={11}>Entrar</Typography>
                            </a>
                            <a style={{ color: "white", textDecoration: "none" }} href='http://localhost:3000/cadastro'>
                                <Typography fontSize={11}>Cadastrar</Typography>
                            </a>
                            <a style={{ color: "white", textDecoration: "none" }} href='http://localhost:3000/suporte'>
                                <Typography fontSize={11}>Suporte</Typography>
                            </a>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <main>
                <Box
                    sx={{ width: '100%' }}>
                    <Box sx={{ width: '100%' }}>
                        <ImagesHome />
                    </Box>
                    <Box>
                        <ImagesCamisa />
                        <ImagesAvatar />
                        <ImagesCamisa2 />
                    </Box>

                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button variant="contained">Ver Camisas</Button>
                        <a href='http://localhost:3000/camisas' ><Button variant="outlined">Cadastrar Camisa</Button></a>
                    </Stack>
                </Box>
            </main>
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <ImagesMarca /><br />
                <Typography
                    variant="subtitle2"
                    align="center"
                    color="gray"
                    component="p"
                >
                    Preços e condições de pagamento exclusivos para compras neste site. Evite comprar produtos mais baratos ou de outras lojas, pois você pode estar sendo enganado(a) por um golpista. Caso você compre os mesmos produtos em outras lojas, não nos responsabilizaremos por quaisquer problemas.
                </Typography><br />
                <Copyright />
            </Box>
        </ThemeProvider>
    );
}