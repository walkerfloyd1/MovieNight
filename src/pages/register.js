import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../components/homeContainer.js';
import Form from 'react-bootstrap/Form';
import Home from './home.js';

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

const RegisterButton = styled.button`
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
        `; 

class Register extends Component {
    constructor () {
        super()
        this.register = this.register.bind(this);
    }

    register() {
        let path="/signin";
        this.props.history.push(path);
    }
    render() {
        return (
          <div>
            <Container>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Text>First Name</Text>
    <Input type="name" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Text>Last Name</Text>
    <Input type="name" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Text>User Name</Text>
    <Input type="username"/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Text>Password</Text>
    <Input type="password"/>
  </Form.Group>

  <RegisterButton variant="primary" type="submit" onClick={this.register}>
    Register
  </RegisterButton>
    </Form>
            </Container>
            </div>
        )
    }
}

export default Register;