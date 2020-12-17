import React from 'react';
import WrappedMap from './googlemap.jsx';
import { api_key } from '../../../config.js';

function WhaleMap(props) {
  return (
    <>
      <div>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${api_key}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `650px` }} />}
          mapElement={<div style={{ height: `100%` }} />} 
          mammals={props.mammals}
          latitude={props.latitude}
          longitude={props.longitude}
        />
      </div>
    </>
  )
}

export default WhaleMap;