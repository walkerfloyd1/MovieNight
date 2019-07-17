import React, { Component } from 'react';

import TitleInput from '../components/titleselect.js';
import styled from 'styled-components';
import { Container } from '../components/homeContainer.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/home.css';


const TitleSearch = styled.button`
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
        `;

const GetOptions = styled.button`
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
        `;

class Home extends Component {
    constructor() {
        super()
        this.titleSubmit = this.titleSubmit.bind(this);
        this.getOptions = this.getOptions.bind(this);
    }

    titleSubmit() {
        let path="/movie";
        this.props.history.push(path);
    }

    getOptions() {
        let path="/input";
        this.props.history.push(path);
    }

    render () {
        return (
            <div className="Introduction">
            <Container>
            <ReactCSSTransitionGroup
  transitionName="movieNight" transitionAppear={true}
  transitionAppearTimeout={1000}>
            <h1> Welcome to MovieNight</h1>
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
  transitionName="choice" transitionAppear={true}
  transitionAppearTimeout={1000}>
                <br></br>
            <h1> What movie would you like to watch? </h1>
            <TitleInput />
            <TitleSearch onClick={this.titleSubmit}>Search</TitleSearch>
            <GetOptions onClick={this.getOptions}>Give Me Options</GetOptions>
        </ReactCSSTransitionGroup>
            </Container>
            </div>
        )
    }
}

export default Home;