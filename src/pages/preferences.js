import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../components/homeContainer.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Navbar from "../components/navbar.js";
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

const Button = styled.button`
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
        `;

class Preferences extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 'american'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.stayIn = this.stayIn.bind(this);
        this.goOut = this.goOut.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    handleSubmit(event) {
        alert('Your favorite food is: ' + this.state.value);
        event.preventDefault();
    }

    stayIn () {
        let path="/nightin";
        this.props.history.push(path);
    }

    goOut () {
        let path="/nightout";
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="Introduction">
            <Navbar />
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
        <form>
        <Text>
          Pick your favorite cuisine:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="american">American</option>
            <option value="french">French</option>
            <option value="italian">Italian</option>
            <option value="spanish">Spanish</option>
          </select>
        </Text>
      </form>
            <Button onClick={this.stayIn}> Stay In </Button>
            <Button onClick={this.goOut}> Go Out </Button>
        </ReactCSSTransitionGroup>
            </Container>
            </div>
        )
    }
}

export default Preferences;