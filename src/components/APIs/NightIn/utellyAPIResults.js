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
    // this API call isn't working yet
    componentWillMount() {
        let header = {
            "X-RapidAPI-Key": "3a2f6b098amsh42e3ea8a97b54f0p18445ajsn3caa2d5e9ca6",
            "X-RapidAPI-Host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com"
        }
        //hard-coded, will need to figure out how to put in the users input
        axios.get("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=us", {header})
        .then(response => {
            console.log(response)
        })
    }

    render() {
        return (
            <Text>This is where the Streaming results will go</Text>
        )
    }
}

export default UtellyResults;