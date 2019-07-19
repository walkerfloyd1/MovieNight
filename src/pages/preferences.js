import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../components/homeContainer.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HomeNav from "../components/homepageNav.js";
import '../styles/home.css';

const Text = styled.text`
        text-decoration: none;
        padding-bottom: 10px;
        margin-bottom: 60px;
        font-size: 25px;
        color: black;
`;

const Input = styled.input`
    padding: 0.5em;
    width: 100%;
    color: ${props => props.inputColor || "black"};
    background: white;
    border-bottom: solid black;
    border-right: gray;
    border-top: gray;
    border-left: gray
    border-radius: 3px;
    margin-bottom: 10px;
    `;

const FindMovie = styled.button`
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
        `;

class Preferences extends Component {

    constructor() {
        super()
        this.findMovie = this.findMovie.bind(this);
    }

    findMovie () {
        let path="/movie";
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="Introduction">
            <HomeNav />
            <Container>
            <ReactCSSTransitionGroup
  transitionName="movieNight" transitionAppear={true}
  transitionAppearTimeout={1000}>
            <Text>Preferences</Text>
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
  transitionName="choice" transitionAppear={true}
  transitionAppearTimeout={1000}>
                <br></br>
            <Text> What genre of movie would you like to watch? </Text>
            <Input />
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
  transitionName="choice" transitionAppear={true}
  transitionAppearTimeout={1000}>
                <br></br>
            <Text> What rating? </Text>
            <Input />
            <FindMovie onClick={this.findMovie}>Find Me A Movie </FindMovie>
        </ReactCSSTransitionGroup>
            </Container>
            </div>
        )
    }
}

export default Preferences;