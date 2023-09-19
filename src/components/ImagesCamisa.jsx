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

  const [value, setValue] = useState(2);
  const [value1, setValue1] = useState(2);
  const [value2, setValue2] = useState(2);
  const [value3, setValue3] = useState(2);
  const [value4, setValue4] = useState(2);
  const [value5, setValue5] = useState(2);
  const [value6, setValue6] = useState(2);

  return (

    <>
      <Typography variant="h5" align="left" fontWeight="bold"><br />
        Camisas em destaque:
      </Typography><br />
      <Container maxWidth="large">
        <Box display="flex" align="center" gap="20px">
          <Box fontSize="13px" fontWeight="bold" >
            <span>Camisa Adidas São Paulo 23/24 - Jogo 2</span>
            <img style={{ width: '195px', height: '210px' }} src={sp} />
            <Box>
              <Typography align="center" style={{ fontSize: '15px', fontWeight: 'bold' }} >R$349,99</Typography>
              <Rating style={{ fontSize: 'large' }}
                value={value6}
                onChange={(event, newValue) => {
                  setValue6(newValue);
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
                value={value6}
                onChange={(event, newValue) => {
                  setValue6(newValue);
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
                value={value6}
                onChange={(event, newValue) => {
                  setValue6(newValue);
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
                value={value6}
                onChange={(event, newValue) => {
                  setValue6(newValue);
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
                value={value6}
                onChange={(event, newValue) => {
                  setValue6(newValue);
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
                value={value6}
                onChange={(event, newValue) => {
                  setValue6(newValue);
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
                value={value6}
                onChange={(event, newValue) => {
                  setValue6(newValue);
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