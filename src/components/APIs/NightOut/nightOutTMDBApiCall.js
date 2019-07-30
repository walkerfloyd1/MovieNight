//This is where the TMDB API call for Night In will go

import React, { PropTypes } from 'react';

import Coverflow from 'react-coverflow';

import "../../../styles/tmdbResults.css";

import axios from 'axios';

import styled from 'styled-components';

import '../../../styles/NightInMovie.css';

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
                    <div>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{
                        width: "100%",
                    }} className="poster" />
                    <p>{movie.overview}</p>
                    </div>
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
            <Coverflow width="960" height="400"
            displayQuantityOfSide={2}
            navigation={true}
            enableScroll={true}
            clickable={true}
            active={0}> 
                {this.state.movies}
            </Coverflow>
        )
    }
}

export default NightOutResults;