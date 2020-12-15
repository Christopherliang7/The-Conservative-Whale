import React from "react";
import ReactDOM from "react-dom";
import Sighting from './whalesighting/sightings.jsx';
import Mammals from './whalesighting/mammals.jsx';
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: '',
      longitude: '',
      mammals: [],
    }
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.handleError = this.handleError.bind(this);
    this.update = this.update.bind(this);
    this.update2 = this.update2.bind(this);
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleError);
    } else {
      alert('Geolocation Not Available.')
    }
  }

  getCoordinates(position) {
    this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude}, this.update)
  }

  handleError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert('User Denied Geolocation Permission.')
        break;
      case error.POSITION_UNAVAILABLE:
        alert('Users Position Unavailable.')
        break;
      case error.TIMEOUT:
        alert('User Location Request Timeout.')
        break;
      case error.UNKNOWN_ERROR:
        alert('Unknown Error Has Ocurred With Geolocation.')
        break;
    }
  }

  update() {
    const url = `http://hotline.whalemuseum.org/api.json?species=orca&near=${this.state.latitude},${this.state.longitude}&radius=50&limit=20`;
    axios.get(url)
      .then((results) => {
        let localMammals = [], whales = results.data;
        whales.forEach(whale => { localMammals.push(whale); })
        this.setState({mammals: localMammals}, this.update2)
      })
      .catch((error) => { console.log('Error with GET mammals request: ', error)})
  }

  update2() {
    console.log(this.state)
  }

  render() {
    return (
      <>
        <div>
          <h1>Conservative Whale</h1>
          <nav>
            <p>Feed</p>
            <p>Your Posts</p>
            <p>About</p>
          </nav>
        </div>
      
        <Mammals mammals={this.state.mammals}/>
        <Sighting />
      </>
    )
  }
};

ReactDOM.render(<App />, document.getElementById("app"));