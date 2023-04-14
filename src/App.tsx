import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey, brown } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import CadastroUsuario from './pages/cadastrarUsuario/CadastroUsuario';
import './App.css'

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === 'light' && {
        main: amber[500],
      }),
    },
    ...(mode === 'light' && {
      background: {
        default: brown[500],
        paper: brown[500],
      },
    }),
    text: {
      ...(mode === 'dark'
        ? {
          primary: grey[50],
          secondary: grey[500],
        }
        : {
          primary: '#fff',
          secondary: grey[500],
        }),
    },
  },
});

function MyApp() {
  const theme = useTheme();
  return (
    <BrowserRouter>
           <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
          </Routes>
        </div>
        <Footer />
    </BrowserRouter >
  );
}

const darkModeTheme = createTheme(getDesignTokens('dark'));

export default function DarkThemeWithCustomPalette() {
  return (
    <ThemeProvider theme={darkModeTheme}>
      <MyApp />
    </ThemeProvider>
  );
}