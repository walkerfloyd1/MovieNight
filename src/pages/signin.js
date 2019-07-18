import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../components/homeContainer.js';
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
    }

    signIn() {
        let path="/movie";
        this.props.history.push(path);
    }

    render() {
        return (
            <Container>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Username>Username</Username>
    <Input type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Password>Password</Password>
    <Input type="password" placeholder="Password" />
  </Form.Group>

  <SignInButton variant="primary" type="submit" onClick={this.signIn}>
    Sign In
  </SignInButton>
    </Form>
            </Container>
        )
    }
}

export default Signin;