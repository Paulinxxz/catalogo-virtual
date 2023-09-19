import React from 'react'
import { Typography, Container, Box } from '@mui/material'
import nike from './images/nike.png';
import adidas from './images/adidas.png';
import jordan from './images/jordan.png';
import puma from './images/puma.png';
import kappa from './images/kappa.png';

function ImagesMarca() {
  return (
    <>
    <Typography variant="h6" align="center" fontWeight="bold" >
          Nossas marcas
    </Typography><br />
    <Container maxWidth="large">
        <Box display="flex" gap="100px" justifyContent="center">
            <img style={{ width: '50px', height: '50px'}} src={nike}/>
            <img style={{ width: '50px', height: '50px'}} src={adidas}/>
            <img style={{ width: '50px', height: '50px'}} src={jordan}/>
            <img style={{ width: '50px', height: '50px'}} src={puma}/>
            <img style={{ width: '70px', height: '50px'}} src={kappa}/>
        </Box>
    </Container>
    </>
  )
}

export default ImagesMarca