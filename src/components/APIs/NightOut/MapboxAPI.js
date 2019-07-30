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
                latitude: 34.1481036,
                longitude: -118.1229172,
                zoom: 12.0,
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
            mapStyle="mapbox://styles/airfloyd/cjyoumbqi4zy01cpoudluxlwe"
            mapboxApiAccessToken={token}>
                <div className="nav" style={navStyle}>
                    <NavigationControl />
                </div>
            </MapGL>
        )
    }
}