import React from 'react'

// mui
import { Box, Typography } from '@mui/material'

// util
import { getRemainingTime } from '../util/util'

// img
import photos from '../data/photos.json'

const bullet = (
  <Box component='span' sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
)

export function Header() {
  const daysLeft = getRemainingTime()

  return (
    <Box>
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
        <img src={photos.header} alt='flowers' style={{ width: '95%', height: '95%' }} />
      </Box>
      <Box sx={{ p: '10%', pb: 2 }}>
        <Typography variant='h3'>CAITLYN {'&'} DARBY</Typography>
      </Box>
      <Box sx={{ pt: 2, pb: 4 }}>
        <Typography variant='h6' sx={{ margin: 0 }}>
          JULY 8, 2023 {bullet} CHELSEA, MI
        </Typography>
        <Typography variant='h6' sx={{ margin: 0 }}>
          {daysLeft === 1 ? `${daysLeft} DAY TO GO!` : `${daysLeft} DAYS TO GO!`}
        </Typography>
      </Box>
    </Box>
  )
}
