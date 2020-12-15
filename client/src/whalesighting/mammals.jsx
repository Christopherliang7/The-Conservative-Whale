import React from 'react';

function mammals(props) {
  return (
    <>
      <h2>Recent Whale Sightings</h2>
      {props.mammals.map(whale =>
          <div key={whale.id}>
            <div>
              - {whale.quantity === null ? '' : 'Group of '}
              {whale.species === '' ? ' unknown mammals' :` ${whale.species.charAt(0).toUpperCase()}${whale.species.slice(1)}`} seen at 
              {whale.location === '' ? ' unknown location in Washington' : ` ${whale.location}`} sighted at 
              {whale.sighted_at === '' ? ' unknown time' : ` ${whale.sighted_at}`} 
            </div>
          </div>
      )}
      <h2>Total Sightings In Over 40+ Years</h2>
        <div>
          <div>Total: {props.total}</div>
          <div>Orcas: {props.orcas}</div>
          <div>Humpbacks: {props.humpbacks}</div>
          <div>Minkes: {props.minkes}</div>
        </div>
    </>
  )
};

export default mammals;