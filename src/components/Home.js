import React from 'react'
import { Box, Typography } from '@mui/material'
import home from '../img/home.jpeg'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

export function Home() {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box sx={{ m: 4, width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <img src={home} alt='home page' style={{ width: '85%' }} />
      </Box>
      <Box sx={{ m: 4, justifyContent: 'center', color: 'white', display: 'flex' }}>
        <Box
          sx={{
            borderRight: '1px solid white',
            p: '20px',
            pl: 0,
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography sx={{ fontSize: mobile ? 20 : 35, textAlign: 'center' }}>
            JULY 8 {<br></br>} 2023
          </Typography>
        </Box>
        <Box
          sx={{
            p: '20px',
            pr: 0,
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: mobile ? 20 : 35, textAlign: 'center' }}>
            CHELSEA {<br></br>} MI
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
