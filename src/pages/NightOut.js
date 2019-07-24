import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import styled from 'styled-components';
import { Container } from '../components/homeContainer.js';

import ZomatoResults from '../components/APIs/NightOut/zomatoAPI.js';

import Showtimes from '../components/APIs/NightOut/graceNote.js'

const Text = styled.text`
        text-decoration: none;
        padding-bottom: 10px;
        margin-bottom: 60px;
        font-size: 25px;
        color: black;
`;

class NightOut extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <Container>
            <h1>Restaurants Near You</h1>
            <ZomatoResults />
            <h1>Movies Near You</h1>
            <Showtimes />
            </Container>
            </div>
        )
    }
}

export default NightOut;