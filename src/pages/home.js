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
    render () {
        return (
            <div className="Introduction">
            <h1> Welcome to MovieNight</h1>
                <br></br>
            <h1> What movie would you like to watch? </h1>
            <TitleInput />
            <TitleSearch>Search</TitleSearch>
            <GetOptions>Give Me Options</GetOptions>
            </div>
        )
    }
}

export default Home;