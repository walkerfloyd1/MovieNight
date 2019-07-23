import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import styled from 'styled-components';
import { Container } from '../components/homeContainer.js';

import ZomatoResults from '../components/APIs/NightOut/zomatoAPI.js'

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
            {/* <ZomatoResults /> */}
            <h1>Zomato Results</h1>
            </Container>
            </div>
        )
    }
}

export default NightOut;