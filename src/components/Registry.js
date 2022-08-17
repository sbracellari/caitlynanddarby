import React from 'react'

// mui
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material'
import { OpenInNew } from '@mui/icons-material' // icons
import { useTheme } from '@mui/material/styles' // theme
import useMediaQuery from '@mui/material/useMediaQuery' // mobile

// data
import registries from '../data/registries.json'

export function Registry() {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box sx={{ width: mobile ? '100%' : '60%' }}>
      <List>
        {registries.map((r, i) => (
          <ListItem
            key={i}
            secondaryAction={
              <IconButton target='_blank' rel='noopener noreferrer' href={r.link}>
                <Tooltip title='More Info'>
                  <OpenInNew sx={{ color: theme.palette.secondary.main }} />
                </Tooltip>
              </IconButton>
            }
          >
            <ListItemAvatar sx={{ height: '2rem', display: 'flex', alignItems: 'center' }}>
              <i class={r.icon} style={{ color: theme.palette.secondary.main }} />
            </ListItemAvatar>
            <ListItemText
              sx={{ display: 'flex', p: 1 }}
              primary={<Typography variant='h5'>{r.name}</Typography>}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
