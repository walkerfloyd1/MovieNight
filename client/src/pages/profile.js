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

class Profile extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <Container>
            <Text>This is where your name will go</Text>
            <Text>This is where your Email will go</Text>
            <Text>This is where your Preferences will go</Text>
            </Container>
            </div>
        )
    }
}

export default Profile;