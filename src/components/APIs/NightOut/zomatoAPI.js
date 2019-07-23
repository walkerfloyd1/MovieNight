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
            console.log(response)
        }).then(data => {
            let restaurants = data.nearby_restaurants.map((restaurant) => {
                return (
                    <ul>
                        <li>{restaurant.restaurant.name}</li>
                    </ul>
                )
            })
        this.setState({restaurants: restaurants})
        console.log("restaurants", restaurants)
        })
    }
    render () {
        return (
            <h1>{this.state.restaurants}</h1>
        )
    }
}

export default ZomatoResults;