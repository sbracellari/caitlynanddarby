import React from 'react'

// mui
import {
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material'
import { OpenInNew } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

// custom
// import { Map } from './Map' // hidden for now
import { Marker } from './Marker'

// data
import locations from '../../data/locations.json'

export function Locations() {
  const theme = useTheme()

  return (
    <Box>
      {/* hide map for now, cus it's not workin' */}
      {/* <Box sx={{ width: '100%', height: '70vh' }}>
        <Map />
      </Box> */}
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
                        <OpenInNew sx={{ color: theme.palette.secondary.main }} />
                      </Tooltip>
                    </IconButton>
                  )
                }
                sx={{ pl: 0 }}
              >
                <ListItemAvatar>
                  <Marker id={l.id} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Box sx={{ display: 'flex', flexDirection: 'column', pr: 1 }}>
                        <Typography variant='h5' sx={{ textAlign: 'start' }}>
                          {l.name}
                        </Typography>
                        <Typography
                          component={Link}
                          target='_blank'
                          rel='noopener noreferrer'
                          href={l.maps}
                          variant='h6'
                          sx={{ textAlign: 'start', textDecoration: 'underline', pb: 1 }}
                        >
                          {l.address}
                        </Typography>
                        {l.phone && (
                          <Typography
                            component='a'
                            href={`tel:${l.phone}`}
                            variant='h6'
                            sx={{ pb: 1, textAlign: 'start' }}
                          >
                            {l.phone}
                          </Typography>
                        )}
                      </Box>
                    </>
                  }
                  secondary={<Typography sx={{ pr: 1, textAlign: 'start' }}>{l.desc}</Typography>}
                />
              </ListItem>
            </>
          ))}
        </List>
      </Box>
    </Box>
  )
}
