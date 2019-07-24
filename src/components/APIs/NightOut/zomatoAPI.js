import React from 'react';

import axios from 'axios';

class ZomatoResults extends React.Component {
    constructor() {
        super ();
        this.state = {
            restaurants: [],
        }
    }

    componentDidMount () {
        const config = { headers: {'user-key': '2ffbbf3d242039cdbc944efbd700bd6e'} }; 
        axios.get('https://developers.zomato.com/api/v2.1/geocode?lat=34.1562756&lon=-118.1236828', config)
        .then(res => {
            let nearby = res.data.nearby_restaurants;
            let restaurants = nearby.map((food) => {
                return (
                    <ul>
                        <li>{food.restaurant.name}</li>
                        <li>{food.restaurant.url}</li>
                        <li>{food.restaurant.location.city}</li>
                    </ul>
                )
            })
        this.setState({restaurants: restaurants})
        console.log("restaurants", this.state.restaurants)
        })
    }
    render () {
        return (
            <div>
                {this.state.restaurants}
            </div>
        )
    }
}

export default ZomatoResults;