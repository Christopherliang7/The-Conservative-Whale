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
      total: 0,
      orcas: 0,
      humpbacks: 0,
      minkes: 0,
    }
    // this.getLocation = this.getLocation.bind(this);
    // this.getCoordinates = this.getCoordinates.bind(this);
    // this.handleError = this.handleError.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    // this.getLocation();
    this.update();
  }

  // getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleError);
  //   } else {
  //     alert('Geolocation Not Available.')
  //   }
  // }

  // getCoordinates(position) {
  //   this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude}, this.update)
  // }

  // handleError(error) {
  //   switch(error.code) {
  //     case error.PERMISSION_DENIED:
  //       alert('User Denied Geolocation Permission.')
  //       break;
  //     case error.POSITION_UNAVAILABLE:
  //       alert('Users Position Unavailable.')
  //       break;
  //     case error.TIMEOUT:
  //       alert('User Location Request Timeout.')
  //       break;
  //     case error.UNKNOWN_ERROR:
  //       alert('Unknown Error Has Ocurred With Geolocation.')
  //       break;
  //   }
  // }

  async update() {
    // const url = `http://hotline.whalemuseum.org/api.json?species=orca&near=${this.state.latitude},${this.state.longitude}&radius=50&limit=50`;
    const sightingsUrl = `http://hotline.whalemuseum.org/api.json?near=40.601,-73.988&radius=50&limit=20`;
    const statisticsUrl = `http://hotline.whalemuseum.org/api/count.json`
    axios.get(sightingsUrl)
      .then((results) => {
        let localMammals = [], whales = results.data;
        whales.forEach(whale => { localMammals.push(whale); })
        this.setState({mammals: localMammals})
      })
      .catch((error) => { console.log('Error with GET mammals request: ', error)})
    try {
      const total = await axios.get(statisticsUrl)
      const orca = await axios.get(`${statisticsUrl}?species=orca`)
      const humpback = await axios.get(`${statisticsUrl}?species=humpback`)
      const minke = await axios.get(`${statisticsUrl}?species=minke`)
      this.setState({total: total.data, orcas: orca.data, humpbacks: humpback.data, minkes: minke.data});
    }
    catch(error) {
      console.log('Error with Statistics Requests: ', error)
    }
  }

  render() {
    return (
      <>
        <div>
          <h1>The Conservative Whale</h1>
          <nav>
            <p>Feed</p>
            <p>Your Posts</p>
            <p>About</p>
          </nav>
        </div>
      
        <Mammals 
          mammals={this.state.mammals}
          total={this.state.total}
          orcas={this.state.orcas}
          humpbacks={this.state.humpbacks}
          minkes={this.state.minkes}
        />
        <Sighting />
      </>
    )
  }
};

ReactDOM.render(<App />, document.getElementById("app"));