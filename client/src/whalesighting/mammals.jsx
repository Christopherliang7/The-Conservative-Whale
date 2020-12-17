import React from 'react';

function mammals(props) {
  return (
    <>
      <div className='mammals_container1'>
        <h2 className='mammals_title1'>Recent Whale Sightings</h2>
        <div className='sightings_list'>
          {props.mammals.map(whale =>
              <div key={whale.id} className='one_sight'>
                <div>
                  - {whale.quantity === null ? '' : 'Group of '}
                  {whale.species === '' ? ' unknown mammals' :` ${whale.species.charAt(0).toUpperCase()}${whale.species.slice(1)}`} sighted near 
                  {whale.location === '' ? ' unknown location in Washington' : ` ${whale.location}`} at 
                  {whale.sighted_at === '' ? ' unknown time' : ` ${whale.sighted_at.replace(/T/g, ' ').replace(/Z/g, ' ')}`} 
                </div>
              </div>
          )}
        </div>
      </div>
      <div className='mammals_container2'>
        <h2 className='mammals_title2'>Total Sightings In The Past 40+ Years</h2>
        <div className='total_sightings'>
          <div className='sight_stat'>Total: {props.total}</div>
          <div className='sight_stat'>Orcas: {props.orcas}</div>
          <div className='sight_stat'>Humpbacks: {props.humpbacks}</div>
          <div className='sight_stat'>Others: {props.others}</div>
        </div>
      </div>
    </>
  )
};

export default mammals;