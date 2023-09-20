import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cadastro from './cadastro'
import Camisas from './camisas'
import EditaCamisas from './EditaCamisas';
import Login from './login';
import EsqueciSenha from './EsqueciSenha'
import EmailEnviado from './EmailEnviado'
import Suporte from './suporte'
import Home from './home'

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
    path: "/app",
    element: <App />
  }, 
  {
    path: "/suporte",
    element: <Suporte />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login /> 
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/camisas",
    element: <Camisas />
  },
  {
    path: "/edicao/:id",
    element: <EditaCamisas />
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
