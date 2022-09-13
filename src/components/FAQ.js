import React, { useState } from 'react'

// mui
import { Box, Collapse, Divider, IconButton, Typography } from '@mui/material'
import {
  // icons
  MailOutline,
  ExpandMore,
  PhoneIphone,
} from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles' // theme
import useMediaQuery from '@mui/material/useMediaQuery' // mobile

// data
import faq from '../data/faq.json'
import contacts from '../data/contacts.json'

export function FAQ() {
  const theme = useTheme()
  const [expandedIndex, setExpandedIndex] = useState(2)
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleExpand = (expanded, index) => {
    expanded ? setExpandedIndex(-1) : setExpandedIndex(index)
  }

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
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant='h6'>WILL I HAVE FUN?</Typography>
        <Typography>
          Yes. You will have lots of fun. Plus free booze so you can't say no.
        </Typography>
      </Box>
      {faq.sections.map((section, i) => (
        !section.hidden && (
          <Box key={i}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: mobile ? 'center' : 'space-between',
                pl: 2,
                pr: 2,
              }}
            >
              <Typography variant='h6' sx={{ p: 2 }}>
                {section.title}
              </Typography>
              <Expand
                expand={expandedIndex === i}
                onClick={() => handleExpand(expandedIndex === i, i)}
              >
                <ExpandMore sx={{ color: theme.palette.secondary.main }} />
              </Expand>
            </Box>
            <Collapse in={expandedIndex === i} timeout='auto' unmountOnExit>
              <Box sx={{ pl: mobile ? 2 : 6, width: '90%' }}>
                {section.questions.map(
                  (question, index) =>
                    !question.hidden && (
                      <Box
                        key={index}
                        sx={{ mb: 5, display: 'flex', flexDirection: 'column', alignItems: 'start' }}
                      >
                        <Box sx={{ display: 'flex' }}>
                          <Typography sx={{ pr: 1 }}>
                            <strong>Q:</strong>
                          </Typography>
                          <Typography sx={{ textAlign: 'start' }}>{question.q}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                          <Typography sx={{ pr: 1 }}>
                            <strong>A:</strong>
                          </Typography>
                          <Typography sx={{ textAlign: 'start' }}>{question.a}</Typography>
                        </Box>
                      </Box>
                    )
                )}
              </Box>
            </Collapse>
            <Divider />
          </Box>
        )
      ))}
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography sx={{ pb: 2 }}>
          Information is subject to change at any time, so check back frequently. If you still have
          questions, feel free to contact us!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {contacts.map((c, i) => (
            <Box key={i} sx={{ width: '100%', pb: 4 }}>
              <Typography sx={{ pb: 1 }}>
                <strong>
                  {c.name} — {c.type}
                </strong>
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <PhoneIphone sx={{ color: theme.palette.secondary.main, mr: 1 }} />
                <Typography component='a' href={`tel:${c.phone}`}>
                  {c.phone}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MailOutline sx={{ color: theme.palette.secondary.main, mr: 1 }} />
                <Typography component='a' href={`mailto:${c.email}`}>
                  {c.email}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Divider />
    </Box>
  )
}
