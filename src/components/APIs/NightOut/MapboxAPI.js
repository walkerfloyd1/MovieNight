import React, {Component} from 'react';
import MapGL, {NavigationControl} from 'react-map-gl';

const token = 'pk.eyJ1IjoiYWlyZmxveWQiLCJhIjoiY2p5b3U0dnllMThuOTNlcGh0aGhkbHV1ayJ9.VNcWndTJIHQYqVuY53EZGg';

const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    padding: '10px'
}

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport:  {
                latitude: 37.785164,
                longitude: -100,
                zoom: 2.8,
                bearing: 0,
                pitch: 0,
                width: 500,
                height: 500,
            }
        }
    }
    render() {
        const {viewport} = this.state;
        return (
            <MapGL
            {...viewport}
            mapStyle="mapbox://styles/mapbox/dark-v9"
            mapboxApiAccessToken={token}>
                <div className="nav" style={navStyle}>
                    <NavigationControl />
                </div>
            </MapGL>
        )
    }
}