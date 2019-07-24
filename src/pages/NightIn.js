import React, { Component } from 'react';

import MovieResults from '../components/APIs/NightIn/utellyAPIResults';
import Navbar from '../components/navbar.js';
import RecipeResults from '../components/APIs/NightIn/edamamAPI.js';

import { Container } from '../components/homeContainer.js';

class NightIn extends Component {
    render() {
        return (
        <div>
            <Navbar />
            <Container>
            <MovieResults />
            </Container>
            <Container>
            <RecipeResults />
            </Container>
        </div>
        )
    }
}

export default NightIn;