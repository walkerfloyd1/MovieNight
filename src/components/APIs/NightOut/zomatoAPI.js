import React from 'react';

import axios from 'axios';

class ZomatoResults extends React.Component {
    constructor() {
        super ();
        this.state = {
            restaurants: [],
        }
    }

    componentWillMount () {
        const config = { headers: {'user-key': '2ffbbf3d242039cdbc944efbd700bd6e'} }; 
        axios.get('https://developers.zomato.com/api/v2.1/geocode?lat=34.1562756&lon=-118.1236828', config)
        .then(response => {
            console.log(response);
        }
        )
    }
    render () {
        return (
            <h1>This is where the results will go</h1>
        )
    }
}

export default ZomatoResults;