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
                movies: []
            }
    }

    componentWillMount() {
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=2f627286a0a498c692e51fcca9afb912&language=en-US&page=1")
        .then(response => {
            console.log(response.data.results);
            let movies = response.data.results.map((movie) => {
                return (
                    <ul>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    </ul>
                )
            })
            this.setState({
                movies: movies,
            })
            console.log("movies", this.state.movies)
            })

            }
    
    render() {
        return (
            <div> 
                {this.state.movies}
            </div>
        )
    }
}

export default NightOutResults;