import React, { useState } from 'react'
import { Box, Collapse, Divider, IconButton, Typography } from '@mui/material'
import faq from '../data/faq.json'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(0)
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleExpand = (expanded, index) => {
    expanded ? setExpandedIndex(-1) : setExpandedIndex(index)
  }

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
    <Box sx={{ width: '75%', p: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography sx={{ color: 'white', fontSize: 20 }}>WILL I HAVE FUN?</Typography>
        <Typography sx={{ color: 'white', fontSize: 14 }}>
          Yes. You will have lots of fun. Plus free booze so you can't say no.
        </Typography>
      </Box>
      {faq.sections.map((section, i) => (
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
            <Typography sx={{ p: 2, color: 'white', fontSize: 20, textAlign: mobile && 'center' }}>
              {section.title}
            </Typography>
            <ExpandMore
              expand={expandedIndex === i}
              onClick={() => handleExpand(expandedIndex === i, i)}
            >
              <ExpandMoreIcon sx={{ color: 'white' }} />
            </ExpandMore>
          </Box>
          <Collapse in={expandedIndex === i} timeout='auto' unmountOnExit>
            <Box sx={{ pl: 6, width: '90%' }}>
              {section.questions.map(
                (question, index) =>
                  !question.hidden && (
                    <Box
                      key={index}
                      sx={{ mb: 5, display: 'flex', flexDirection: 'column', alignItems: 'start' }}
                    >
                      <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ color: 'white', pr: 1 }}>
                          <strong>Q:</strong>
                        </Typography>
                        <Typography sx={{ color: 'white' }}>{question.q}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ color: 'white', pr: 1 }}>
                          <strong>A:</strong>
                        </Typography>
                        <Typography sx={{ color: 'white' }}>{question.a}</Typography>
                      </Box>
                    </Box>
                  )
              )}
            </Box>
          </Collapse>
          <Divider sx={{ background: 'white', width: '100%', opacity: '0.5' }} />
        </Box>
      ))}
      <Box sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
        <Typography sx={{ color: 'white', fontSize: 14, pb: 2 }}>
          Information is subject to change at any time, so check back frequently. If you still have
          questions, feel free to contact us!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: mobile ? 'column' : 'row',
          }}
        >
          <Box sx={{ width: '100%', pb: 2 }}>
            <Typography sx={{ color: 'white' }}>
              <strong>Caitlyn</strong>
            </Typography>
            <Typography sx={{ color: 'white' }}>(248) 807-8381</Typography>
            <Typography
              component='a'
              href='mailto:caitlyn.copenhagen123@gmail.com'
              sx={{ color: 'white' }}
            >
              caitlyn.copenhagen123@gmail.com
            </Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography sx={{ color: 'white' }}>
              <strong>Darby</strong>
            </Typography>
            <Typography sx={{ color: 'white' }}>(734) 660-3136</Typography>
            <Typography component='a' href='mailto:llewe4@hotmail.com' sx={{ color: 'white' }}>
              llewe4@hotmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ background: 'white', width: '100%', opacity: '0.5' }} />
    </Box>
  )
}
