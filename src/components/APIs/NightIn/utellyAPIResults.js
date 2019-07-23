import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Text = styled.text`
        text-decoration: none;
        padding-bottom: 10px;
        margin-bottom: 60px;
        font-size: 25px;
        color: black;
`;

class UtellyResults extends Component {
    constructor () {
        super();
        this.state = {
            streamingSites: [],
        }
    }
    // this API call isn't working yet
    componentWillMount() {
        const config = { headers: {
            "X-RapidAPI-Key": "3a2f6b098amsh42e3ea8a97b54f0p18445ajsn3caa2d5e9ca6",
            "X-RapidAPI-Host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com"
        }
        }
        //hard-coded, will need to figure out how to put in the users input
        axios.get("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=us", config)
        .then(res => {
            let streamingSites = res.data.results.map((movie) => {
                return (
                    <ul>
                    <li>{movie.name}</li>
                    </ul>
                )
            })
            this.setState({
                streamingSites: streamingSites
            })
            console.log("movies", this.state.streamingSites)
        })
    }

    render() {
        return (
            <div>{this.state.streamingSites}</div>
        )
    }
}

export default UtellyResults;