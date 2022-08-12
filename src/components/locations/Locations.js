import React from 'react'
import { Box, IconButton, Typography, Tooltip, Link } from '@mui/material'
import { Map } from './Map'
import locations from '../../data/locations.json'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Marker from './Marker'

export function Locations() {
  return (
    <Box
      sx={{
        width: '75%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 3,
      }}
    >
      <Box sx={{ width: '100%', height: '90vh' }}>
        <Map />
      </Box>
      <Box>
        <List>
          {locations.map((l, i) => (
            <>
              <ListItem
                key={i}
                secondaryAction={
                  l.website && (
                    <IconButton target='_blank' rel='noopener noreferrer' href={l.website}>
                      <Tooltip title='More Info'>
                        <OpenInNewIcon sx={{ color: 'white' }} />
                      </Tooltip>
                    </IconButton>
                  )
                }
              >
                <ListItemAvatar>
                  <Marker id={l.id} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Box sx={{ display: 'flex', flexDirection: 'column', pr: 1 }}>
                        <Typography sx={{ color: 'white', fontSize: 25 }}>{l.name}</Typography>
                        <Typography
                          component={Link}
                          target='_blank'
                          rel='noopener noreferrer'
                          href={l.maps}
                          sx={{ textDecoration: 'underline', color: 'white', fontSize: 18, pb: 1 }}
                        >
                          {l.address}
                        </Typography>
                        {l.phone && (
                          <Typography
                            component='a'
                            href={`tel:${l.phone}`}
                            sx={{ color: 'white', fontSize: 18, pb: 1 }}
                          >
                            {l.phone}
                          </Typography>
                        )}
                      </Box>
                    </>
                  }
                  secondary={
                    <Typography sx={{ color: 'white', fontSize: 14, pr: 1 }}>{l.desc}</Typography>
                  }
                />
              </ListItem>
            </>
          ))}
        </List>
      </Box>
    </Box>
  )
}
