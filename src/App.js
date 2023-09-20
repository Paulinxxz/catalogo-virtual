import { useEffect, useState } from "react";
import Produto from "./components/Produto";
import { Container, AppBar, CssBaseline, } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReplyIcon from '@mui/icons-material/Reply';

function App() {

  const [produto, setProduto] = useState();
  const [erro, setErro] = useState();
  const defaultTheme = createTheme();


  useEffect(() => {

    const usuario = localStorage.getItem( "usuario" );


    fetch(process.env.REACT_APP_BACKEND + "produtos/" + usuario, {
      method:"GET",
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((resposta) => resposta.json())
      .then((json) => { setProduto(json) })
      .catch((erro) => { setErro(true) })
  }, [])

  function Excluir(evento, id) {
    evento.preventDefault();
    fetch(process.env.REACT_APP_BACKEND + "produtos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          id: id,
          usuario: localStorage.getItem("usuario")
        })
    })
      .then((resposta) => resposta.json())
      .then((json) => {
        const novaLista = produto.filter((produto) => produto._id !== id);
        setProduto(novaLista);
      })
      .catch((erro) => { setErro(true) })
  }

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppBar position="relative" sx={{
          height: 60,
        }}>
        <a href="http://localhost:3000/camisas" ><ReplyIcon fontSize="large" sx={{ml: 2, mt: 1, color: 'white'}} ></ReplyIcon></a>

        </AppBar>
      </ThemeProvider>
      <Container sx={{
        display: "flex",
        flexFlow: "row",
        flexWrap: "wrap",
        gap: "2rem",
      }}>
        {produto && (
          produto.map((produto, index) => (
            <Produto
              imagem={produto.imagem}
              titulo={produto.titulo}
              descricao={produto.descricao}
              categoria={produto.categoria}
              ano={produto.ano}
              duracao={produto.duracao}
              excluir={(e) => Excluir(e, produto._id)}
              id={produto._id}
            />
          ))
        )}
      </Container>
    </>
  );
}
export default App;
