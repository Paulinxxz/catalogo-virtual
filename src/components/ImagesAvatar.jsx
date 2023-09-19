import React from 'react'
import { Avatar, Container, Box } from '@mui/material'
import cassio from './images/cassio.png'
import marta from './images/marta.png'
import haaland from './images/haaland.png'
import pele from './images/pele.png'
import selecoes from './images/selecoes.png'

function ImagesAvatar() {
    return (
        <>
            <Container maxWidth="large">
                <Box display='flex' align="center" >
                    <Box pl={'175px'} fontWeight="bold">
                        <Avatar src={cassio} sx={{ width: 85, height: 85 }} ></Avatar>
                        <span>Brasileirão</span>
                    </Box>
                    <Box pl={'175px'} fontWeight="bold">
                        <Avatar src={marta} sx={{ width: 85, height: 85 }} ></Avatar>
                        <span>Feminino</span>
                    </Box>
                    <Box pl={'175px'} fontWeight="bold">
                        <Avatar src={haaland} sx={{ width: 85, height: 85 }} ></Avatar>
                        <span>Europeus</span>
                    </Box>
                    <Box pl={'175px'} fontWeight="bold">
                        <Avatar src={pele} sx={{ width: 85, height: 85 }} ></Avatar>
                        <span>Retrô</span>
                    </Box>
                    <Box pl={'175px'} fontWeight="bold">
                        <Avatar src={selecoes} sx={{ width: 85, height: 85 }} ></Avatar>
                        <span>Seleções</span>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default ImagesAvatar