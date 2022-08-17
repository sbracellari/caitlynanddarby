import React from 'react'

// mui
import { Box, Typography } from '@mui/material'

// custom
import { ImageGrid } from './ImageGrid'

export function Pets(props) {
  const { pets } = props

  return (
    <Box sx={{ pt: 4, pb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant='h5' sx={{ pb: 1 }}>
        OUR PETS
      </Typography>
      <ImageGrid topLabel={false} bottomLabel={true} photos={pets} cols={2} />
    </Box>
  )
}
