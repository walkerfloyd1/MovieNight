//This is where the TMDB API call for Night In will go

import React, { Component } from 'react';
import { List, ListItem } from '../../list.js';
import axios from 'axios';
import styled from 'styled-components';

import '../../../styles/NightInMovie.css';

const Info = styled.text`
    position: relative;
    text-decoration: none;
`;

class NightOutResults extends Component {
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
            <div id="img_wrapper"> 
                <img src={this.state.poster} id="poster"/>
                <div id="img_description">
                    <Info>Title: {this.state.title}
                    <br />
                    Year: {this.state.year}
                    <br /> Plot: {this.state.plot}
                    <br /> Rating: {this.state.rating}
                    <br /> Genre: {this.state.genres}
                    <br /> Runtime: {this.state.runtime}
                    </Info>
                </div>
            </div>
        )
    }
}

export default NightOutResults;