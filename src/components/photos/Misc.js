import React from 'react'

// mui
import { Box } from '@mui/material'

// custom
import { ImageGrid } from './ImageGrid'

export function Misc(props) {
  const { misc } = props

  return (
    <Box sx={{ pt: 4, pb: 4, display: 'flex', justifyContent: 'center' }}>
      <ImageGrid topLabel={true} bottomLabel={false} photos={misc} cols={2} />
    </Box>
  )
}
