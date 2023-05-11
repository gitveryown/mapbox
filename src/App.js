import React, { Component } from 'react';
import './App.css';
import Map from './Map';



class App extends Component() {

  constructor(props) {
    super(props)

    this.state = {
      latitude: 33.7488,
      longitude: -84.3877,
      style: 'mapbox://styles/mapbox/streets-v12',
      name: ''
    }

  }
  
  render() {
    return (
      <div className="App">
        <Map app={this}>/  
        </Map>
      </div>
    );
  }

}

export default App;




