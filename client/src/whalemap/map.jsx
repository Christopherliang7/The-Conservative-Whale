import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
import { api_key } from '../../../config.js'

const WrappedMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap 
    defaultZoom={10}
    defaultCenter={{lat: 47.606209, lng: -122.332069}}
  >
    {props.mammals.map(mammal => (
      <Marker key={mammal.id} position={{ lat: mammal.latitude, lng: mammal.longitude}}/>
    ))}
  </GoogleMap>
))


function WhaleMap(props) {
  return (
    <>
      <div>
        <WrappedMap 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${api_key}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />} 
          mammals={props.mammals}
        />
      </div>
    </>
  )
}

export default WhaleMap;