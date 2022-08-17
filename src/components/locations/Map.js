import React from 'react'

// custom
import { Marker } from './Marker'

// data
import coords from '../../data/locations.json'

// util
import { findCenter } from '../../util/util'

// 3rd party
import GoogleMapReact from 'google-map-react'

export function Map() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyDKkhdwvFdmwlPkLfEQYuUb_Q9kd4_Sfww',
          language: 'en',
          region: 'US',
        }}
        defaultCenter={findCenter(coords)}
        defaultZoom={14}
      >
        {coords.map(({ lat, lng, id, name }) => {
          return <Marker key={id} lat={lat} lng={lng} id={id} name={name} />
        })}
      </GoogleMapReact>
    </div>
  )
}
