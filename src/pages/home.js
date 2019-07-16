import React, { Component } from 'react';
import TitleInput from '../components/titleselect.js';
import styled from 'styled-components';

const TitleSearch = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
        `;

const GetOptions = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
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
            <h1> Welcome to MovieNight</h1>
                <br></br>
            <h1> What movie would you like to watch? </h1>
            <TitleInput />
            <TitleSearch onClick={this.titleSubmit}>Search</TitleSearch>
            <GetOptions onClick={this.getOptions}>Give Me Options</GetOptions>
            </div>
        )
    }
}

export default Home;