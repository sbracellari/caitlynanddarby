import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Masonry from '@mui/lab/Masonry'
import { engagementPhotos } from '../../img/engagement/engagement'

export function Engagement() {
  return (
    <Box sx={{ pt: 4, pb: 4 }}>
      <Typography sx={{ pb: 1, color: 'white', fontSize: 30, textAlign: 'center' }}>
        ENGAGEMENT SESSION
      </Typography>
      <Typography sx={{ color: 'white', fontSize: 14, textAlign: 'center', pb: 2 }}>
        Photos were taken at Maumee Bay State Park in Ohio by SamiRose Photography.{' '}
      </Typography>
      <Masonry columns={3} spacing={2}>
        {engagementPhotos.map((photo, i) => (
          <div key={i}>
            <img
              src={photo}
              alt='img'
              style={{
                borderRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  )
}
