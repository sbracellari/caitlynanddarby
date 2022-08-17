import React from 'react'

// mui
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import { Instagram } from '@mui/icons-material/' // icons
import { useTheme } from '@mui/material/styles' // theme

// custom
import { ImageGrid } from './ImageGrid'

export function Engagement(props) {
  const theme = useTheme()
  const { engagement } = props

  return (
    <Box sx={{ pt: 4, pb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant='h5' sx={{ pb: 1 }}>
        ENGAGEMENT SESSION
      </Typography>
      <Typography>
        Photos were taken at Maumee Bay State Park in Ohio by SamiRose Photography.
        <Tooltip title='samirosephotos'>
          <IconButton
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.instagram.com/samirosephotos/'
          >
            <Instagram sx={{ color: theme.palette.secondary.main }} />
          </IconButton>
        </Tooltip>
      </Typography>
      <ImageGrid topLabel={false} bottomLabel={false} photos={engagement} cols={3} />
    </Box>
  )
}
