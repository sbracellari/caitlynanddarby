import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export function Footer() {
  const theme = useTheme()

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', pb: 2 }}>
      <Box sx={{ m: 2, borderBottom: '1px solid white', width: '150px', textAlign: 'center' }}>
        <Typography sx={{ fontSize: 46, color: theme.palette.secondary.main }}>C{'&'}D</Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: 18, margin: 0, color: theme.palette.secondary.main }}>
          7.8.2023
        </Typography>
      </Box>
    </Box>
  )
}
