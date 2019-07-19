import React, { Component } from 'react';
import TitleResults from '../components/APIs/tmdbApiResults';
import UtellyResults from '../components/APIs/utellyAPIResults';
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