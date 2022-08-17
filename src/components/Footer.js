import React from 'react'

// mui
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles' // theme
import useMediaQuery from '@mui/material/useMediaQuery' // mobile

export function Footer() {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', pb: 2 }}>
      <Box sx={{ p: 2, borderBottom: '1px solid white', width: '150px' }}>
        <Typography variant={mobile ? 'h4' : 'h3'}>C{'&'}D</Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography variant='h6' sx={{ margin: 0 }}>
          7.8.2023
        </Typography>
      </Box>
    </Box>
  )
}
