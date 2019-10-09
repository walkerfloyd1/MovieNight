import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../components/homeContainer.js';
import { Link } from 'react-router-dom';
import { wButton } from '../components/styled-components/whiteButton'
import Form from 'react-bootstrap/Form';


const Username = styled.text`
        text-decoration: none;
        padding-bottom: 10px;
        margin-bottom: 60px;
        font-size: 25px;
        color: black;
`;

const Password = styled.text`
        text-decoration: none;
        padding-bottom: 10px;
        margin-bottom: 60px;
        font-size: 25px;
        color: black;
`;

const SignInButton = styled.button`
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
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
    `;

class Signin extends Component {
    constructor () {
        super()
        this.signIn = this.signIn.bind(this);
        this.register = this.register.bind(this);
    }

    signIn() {
        let path="/profile";
        this.props.history.push(path);
    }

    register() {
      let path="/register";
      this.props.history.push(path);
    }

    render() {
        return (
            <Container>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Username>Username</Username>
    <Input type="username" placeholder="Enter username" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Password>Password</Password>
    <Input type="password" placeholder="Password" />
  </Form.Group>

  <wButton variant="primary" type="submit" onClick={this.signIn}>
    Sign In
  </wButton>
  <SignInButton variant="primary" type="submit" onClick={this.register}>
    Register
  </SignInButton>
    </Form>
            </Container>
        )
    }
}

export default Signin;