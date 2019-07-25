import React, { Component } from 'react';

import axios from 'axios';

class Showtimes extends Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        axios.get("http://data.tmsapi.com/v1.1/movies/showings?startDate=2019-07-25&zip=91106&api_key=72qrmnsdp4sgw2wwam29d4ub")
        .then(res => {
            console.log(res);
            let movies = res.data.map((movie) => {
                for (let i = 0; i < movie.showtimes.length; i++) {
                
                let shows = movie.showtimes

                return (   
                    <ul>
                        <li>{movie.title}</li>
                        <li>{shows[i].theatre.name}</li>
                        <li>{shows[i].dateTime}</li>
                    </ul>
                )
                }
            })
            this.setState({
                movies: movies
            })
            console.log("movies", this.state.movies)
        })
    }

    render() {
        return (
            <div>{this.state.movies}</div>
        )
    }
}

export default Showtimes;