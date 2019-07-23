import React, { Component } from 'react';

import Navbar from '../components/navbar.js';

import { Container } from '../components/homeContainer.js';

import styled from 'styled-components';

const Button = styled.button`
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
        `;

class Homepage extends Component {
    constructor() {
        super()
        this.nightIn = this.nightIn.bind(this);
        this.nightOut = this.nightOut.bind(this);
    }

    nightIn() {
        let path="/nightin"
        this.props.history.push(path);
    }

    nightOut() {
        let path="/nightout"
        this.props.history.push(path);
    }

    render () {
        return (
            <div>
            <Navbar />
            <Container>
            <h1>This is where you will be able to choose if you would like NightIn or NightOut</h1>
            <Button onClick={this.nightIn}>NIGHT IN</Button>
            <Button onClick={this.nightOut}>NIGHT OUT</Button>
            </Container>
            </div>
        )
    }
}

export default Homepage;