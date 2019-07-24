import React, { Component } from 'react';
import { List, ListItem } from '../../list.js';
import axios from 'axios';
import styled from 'styled-components';

import Img from 'react-image';

const Text = styled.text`
    text-decoration: none;
    padding-bottom: 10px;
    margin-bottom: 60px;
    font-size: 25px;
    color: black;
`;

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
            <Text>{this.state.title}</Text>
            <Text>{this.state.year}</Text>
            <Img src={this.state.poster} />
            <Text>{this.state.plot}</Text>
            <Text>{this.state.rating}</Text>
            <Text>{this.state.genres}</Text>
            <Text>{this.state.runtime}</Text>
            </div>
        )
    }
}

export default TitleResults;