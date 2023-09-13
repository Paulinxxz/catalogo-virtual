import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from './login';
import Cadastro from './cadastro'
import Filmes from './filmes'
import EditaFilmes from './EditaFilmes';
import Login2 from './login2';

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
    path: "/login",
    element: <Login /> 
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/filmes",
    element: <Filmes />
  },
  {
    path: "/edicao/:id",
    element: <EditaFilmes />
  },
  {
    path: "/login2",
    element: < Login2/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
