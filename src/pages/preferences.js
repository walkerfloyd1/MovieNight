import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../components/homeContainer.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/home.css';

const search = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
        `;

class Preferences extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="Introduction">
            <Container>
            <ReactCSSTransitionGroup
  transitionName="movieNight" transitionAppear={true}
  transitionAppearTimeout={1000}>
            <h1>Preferences</h1>
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
  transitionName="choice" transitionAppear={true}
  transitionAppearTimeout={1000}>
                <br></br>
            <h1> What genre of movie would you like to watch? </h1>
        </ReactCSSTransitionGroup>
            </Container>
            </div>
        )
    }
}

export default Preferences;