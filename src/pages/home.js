import React, { Component } from 'react';

import styled from 'styled-components';

import { Container } from '../components/homeContainer.js';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../styles/home.css';



const Button = styled.button`
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
        `;

const TopText = styled.text`
    text-decoration: none;
    padding-bottom: 10px;
    margin-bottom: 60px;
    font-size: 25px;
    color: black;
    `;

const BottomText = styled.text`
    text-decoration: none;
    font-size: 25px;
    color: black;
    `;

class Home extends Component {
    constructor() {
        super()
        this.signIn = this.signIn.bind(this);
        this.register = this.register.bind(this);
    }

    signIn() {
        let path="/signin";
        this.props.history.push(path);
    }

    register() {
        let path="/register";
        this.props.history.push(path);
    }

    render () {
        return (
            <div className="Introduction">
            <Container>
            <ReactCSSTransitionGroup
  transitionName="movieNight" transitionAppear={true}
  transitionAppearTimeout={1000}>
            <TopText> Welcome to MovieNight.</TopText>
            <TopText> LET USERS SAVE THEIR FAVORITE RESTAURANTS AND MOVIE THEATERS</TopText>
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
  transitionName="choice" transitionAppear={true}
  transitionAppearTimeout={1000}>
                <br></br>
            <Button onClick={this.signIn}>Sign In</Button>
            <Button onClick={this.register}>Register</Button>
        </ReactCSSTransitionGroup>
            </Container>
            </div>
        )
    }
}

export default Home;