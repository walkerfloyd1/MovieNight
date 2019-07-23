import React, { Component } from 'react';

import HomeNav from "../components/homepageNav.js";

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

class Landing extends Component {
    constructor() {
        super()
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick() {
        let path="/home";
        this.props.history.push(path);
    }

    render () {
        return (
            <div className="Introduction">
            <HomeNav />
            <Container>
            <ReactCSSTransitionGroup
  transitionName="movieNight" transitionAppear={true}
  transitionAppearTimeout={1000}>
            <TopText> Welcome to MovieNight.</TopText>
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
  transitionName="choice" transitionAppear={true}
  transitionAppearTimeout={1000}>
                <br></br>
            <TitleSearch onClick={this.buttonClick}>Start Your Movie Night</TitleSearch>
        </ReactCSSTransitionGroup>
            </Container>
            </div>
        )
    }
}

export default Landing;