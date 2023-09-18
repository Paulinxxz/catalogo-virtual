import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cadastro from './cadastro'
import Produtos from './produtos'
import EditaProdutos from './EditaProdutos';
import Login from './login';
import Cadastro2 from './cadastro2'
import Produtos2 from './produtos2'
import Login2 from './login2'
import EsqueciSenha from './EsqueciSenha'
import EmailEnviado from './EmailEnviado'
import Suporte from './suporte'

const theme = createTheme({
  palette: {
      mode: 'light',
      primary: {
        main: '#247807',
      },
      secondary: {
        main: '#4778f7',
      },
      error: {
        main: '#901a1a',
      },
      warning: {
        main: '#fdad65',
      },
      info: {
        main: '#2c79a2',
      },
      success: {
        main: '#438a47',
      },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, 
  {
    path: "/suporte",
    element: <Suporte />
  },
  {
    path: "/login",
    element: <Login /> 
  },
  {
    path: "/login2",
    element: <Login2 /> 
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/cadastro2",
    element: <Cadastro2 /> 
  },
  {
    path: "/produtos",
    element: <Produtos />
  },
  {
    path: "/produtos2",
    element: <Produtos2 />
  },
  {
    path: "/edicao/:id",
    element: <EditaProdutos />
  },
  {
    path: "/esquecisenha",
    element: <EsqueciSenha />
  },
  {
    path: "/emailenviado",
    element: <EmailEnviado />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
