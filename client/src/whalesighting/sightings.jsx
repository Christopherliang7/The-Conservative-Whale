import React from 'react';
import 'regenerator-runtime';

class Sighting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Species: '',
      Quantity: 1,
      Description: '',
      Photo_Url: '',
      Latitude: null,
      Longitude: null,
      TimeSighted: '',
    }
  }

  render() {
    return (
      <>
        <h2>Post a Whale Sighting: </h2>
        <form>
          <input type="text" name="species" placeholder="Species" />
          <input type="number" name="quantity" placeholder="How Many Did You See?" />
          <textarea type="text" name="description" placeholder="Description" />
          <input type="text" name="photo_url" placeholder="Photo Url" />
          <input type="number" name="latitude" placeholder="Latitude" />
          <input type="number" name="longitude" placeholder="Longitude" />
          <input  type="text" name="sighted at" placeholder="Time and Date Sighted" />
          <input type='submit'/>
        </form>
      </>
    )
  }

};

export default Sighting;