import React, { useState } from 'react'

import { useTheme } from '@mui/material/styles'
import { Box, Tab, Tabs } from '@mui/material'

import { Home } from './components/Home'
import { Photos } from './components/photos/Photos'
import { WeddingParty } from './components/wedding-party/WeddingParty'
import { FAQ } from './components/FAQ'
import { Locations } from './components/locations/Locations'
import { Registry } from './components/Registry'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function App() {
  const [tabIndex, setTabIndex] = useState(0)
  const theme = useTheme()
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
      <Box>
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
              color: 'white',
            },
          }}
        >
          {tabs.map((tab, i) => (
            <Tab sx={{ color: 'white', textTransform: 'none' }} label={tab.title} key={i} />
          ))}
        </Tabs>
        {tabs.map(
          (tab, i) =>
            tabIndex === i && (
              <Box
                sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}
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
