import React from 'react'

// mui
import Paper from '@mui/material/Paper'
import Masonry from '@mui/lab/Masonry' // mui lab
import { useTheme } from '@mui/material/styles' // theme
import useMediaQuery from '@mui/material/useMediaQuery' // mobile

const Label = ({ theme, topLabel, bottomLabel, desc }) => {
  return (
    <Paper
      sx={{
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.secondary.main,
        border: '2px solid #78866b',
        borderBottom: bottomLabel ? '2px solid #78866b' : 'none',
        borderTop: topLabel ? '2px solid #78866b' : 'none',
        borderBottomLeftRadius: topLabel ? '0px' : '4px',
        borderBottomRightRadius: topLabel ? '0px' : '4px',
        borderTopLeftRadius: bottomLabel ? '0px' : '4px',
        borderTopRightRadius: bottomLabel ? '0px' : '4px',
      }}
    >
      {desc}
    </Paper>
  )
}

export function ImageGrid(props) {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))
  const { topLabel, bottomLabel, photos, cols } = props

  console.log({ cols })

  return (
    <Masonry
      columns={mobile ? 1 : cols}
      spacing={2}
      sx={{ justifyContent: 'center', alignContent: 'center' }}
    >
      {photos.map((p, i) => (
        <div key={i}>
          {topLabel && (
            <Label theme={theme} topLabel={topLabel} bottomLabel={bottomLabel} desc={p.desc} />
          )}
          <img
            src={p.img}
            alt='img'
            style={{
              border: '2px solid #78866b',
              borderBottom: bottomLabel ? 'none' : '2px solid #78866b',
              borderTop: topLabel ? 'none' : '2px solid #78866b',
              borderBottomLeftRadius: bottomLabel ? '0px' : '4px',
              borderBottomRightRadius: bottomLabel ? '0px' : '4px',
              borderTopLeftRadius: topLabel ? '0px' : '4px',
              borderTopRightRadius: topLabel ? '0px' : '4px',
              display: 'block',
              width: 'calc(100% - 4px)', // accounting for the border
            }}
          />
          {bottomLabel && (
            <Label theme={theme} topLabel={topLabel} bottomLabel={bottomLabel} desc={p.desc} />
          )}
        </div>
      ))}
    </Masonry>
  )
}
