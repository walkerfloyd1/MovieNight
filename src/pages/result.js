import React, { Component } from 'react';
import TitleResults from '../components/APIs/tmdbApiResults';
import Navbar from '../components/navbar.js';

class Movie extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <TitleResults />
            </div>
        )
    }
}

export default Movie;