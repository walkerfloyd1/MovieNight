import React, { Component } from 'react';

import MovieResults from '../components/APIs/NightIn/tmdbApiResults';
import Navbar from '../components/navbar.js';
import RecipeResults from '../components/APIs/NightIn/edamamAPI.js';



class NightIn extends Component {
    render() {
        return (
        <div>
            <Navbar />
            <MovieResults />
            <RecipeResults />
        </div>
        )
    }
}

export default NightIn;