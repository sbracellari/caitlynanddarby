import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import proposal from '../../img/proposal.jpeg'

export function Proposal() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 2,
        pb: 4,
        textAlign: 'center',
      }}
    >
      <Typography sx={{ color: 'white', fontSize: 30, textAlign: 'center', pb: 1 }}>
        THE PROPOSAL
      </Typography>
      <img src={proposal} alt='proposal' style={{ width: '50%' }} />
      <Typography sx={{ pt: 2, color: 'white', fontSize: 14 }}>
        {' '}
        Darby proposed to Caitlyn in Halmstad, Sweden with Maverick in attendance.{' '}
      </Typography>
    </Box>
  )
}
