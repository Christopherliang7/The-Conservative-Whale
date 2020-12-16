import React from "react";
import ReactDOM from "react-dom";
import WhaleMap from './whalemap/whalemap.jsx';
import Mammals from './whalesighting/mammals.jsx';
import Sighting from './whalesighting/sightings.jsx';
import About from './about.jsx'
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
      page: 'sightings',
    }
    this.update = this.update.bind(this);
    this.changeView = this.changeView.bind(this);
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

  changeView(view) {
    this.setState({page: view}, this.update2)
  }

  update2() {
    console.log(this.state.page)
  }

  render() {
    return (
      <>
        <div className='header'>
          <div className='container'>
            <div className='title' onClick={() => this.changeView('sightings')}><h1>The Conservative Whale</h1></div>
            <div className='navigation'>
              <p className='nav-list' onClick={() => this.changeView('sightings')}>Sight Log</p>
              <p className='nav-list' onClick={() => this.changeView('about')}>About</p>
              <p className='nav-list' onClick={() => this.changeView('posts')}>Posts</p>
            </div>
          </div>
        </div>
        {this.state.page === 'sightings' &&
          <div>
            <WhaleMap mammals={this.state.mammals}/>
            <Mammals 
              mammals={this.state.mammals}
              total={this.state.total}
              orcas={this.state.orcas}
              humpbacks={this.state.humpbacks}
              others={this.state.others}
            />
          </div>
        }
        {this.state.page === 'posts' && <Sighting />}
        {this.state.page === 'about' && <About />}
      </>
    )
  }
};

ReactDOM.render(<App />, document.getElementById("app"));