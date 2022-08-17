import React from 'react'

// mui
import { Badge } from '@mui/material'
import { Place } from '@mui/icons-material/' // icons
import { useTheme } from '@mui/material/styles' // theme

export function Marker(props) {
  const { id } = props
  const theme = useTheme()

  return (
    <Badge
      badgeContent={id}
      sx={{
        '& .MuiBadge-badge': {
          background: theme.palette.secondary.main,
          right: '50%',
          top: '40%',
          borderRadius: '50%',
        },
      }}
    >
      <Place sx={{ color: 'red', width: '3rem', height: '3rem' }} />
    </Badge>
  )
}
