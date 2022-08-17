import React, { useState } from 'react'

// mui
import { Box } from '@mui/material'

// custom
import { Group } from './Group'

// data
import wp from '../../data/wedding-party.json'

export function WeddingParty() {
  const [expandedIndex, setExpandedIndex] = useState(0)
  const handleExpand = (expanded, index) => {
    expanded ? setExpandedIndex(-1) : setExpandedIndex(index)
  }

  return (
    <Box sx={{ width: '100%' }}>
      {wp.map((group, i) => (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} key={i}>
          <Group
            expanded={expandedIndex === i}
            handleExpand={handleExpand}
            group={group.party}
            name={group.name}
            index={i}
          />
        </Box>
      ))}
    </Box>
  )
}
