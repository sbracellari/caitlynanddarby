import React, { useState } from 'react'
import { wp } from '../../data/wedding-party.js'
import { Box } from '@mui/material'
import { Group } from './Group'

export function WeddingParty() {
  const [expandedIndex, setExpandedIndex] = useState(0)
  const handleExpand = (expanded, index) => {
    expanded ? setExpandedIndex(-1) : setExpandedIndex(index)
  }

  return (
    <Box sx={{ m: 4, width: '75%' }}>
      {wp.map((group, i) => (
        <Box
          sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          key={i}
        >
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
