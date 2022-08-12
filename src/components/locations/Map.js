import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import coords from '../../data/locations.json'
import { findCenter } from '../../util/util'

export function Map() {
  const center = findCenter(coords)

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyDKkhdwvFdmwlPkLfEQYuUb_Q9kd4_Sfww',
          language: 'en',
          region: 'US',
        }}
        defaultCenter={center}
        defaultZoom={14}
      >
        {coords.map(({ lat, lng, id, name }) => {
          return <Marker key={id} lat={lat} lng={lng} id={id} name={name} />
        })}
      </GoogleMapReact>
    </div>
  )
}
