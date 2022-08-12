import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: ['Libre Baskerville'],
  },
  palette: {
    primary: {
      main: '#201c1d',
    },
    secondary: {
      main: '#ffffff',
    },
  },
})

const root = createRoot(document.getElementById('caitlyn-darby'))
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
