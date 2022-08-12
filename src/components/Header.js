import React from 'react'
import { Box, Typography } from '@mui/material'
import { getRemainingTime } from '../util/util'
import { useTheme } from '@mui/material/styles'
import flowers from '../img/flowers.webp'

const bullet = (
  <Box component='span' sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
)

export function Header() {
  const daysLeft = getRemainingTime()
  const theme = useTheme()

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          display: 'flex',
          justifyContent: 'start',
          overflow: 'hidden',
        }}
      >
        <img src={flowers} alt='flowers' style={{ width: '95%', height: '95%' }} />
      </Box>
      <Box sx={{ p: '10%', pb: 2 }}>
        <Typography
          sx={{ fontStretch: 'expanded', fontSize: 50, color: theme.palette.secondary.main }}
        >
          CAITLYN {'&'} DARBY
        </Typography>
      </Box>
      <Box sx={{ pt: 2, pb: 4 }}>
        <Typography sx={{ fontSize: 18, margin: 0, color: theme.palette.secondary.main }}>
          JULY 8, 2023 {bullet} CHELSEA, MI
        </Typography>
        <Typography sx={{ fontSize: 18, margin: 0, color: theme.palette.secondary.main }}>
          {daysLeft} DAYS TO GO!
        </Typography>
      </Box>
    </Box>
  )
}
