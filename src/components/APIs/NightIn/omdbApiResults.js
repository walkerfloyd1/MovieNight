import React, { Component } from 'react';

import { List, ListItem } from '../../list.js';

import axios from 'axios';

import styled from 'styled-components';

import StreamingResults from './utellyAPIResults';

import RecipeResults from './edamamAPI';

import Img from 'react-image';

import '../../../styles/NightInMovie.css';

const Body = styled.text`
    position: relative;
    text-decoration: none;
`;

class NightInResults extends Component {
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
                    <Body>Title: {this.state.title}
                    <br />
                    Year: {this.state.year}
                    <br /> Plot: {this.state.plot}
                    <br /> Rating: {this.state.rating}
                    <br /> Genre: {this.state.genres}
                    <br /> Runtime: {this.state.runtime}
                    <StreamingResults />
                    <RecipeResults />
                    </Body>
                </div>
            </div>
        )
    }
}

export default NightInResults;