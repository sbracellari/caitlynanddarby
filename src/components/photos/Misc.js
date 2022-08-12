import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import tigers from '../../img/misc0.jpeg'

export function Misc(props) {
  // const { mobile } = props

  return (
    <Box sx={{ pt: 4, pb: 4 }}>
      <Box
        sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}
      >
        <img src={tigers} alt='caitlyn and darby at a tigers game' style={{ width: '50%' }} />
        <Typography sx={{ color: 'white', fontSize: 14, pt: 2 }}>
          {' '}
          In the off season, the Bride and Groom love to travel and go to Tigers games! Go Tigers!
        </Typography>
      </Box>
    </Box>
  )
}
