import React from 'react'

// mui
import { Box, Divider } from '@mui/material/'

// custom
import { Proposal } from './Proposal'
import { Engagement } from './Engagement'
import { Pets } from './Pets'
import { Misc } from './Misc'

// img
import photos from '../../data/photos.json'

export function Photos() {
  return (
    <Box>
      <Proposal proposal={photos.proposal} />
      <Divider />
      <Engagement engagement={photos.engagement} />
      <Divider />
      <Pets pets={photos.pets} />
      <Divider />
      <Misc misc={photos.misc} />
      <Divider />
    </Box>
  )
}
