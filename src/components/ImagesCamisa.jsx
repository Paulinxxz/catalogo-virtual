import { Typography, Container, Box, Rating } from "@mui/material"
import sp from './images/camisa sp.jpeg';
import cor from './images/camisa cor.jpeg';
import fla from './images/camisa fla.jpeg';
import pal from './images/camisa pal.jpeg';
import gre from './images/camisa gre.jpeg';
import flu from './images/camisa flu.jpeg';
import atl from './images/camisa atl.jpeg';
import { useState } from "react";


function ImagesCamisa() {

  const [value7, setValue7] = useState(2);
  const [value8, setValue8] = useState(2);
  const [value9, setValue9] = useState(2);
  const [value10, setValue10] = useState(2);
  const [value11, setValue11] = useState(2);
  const [value12, setValue12] = useState(2);
  const [value13, setValue13] = useState(2);

  return (

    <>
      <Typography variant="h5" align="left" fontWeight="bold"><br />
        Camisas em destaque:
      </Typography><br />
      <Container maxWidth="sx">
        <Box display="flex" align="center" gap="20px">
          <Box fontSize="13px" fontWeight="bold" >
            <span>Camisa Adidas São Paulo 23/24 - Jogo 2</span>
            <img style={{ width: '195px', height: '210px' }} src={sp} />
            <Box>
              <Typography align="center" style={{ fontSize: '15px', fontWeight: 'bold' }} >R$349,99</Typography>
              <Rating style={{ fontSize: 'large' }}
                value={value7}
                onChange={(event, newValue) => {
                  setValue7(newValue);
                }}
              />
            </Box>
          </Box>
          <Box fontSize="13px" fontWeight="bold" >
            <span>Camisa Nike Corinthians 23/24 - Jogo 2</span>
            <img style={{ width: '195px', height: '210px' }} src={cor} />
            <Box>
              <Typography align="center" style={{ fontSize: '15px', fontWeight: 'bold' }} >R$299,99</Typography>
              <Rating style={{ fontSize: 'large' }}
                value={value8}
                onChange={(event, newValue) => {
                  setValue8(newValue);
                }}
              />
            </Box>
          </Box>
          <Box fontSize="13px" fontWeight="bold" >
            <span>Camisa Adidas Flamengo 23/24 - Jogo 1</span>
            <img style={{ width: '195px', height: '210px' }} src={fla} />
            <Box>
              <Typography align="center" style={{ fontSize: '15px', fontWeight: 'bold' }} >R$349,99</Typography>
              <Rating style={{ fontSize: 'large' }}
                value={value9}
                onChange={(event, newValue) => {
                  setValue9(newValue);
                }}
              />
            </Box>
          </Box>
          <Box fontSize="13px" fontWeight="bold" >
            <span>Camisa Puma Palmeiras 23/24 - Jogo 1</span>
            <img style={{ width: '195px', height: '210px' }} src={pal} />
            <Box>
              <Typography align="center" style={{ fontSize: '15px', fontWeight: 'bold' }} >R$263,99</Typography>
              <Rating style={{ fontSize: 'large' }}
                value={value10}
                onChange={(event, newValue) => {
                  setValue10(newValue);
                }}
              />
            </Box>
          </Box>
          <Box fontSize="13px" fontWeight="bold" >
            <span>Camisa Umbro Grêmio 23/24 - Jogo 1</span>
            <img style={{ width: '195px', height: '210px' }} src={gre} />
            <Box>
              <Typography align="center" style={{ fontSize: '15px', fontWeight: 'bold' }} >R$349,99</Typography>
              <Rating style={{ fontSize: 'large' }}
                value={value11}
                onChange={(event, newValue) => {
                  setValue11(newValue);
                }}
              />
            </Box>
          </Box>
          <Box fontSize="13px" fontWeight="bold" >
            <span>Camisa Umbro Fluminense 23/24 - Jogo 1</span>
            <img style={{ width: '195px', height: '210px' }} src={flu} />
            <Box>
              <Typography align="center" style={{ fontSize: '15px', fontWeight: 'bold' }} >R$299,99</Typography>
              <Rating style={{ fontSize: 'large' }}
                value={value12}
                onChange={(event, newValue) => {
                  setValue12(newValue);
                }}
              />
            </Box>
          </Box>
          <Box fontSize="13px" fontWeight="bold" >
            <span>Camisa Adidas Atlético Mineiro 23/24 - Jogo 1</span>
            <img style={{ width: '195px', height: '210px' }} src={atl} />
            <Box>
              <Typography align="center" style={{ fontSize: '15px', fontWeight: 'bold' }} >R$229,99</Typography>
              <Rating style={{ fontSize: 'large' }}
                value={value13}
                onChange={(event, newValue) => {
                  setValue13(newValue);
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container><br /><br />
    </>
  )
}

export default ImagesCamisa