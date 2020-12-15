import React from 'react';

function mammals(props) {
  return (
    <>
      <h2>Whales Near Me</h2>
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
    </>
  )
};

export default mammals;