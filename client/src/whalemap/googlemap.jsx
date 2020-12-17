import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'

const WrappedMap = withScriptjs(withGoogleMap((props) => {
  const [selectedSight, setSight] = useState(null);

  return ( 
    <GoogleMap 
      className='maps'
      defaultZoom={10}
      defaultCenter={{lat: props.latitude, lng: props.longitude}}

    >
      <Marker position={{ lat: props.latitude, lng: props.longitude}}/>
      {props.mammals.map(mammal => (
        <Marker 
          key={mammal.id} 
          position={{ lat: mammal.latitude, lng: mammal.longitude}}
          onClick={() => { setSight(mammal); }}
          icon={{
            url: "https://lh3.googleusercontent.com/tYmdq0rEDKeWMdh5scys2DmdmhdLlvf2irawmvCw6KgqdbUvqUld-smYDuIwsKWcaUaAfqHyI_v7LBgRAHSPa1kvzjSAjX5eF8_gedaDnFt8tOMuufKjks8F-MAikI_-y_JcLq5_2Q=w2400",
            scaledSize: new window.google.maps.Size(45, 25)
          }}
        />
      ))}
      {selectedSight && (
        <InfoWindow
          position={{ lat: selectedSight.latitude, lng: selectedSight.longitude }}
          onCloseClick={() => { setSight(null); }}
        >
          <div>
            <div>
              <h2> {selectedSight.species === '' ? ' unknown mammals' : ` ${selectedSight.species.charAt(0).toUpperCase()}${selectedSight.species.slice(1)}`}
              </h2>
            </div> 
            <div>
              {selectedSight.quantity === null ? '' : 'Group of '}
              {selectedSight.species === '' ? ' unknown mammals' :` ${selectedSight.species.charAt(0).toUpperCase()}${selectedSight.species.slice(1)}`} sighted near 
              {selectedSight.location === '' ? ' unknown location in Washington' : ` ${selectedSight.location}`} at 
              {selectedSight.sighted_at === '' ? ' unknown time' : ` ${selectedSight.sighted_at.replace(/T/g, ' ').replace(/Z/g, ' ')}`} 
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}));

export default WrappedMap

