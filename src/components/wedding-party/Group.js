import React from 'react'

// mui
import { Box, Collapse, Divider, IconButton, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material' // icons
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles' // theme

export function Group(props) {
  const theme = useTheme()
  const { expanded, handleExpand, group, name, index } = props

  const Expand = styled((props) => {
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
          <Typography variant='h6'>{name}</Typography>
          <Expand expand={expanded} onClick={() => handleExpand(expanded, index)}>
            <ExpandMore sx={{ color: theme.palette.secondary.main }} />
          </Expand>
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
                    style={{ width: 300, height: 300, borderRadius: '50%' }}
                    alt={g.name}
                    src={g.image}
                  />
                </div>
                <Typography>
                  {g.name} — {g.title}
                </Typography>
                <Typography>{g.description}</Typography>
              </Box>
            ))}
          </Box>
        </Collapse>
      </Box>
      <Divider />
    </>
  )
}
