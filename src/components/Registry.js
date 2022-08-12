import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Typography from '@mui/material/Typography'
import { ListItemAvatar } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazon } from '@fortawesome/free-brands-svg-icons'
import { faCircleDot } from '@fortawesome/free-regular-svg-icons'

export function Registry() {
  return (
    <Box
      sx={{ width: '75%', mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <List sx={{ width: '100%' }}>
        <ListItem
          secondaryAction={
            <IconButton
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.amazon.com/wedding/caitlyn-copenhagen-darby-llewellyn-chelsea-july-2023/registry/2HRQEO9WCLTAO'
            >
              <Tooltip title='More Info'>
                <OpenInNewIcon sx={{ color: 'white' }} />
              </Tooltip>
            </IconButton>
          }
        >
          <ListItemAvatar>
            <FontAwesomeIcon
              icon={faAmazon}
              style={{ color: 'white', width: '2rem', height: '2rem' }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography sx={{ color: 'white', fontSize: 25, p: 2 }}>Amazon</Typography>}
          />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.target.com/gift-registry/gift-giver?registryId=57c28f60-db5e-11ec-8332-3b4cc8bb6bc3&type=WEDDING'
            >
              <Tooltip title='More Info'>
                <OpenInNewIcon sx={{ color: 'white' }} />
              </Tooltip>
            </IconButton>
          }
        >
          <ListItemAvatar>
            <FontAwesomeIcon
              icon={faCircleDot}
              style={{ color: 'white', width: '2rem', height: '2rem' }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography sx={{ color: 'white', fontSize: 25, p: 2 }}>Target</Typography>}
          />
        </ListItem>
      </List>
    </Box>
  )
}
