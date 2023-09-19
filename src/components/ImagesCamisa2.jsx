import { Typography, Container, Box, Rating } from "@mui/material"
import pal2 from './images/ccamisa pal.jpeg';
import cor2 from './images/ccamisa cor.jpeg';
import fla2 from './images/ccamisa fla.jpeg';
import vit2 from './images/ccamisa vit.jpeg';
import for2 from './images/ccamisa for.jpeg';
import cea2 from './images/ccamisa cea.jpeg';
import bah2 from './images/ccamisa bah.jpeg';
import { useState } from "react";

function ImagesCamisa2() {

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
                Edições especiais:
            </Typography><br />
            <Container maxWidth="large">
                <Box display="flex" align="center" gap="20px">
                    <Box fontSize="13px" fontWeight="bold" >
                        <span>Camisa Puma Palmeiras 22/23 - Arrancada Heróica</span>
                        <img style={{ width: '195px', height: '210px' }} src={pal2} />
                        <Box>
                            <Typography align="center" style={{ fontSize: '15px', fontWeight:'bold' }} >R$129,99</Typography>
                            <Rating style={{ fontSize: 'large'}}
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </Box>
                    </Box>
                    <Box fontSize="13px" fontWeight="bold" >
                        <span>Camisa Leão Fortaleza 23/24 - Edição Especial</span>
                        <img style={{ width: '195px', height: '210px' }} src={for2} />
                        <Box>
                            <Typography align="center" style={{ fontSize: '15px', fontWeight:'bold' }} >R$100,00</Typography>
                            <Rating style={{ fontSize: 'large'}}
                                value={value1}
                                onChange={(event, newValue) => {
                                    setValue1(newValue);
                                }}
                            />
                        </Box>
                    </Box>
                    <Box fontSize="13px" fontWeight="bold" >
                        <span>Camisa Nike Corinthians 23/24 - Edição Especial</span>
                        <img style={{ width: '195px', height: '210px' }} src={cor2} />
                        <Box>
                            <Typography align="center" style={{ fontSize: '15px', fontWeight:'bold'}} >R$149,99</Typography>
                            <Rating style={{ fontSize: 'large'}}
                                value={value2}
                                onChange={(event, newValue) => {
                                    setValue2(newValue);
                                }}
                            />
                        </Box>
                    </Box>
                    <Box fontSize="13px" fontWeight="bold" >
                        <span>Camisa Adidas Flamengo 22/23 - Edição Especial</span>
                        <img style={{ width: '195px', height: '210px' }} src={fla2} />
                        <Box>
                            <Typography align="center" style={{ fontSize: '15px', fontWeight:'bold' }} >R$159,90</Typography>
                            <Rating style={{ fontSize: 'large'}}
                                value={value3}
                                onChange={(event, newValue) => {
                                    setValue3(newValue);
                                }}
                            />
                        </Box>
                    </Box>
                    <Box fontSize="13px" fontWeight="bold" >
                        <span>Camisa Volt Vitória 23/24 - Homenagem Elevador Lacerda</span>
                        <img style={{ width: '195px', height: '210px' }} src={vit2} />
                        <Box>
                            <Typography align="center" style={{ fontSize: '15px', fontWeight:'bold' }} >R$79,90</Typography>
                            <Rating style={{ fontSize: 'large'}}
                                value={value4}
                                onChange={(event, newValue) => {
                                    setValue4(newValue);
                                }}
                            />
                        </Box>
                    </Box>
                    <Box fontSize="13px" fontWeight="bold" >
                        <span>Camisa Vozão Ceará 22/23 - Edição Copa do Nordeste</span>
                        <img style={{ width: '195px', height: '210px' }} src={cea2} />
                        <Box>
                            <Typography align="center" style={{ fontSize: '15px', fontWeight:'bold' }} >R$129,99</Typography>
                            <Rating style={{ fontSize: 'large'}}
                                value={value5}
                                onChange={(event, newValue) => {
                                    setValue5(newValue);
                                }}
                            />
                        </Box>
                    </Box>
                    <Box fontSize="13px" fontWeight="bold" >
                        <span>Camisa Esquadrão Bahia 22/23 - Comemorativa City</span>
                        <img style={{ width: '195px', height: '210px' }} src={bah2} />
                        <Box>
                            <Typography align="center" style={{ fontSize: '15px', fontWeight:'bold' }} >R$109,99</Typography>
                            <Rating style={{ fontSize: 'large'}}
                                value={value6}
                                onChange={(event, newValue) => {
                                    setValue6(newValue);
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default ImagesCamisa2