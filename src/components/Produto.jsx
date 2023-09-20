import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Link, Button } from "@mui/material"

function Camisa(props) {
  return (
    <>
    <Card sx={{ maxWidth: 280}} >
        <CardActionArea>
            <CardMedia sx={{mt:5}}
                component="img"
                height="280"
                image={props.imagem}
                alt={props.titulo}
            />
            <CardContent>
                <Typography variant="h5" fontWeight="bold" component="div" >
                    {props.titulo}
                </Typography>
                <Typography variant="body3" color="text.secondary" >
                    {props.descricao}
                </Typography>
                <Grid container>
                    <Grid item xs={4} fontSize="14px" fontWeight="bold" >
                        <span>{props.categoria}</span>
                    </Grid>
                    <Grid item xs={4}>
                        <span>{props.ano}</span>
                    </Grid>
                    <Grid item xs>
                        <span>{props.duracao}</span>
                    </Grid>
                </Grid>
            </CardContent>
        </CardActionArea>
        <Grid item xs={6}>
        <button onClick={props.excluir}>Excluir</button>
        </Grid>
        <Grid container>
            <Grid item xs={6} sx={{ml: 28, mb: 2}} >
                <Link href={ "edicao/" + props.id } >Editar</Link>
            </Grid>
        </Grid>
    </Card>
    </>
  )
}

export default Camisa;