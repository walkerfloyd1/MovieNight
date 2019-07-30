//This is where the TMDB API call for Night In will go

import React, { PropTypes } from 'react';

import axios from 'axios';

import styled from 'styled-components';

import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Container } from '../../postersContainer';

import "../../../styles/tmdbResults.css";


import "../../../styles/carousel.css";

const Body = styled.text`
    position: relative;
    text-decoration: none;
`;

class NightOutResults extends React.Component {
    constructor(props) {
        super(props);
            this.state={
                movies: [],
            }
    }

    componentWillMount() {
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=2f627286a0a498c692e51fcca9afb912&language=en-US&page=1")
        .then(response => {
            console.log(response.data.results);
            let movies = response.data.results.map((movie) => {
                return (
                    <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
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
            <Carousel showThumbs={false} style={{
                fontFamily: "Raleway, sans-serif",
              }}> 
                {this.state.movies}
            </Carousel>
        )
    }
}

export default NightOutResults;