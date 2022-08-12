import { Badge } from '@mui/material'
import React from 'react'
import PlaceIcon from '@mui/icons-material/Place'

const Marker = ({ id }) => (
  <Badge
    badgeContent={id}
    sx={{
      '& .MuiBadge-badge': {
        background: 'white',
        right: '50%',
        top: '37%',
        borderRadius: '50%',
        fontSize: '11px',
      },
    }}
  >
    <PlaceIcon sx={{ color: 'red', width: '3rem', height: '3rem' }} />
  </Badge>
)

export default Marker
