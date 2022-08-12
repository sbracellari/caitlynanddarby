import React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { Proposal } from './Proposal'
import { Engagement } from './Engagement'
import { Pets } from './Pets'
import { Misc } from './Misc'
// import useMediaQuery from '@mui/material/useMediaQuery'
// import { useTheme } from '@mui/material/styles'

export function Photos() {
  // const theme = useTheme()
  // const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{ width: '75%', mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Proposal mobile />
      <Divider sx={{ background: 'white', width: '85%', opacity: '0.5' }} />
      <Engagement mobile />
      <Divider sx={{ background: 'white', width: '85%', opacity: '0.5' }} />
      <Pets mobile />
      <Divider sx={{ background: 'white', width: '85%', opacity: '0.5' }} />
      <Misc mobile />
      <Divider sx={{ background: 'white', width: '85%', opacity: '0.5' }} />
    </Box>
  )
}
