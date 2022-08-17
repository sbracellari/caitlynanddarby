import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: ['Libre Baskerville'],
    allVariants: { color: 'white', textAlign: 'center' },
    body1: { fontSize: '0.9rem' },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          background: '#fff',
          width: '100%',
          opacity: '0.5',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#201c1d',
    },
    secondary: {
      main: '#fff',
    },
  },
})

const root = createRoot(document.getElementById('caitlynanddarby'))
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
