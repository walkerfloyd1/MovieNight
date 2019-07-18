import React, { Component } from 'react';
import { List, ListItem } from '../list.js';
import axios from 'axios';

class TitleResults extends Component {
    constructor(props) {
        super(props);
            this.state={
                title: '',
                year: '',
                poster: '',
                plot: '',
                rating: '',
                genres: '',
                runtime: ''
            }
    }

    componentWillMount() {
        axios.get("http://www.omdbapi.com/?t=harry+potter&y=&plot=short&apikey=trilogy")
        .then(response => {
            console.log(response);
            this.setState ({
                title: response.data.Title,
                year: response.data.Year,
                poster: response.data.Poster,
                plot: response.data.Plot,
                rating: response.data.imdbRating,
                genres: response.data.Genre,
                runtime: response.data.Runtime,
            })

            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
            <h1>Results</h1>         
            <h2>{this.state.title}</h2>
            <h2>{this.state.year}</h2>
            <h2>{this.state.poster}</h2>
            <h2>{this.state.plot}</h2>
            <h2>{this.state.rating}</h2>
            <h2>{this.state.genres}</h2>
            <h2>{this.state.runtime}</h2>
            </div>
        )
    }
}

export default TitleResults;