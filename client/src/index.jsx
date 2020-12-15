import React from "react";
import ReactDOM from "react-dom";
import Location from './searchfordoctor/location.jsx';
import Doctors from './searchfordoctor/doctors.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      someState: "value of state"
    };
  }

  render() {
    return (
      <>
        <h1>Hey Doctor!</h1>
        <Location />
        <Doctors />
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));