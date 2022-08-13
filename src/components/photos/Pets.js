import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import dogs from '../../img/dogs.jpeg'
import angel from '../../img/angel.jpeg'

export function Pets() {
  return (
    <Box sx={{ pt: 4, pb: 4 }}>
      <Typography sx={{ color: 'white', fontSize: 30, textAlign: 'center', pb: 1 }}>
        OUR PETS
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ color: 'white', fontSize: 14, pb: 2 }}>
            {' '}
            Belle (Beagle) and Maverick (Pomsky) are the dogs of the couple. They have been best
            friends since they met when they were just puppies.{' '}
          </Typography>
          <img src={dogs} alt='belle and maverick' style={{ width: '30%' }} />
        </Box>
        <Box>
          <Typography sx={{ color: 'white', opacity: '85%', pt: 2, pb: 2 }}>* * *</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ color: 'white', fontSize: 14, pb: 2 }}>
            {' '}
            Angel was the Brides cat before she met the Groom. However, Angel quickly warmed up to
            the Groom and he is now, without a doubt, Angel's favorite human.{' '}
          </Typography>
          <img src={angel} alt='angel' style={{ width: '30%' }} />
        </Box>
      </Box>
    </Box>
  )
}
