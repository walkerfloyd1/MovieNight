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
    // componentWillMount() {
    //     //hard-coded, will need to figure out how to put in the users input
    //     axios.get("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=us")
    //     .then(response => {
    //         console.log(response)
    //     })
    // }

    render() {
        return (
            <Text>This is where the Streaming results will go</Text>
        )
    }
}

export default UtellyResults;