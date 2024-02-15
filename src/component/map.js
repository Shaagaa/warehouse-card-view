import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
    };
  }

  componentDidMount() {
    this.initMap();
  }

  initMap = () => {
    // Load the Google Maps API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBI8oXdc-lbtvRxuVstY6eXG5G9FNCT4fU&callback=initMap`;
    script.defer = true;
    script.async = true;

    // Once the script is loaded, initialize the map
    script.onload = () => {
      window.initMap = this.createMap;
    };

    document.head.appendChild(script);
  };

  createMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 40.7128, lng: -74.006 },
      zoom: 8,
    });

    this.setState({ map });
  };

  render() {
    return (
      <div id="map" style={{ width: '100%', height: '400px' }}>
        {/* Map will be rendered here */}
      </div>
    );
  }
}

export default Map;