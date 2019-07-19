import React, { Component } from 'react';
import axios from 'axios';

class UtellyResults extends Component {
    componentWillMount() {
        //hard-coded, will need to figure out how to put in the users input
        axios.get("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=us")
        .then(response => {
            console.log(response)
        })
    }
    render() {
        return (
            <h1>This is where the Streaming results will go</h1>
        )
    }
}

export default UtellyResults;