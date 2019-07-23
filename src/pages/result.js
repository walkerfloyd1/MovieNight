import React, { Component } from 'react';
import TitleResults from '../components/APIs/NightIn/tmdbApiResults';
import UtellyResults from '../components/APIs/NightIn/utellyAPIResults';
import Navbar from '../components/navbar.js';

import { Container } from '../components/homeContainer.js';

class Movie extends Component {
    render() {
        return (
        <div>
            <Navbar />
            <Container>
            <TitleResults />
            <UtellyResults />
            </Container>
        </div>
        )
    }
}

export default Movie;