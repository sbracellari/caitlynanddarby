import React from 'react'

// mui
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles' // theme
import useMediaQuery from '@mui/material/useMediaQuery' // mobile

// img
import photos from '../data/photos.json'

export function Home(props) {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <img src={photos.home} alt='home page' style={{ width: mobile ? '100%' : '85%' }} />
      </Box>
      <Box sx={{ m: 4, justifyContent: 'center', display: 'flex' }}>
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
          <Typography variant={mobile ? 'h6' : 'h4'}>JULY 8 {<br></br>} 2023</Typography>
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
          <Typography variant={mobile ? 'h6' : 'h4'}>CHELSEA {<br></br>} MI</Typography>
        </Box>
      </Box>
    </Box>
  )
}
