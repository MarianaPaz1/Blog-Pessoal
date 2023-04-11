// import { useState } from 'react'
// import './App.css'
// import Home from './pages/home/Home'

// function App() {
  
//   const [count, setCount] = useState(0)
//   return (
//      <Home/>

//   )
// }

// export default App


import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey, brown} from '@mui/material/colors';
import { PaletteMode } from '@mui/material';
import Home from './pages/home/Home'
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
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        // p: 3,
      }}
    >
        <Home/>
      
    </Box>
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