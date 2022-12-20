import React, { useState } from 'react'

// mui
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

// util
import { mod } from '../../util/util'

export function ImageCarousel(props) {
  const { photos } = props
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = photos.length

  const handleDirectionChange = (direction) => {
    // it's fine to assume that not 'right' means 'left'
    // since these values are hardcoded
    direction === 'right'
      ? setActiveStep(() => mod(activeStep + 1, maxSteps))
      : setActiveStep(() => mod(activeStep - 1, maxSteps))
  }

  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', m: 1 }}>
          <IconButton onClick={() => handleDirectionChange('left')}>
            <KeyboardArrowLeft color='secondary' />
          </IconButton>
        </Box>
        <Box sx={{ height: '75vh', width: '50vh' }}>
          <Box
            id='stepper'
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${photos[activeStep].img})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', m: 1 }}>
          <IconButton onClick={() => handleDirectionChange('right')}>
            <KeyboardArrowRight color='secondary' />
          </IconButton>
        </Box>
      </Box>

      <MobileStepper
        variant='dots'
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        sx={{
          '&.MuiMobileStepper-root': {
            justifyContent: 'center',
          },
        }}
      />
    </Box>
  )
}
