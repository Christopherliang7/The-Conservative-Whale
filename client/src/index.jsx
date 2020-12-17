import React from "react";
import ReactDOM from "react-dom";
import WhaleMap from './whalemap/whalemap.jsx';
import Mammals from './whalesighting/mammals.jsx';
import Sighting from './whalesighting/sightings.jsx';
import RecentPosts from './whalesighting/recentposts.jsx';
import About from './about.jsx';
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: 47.606209,
      longitude: -122.332069,
      mammals: [],
      total: 0,
      orcas: 0,
      humpbacks: 0,
      others: 0,
      page: 'sightings',
      posts: []
    }
    this.getLocation = this.getLocation.bind(this);
    this.setSeattle = this.setSeattle.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.handleError = this.handleError.bind(this);
    this.update = this.update.bind(this);
    this.changeView = this.changeView.bind(this);
    this.getPosts = this.getPosts.bind(this);
  }
  
  // Retrieving Geolocation
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleError);
    } else {
      alert('Geolocation Not Available.')
    }
  }

  setSeattle() {
    this.setState({latitude: 47.606209, longitude: -122.332069}, this.update)
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

  componentDidMount() {
    this.update();
    this.getPosts();
  }

  getPosts() {
    axios.get('/posts')
      .then((results) => { this.setState({posts: results.data}); })
      .catch((error) => { console.log('Error in getting Posts: ', error)});
  }
  
  // Retrieving Marine Mammals Near Location - Default Seattle as Location due to API data based on State of Washington
  async update() {
    const sightingsUrl = `http://hotline.whalemuseum.org/api.json?near=${this.state.latitude},${this.state.longitude}&radius=50&limit=20`;
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

  // Rendering Views Based on Navigation Bar
  changeView(view) {
    this.setState({page: view})
  }

  render() {
    return (
      <>
        <div className='header'>
          <div className='container'>
            <div className='navigation'>
              <p className='nav-list' onClick={() => this.changeView('posts')}>Posts</p>       
              <p className='nav-list' onClick={() => this.changeView('about')}>About Us</p>       
              <p className='nav-list' onClick={() => this.changeView('sightings')}>Sight Log</p>
            </div>
            <div className='title' onClick={() => this.changeView('sightings')}><h1>The Conservative Whale</h1></div>
          </div>
        </div>
        {this.state.page === 'sightings' &&
          <div className='world_map'>
            <WhaleMap
              mammals={this.state.mammals}
              latitude={this.state.latitude}
              longitude={this.state.longitude}
            />
            <div className='geolocation_buttons'>
              <div><button className='geo_button' onClick={() => this.setSeattle()}>Seattle</button></div>
              <div><button className='geo_button' onClick={() => this.getLocation()}>Find Near Me!</button></div>
            </div>
            <div className='stats_container'>
              <Mammals 
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                mammals={this.state.mammals}
                total={this.state.total}
                orcas={this.state.orcas}
                humpbacks={this.state.humpbacks}
                others={this.state.others}
              />
            </div>
          </div>
        }
        
        {this.state.page === 'posts' && 
          <div>
            <Sighting getPosts={this.getPosts}/>
            <RecentPosts posts={this.state.posts}/>
          </div>}

        {this.state.page === 'about' && <About />}
      </>
    )
  }
};

ReactDOM.render(<App />, document.getElementById("app"));