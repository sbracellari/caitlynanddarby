import React from 'react'

// mui
import { Box } from '@mui/material'

// custom
import { ImageCarousel } from './ImageCarousel'

export function Misc(props) {
  const { misc } = props

  return (
    <Box sx={{ pt: 4, pb: 4, display: 'flex', justifyContent: 'center' }}>
      <ImageCarousel photos={misc} />
    </Box>
  )
}
