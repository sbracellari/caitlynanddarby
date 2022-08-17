import React from 'react'

// mui
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles' // theme
import useMediaQuery from '@mui/material/useMediaQuery' // mobile

// custom
import { ImageGrid } from './ImageGrid'

export function Proposal(props) {
  const theme = useTheme()
  const { proposal } = props
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 2,
        pb: 4,
      }}
    >
      <Box sx={{ width: mobile ? '100%' : '70%' }}>
        <Typography variant='h5' sx={{ pb: 1 }}>
          THE PROPOSAL
        </Typography>
        <ImageGrid topLabel={false} bottomLabel={true} photos={proposal} cols={1} />
      </Box>
    </Box>
  )
}
