import React, { useState } from 'react'

// mui
import { Box, Tab, Tabs } from '@mui/material'
import { useTheme } from '@mui/material/styles' // theme
import useMediaQuery from '@mui/material/useMediaQuery' // mobile

// custom
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Locations } from './components/locations/Locations'
import { Photos } from './components/photos/Photos'
import { Registry } from './components/Registry'
import { WeddingParty } from './components/wedding-party/WeddingParty'

export default function App() {
  const theme = useTheme()
  const [tabIndex, setTabIndex] = useState(0)
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  const tabs = [
    { title: 'Home', component: <Home /> },
    { title: 'Photos', component: <Photos /> },
    { title: 'Wedding Party', component: <WeddingParty /> },
    { title: 'FAQ', component: <FAQ /> },
    { title: 'Location Info', component: <Locations /> },
    { title: 'Registry', component: <Registry /> },
  ]

  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main, minHeight: '100vh', width: '100%' }}>
      <Header />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Tabs
          textColor='secondary'
          indicatorColor='secondary'
          value={tabIndex}
          onChange={(_, newTabIndex) => setTabIndex(newTabIndex)}
          centered={!mobile}
          variant={mobile ? 'scrollable' : 'standard'}
          scrollButtons
          allowScrollButtonsMobile
          sx={{
            '& .MuiTabs-scrollButtons': {
              color: theme.palette.secondary.main,
              m: '0px 10px',
            },
            width: '100%',
          }}
        >
          {tabs.map((tab, i) => (
            <Tab
              sx={{ color: theme.palette.secondary.main, textTransform: 'none' }}
              label={tab.title}
              key={i}
            />
          ))}
        </Tabs>
        {tabs.map(
          (tab, i) =>
            tabIndex === i && (
              <Box
                sx={{
                  m: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '75%',
                  height: '100%',
                }}
                key={i}
              >
                {tab.component}
              </Box>
            )
        )}
      </Box>
      <Footer />
    </Box>
  )
}
