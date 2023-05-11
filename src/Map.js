import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';
import './Map.css'


 class Map extends Component {
  componentDidMount() {
   const app = this.props.app
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VubnkyeCIsImEiOiJjbGVyZGxneHQwZDE4M3RubDVrdTZqYXZoIn0.j7w7nauTR60Pd1bb9sbaRQ';

    const map = new mapboxgl.Map({
      //where the coordinates start on load
      container: 'map', // container ID
      style: app.state.style, // style URL
      center: [
        app.state.longitude,
        app.state.latitude, 
      ], // starting position [lng, lat]
      zoom: 11.5, // starting zoom
     
  });
  map.addControl(new mapboxgl.NavigationControl())
  
  
}
  render() {

    return (
      <div id='map'>
      </div>
    )
  }
}

export default Map