import React, { Component } from 'react';

import HomeNav from "../components/homepageNav.js";

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
            <BottomText> What movie would you like to watch? </BottomText>
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