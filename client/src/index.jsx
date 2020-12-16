import React from "react";
import ReactDOM from "react-dom";
import WhaleMap from './whalemap/map.jsx';
import Mammals from './whalesighting/mammals.jsx';
import Sighting from './whalesighting/sightings.jsx';
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
      others: 0,
    }
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.update();
  }

  async update() {
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
      const others = total.data - (orca.data + humpback.data)
      this.setState({total: total.data, orcas: orca.data, humpbacks: humpback.data, others: others});
    }
    catch(error) {
      console.log('Error with Statistics Requests: ', error)
    }
  }

  render() {
    return (
      <>
        <div className='nav-bar'>
            <h1>The Conservative Whale</h1>
            <p>Feed</p>
            <p>Posts</p>
            <p>Profile</p>
        </div>

        <WhaleMap mammals={this.state.mammals}/>
        <Mammals 
          mammals={this.state.mammals}
          total={this.state.total}
          orcas={this.state.orcas}
          humpbacks={this.state.humpbacks}
          others={this.state.others}
        />
        <Sighting />
      </>
    )
  }
};

ReactDOM.render(<App />, document.getElementById("app"));