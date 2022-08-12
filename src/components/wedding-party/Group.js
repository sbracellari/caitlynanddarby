import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Collapse, Divider, IconButton } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material/styles'

export function Group(props) {
  const { expanded, handleExpand, group, name, index } = props

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }))

  return (
    <>
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, mt: 2 }}>
          <Typography sx={{ color: 'white', fontSize: 25 }}>{name}</Typography>
          <ExpandMore expand={expanded} onClick={() => handleExpand(expanded, index)}>
            <ExpandMoreIcon sx={{ color: 'white' }} />
          </ExpandMore>
        </Box>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <Box sx={{ m: 2 }}>
            {group.map((g, i) => (
              <Box
                key={i}
                sx={{ mb: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <div
                  style={{
                    marginBottom: '20px',
                    height: 300,
                    width: 300,
                    border: '2px solid #78866b',
                    borderRadius: '50%',
                  }}
                >
                  <img
                    style={{ width: 300, height: 300, borderRadius: '50%', color: 'white' }}
                    alt={g.name}
                    src={g.image}
                  />
                </div>
                <Typography sx={{ color: 'white' }}>
                  {g.name} — {g.title}
                </Typography>
                <Typography sx={{ color: 'white', fontSize: 14 }}>{g.description}</Typography>
              </Box>
            ))}
          </Box>
        </Collapse>
      </Box>
      <Divider sx={{ background: 'white', width: '85%', opacity: '0.5' }} />
    </>
  )
}
