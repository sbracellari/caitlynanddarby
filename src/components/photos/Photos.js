import React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { Proposal } from './Proposal'
import { Engagement } from './Engagement'
import { Pets } from './Pets'
import { Misc } from './Misc'

export function Photos() {
  return (
    <Box
      sx={{ width: '75%', mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Proposal />
      <Divider sx={{ background: 'white', width: '85%', opacity: '0.5' }} />
      <Engagement />
      <Divider sx={{ background: 'white', width: '85%', opacity: '0.5' }} />
      <Pets />
      <Divider sx={{ background: 'white', width: '85%', opacity: '0.5' }} />
      <Misc />
      <Divider sx={{ background: 'white', width: '85%', opacity: '0.5' }} />
    </Box>
  )
}
