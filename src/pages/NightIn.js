import React, { Component } from 'react';
import TitleResults from '../components/APIs/NightIn/tmdbApiResults';
import UtellyResults from '../components/APIs/NightIn/utellyAPIResults';
import Navbar from '../components/navbar.js';
import RecipeResults from '../components/APIs/NightIn/edamamAPI.js';

import { Container } from '../components/homeContainer.js';

class NightIn extends Component {
    render() {
        return (
        <div>
            <Navbar />
            <Container>
            <TitleResults />
            <UtellyResults />
            <RecipeResults />
            </Container>
        </div>
        )
    }
}

export default NightIn;