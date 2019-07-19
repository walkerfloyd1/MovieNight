import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import styled from 'styled-components';
import { Container } from '../components/homeContainer.js';

const Text = styled.text`
        text-decoration: none;
        padding-bottom: 10px;
        margin-bottom: 60px;
        font-size: 25px;
        color: black;
`;

class About extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <Container>
            <Text>This is the About landing page</Text>
            </Container>
            </div>
        )
    }
}

export default About;