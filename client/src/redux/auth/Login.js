import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

import styled from 'styled-components';
import { Container } from '../../components/homeContainer';
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


const Login = props => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });

    const { username, password } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        login(username, password);
      };
    return (
        <Container>
            <Form onSubmit={e => onSubmit(e)}>
  <Form.Group controlId="formBasicEmail">
    <Username>Username</Username>
    <Input type="username" placeholder="Enter username" name="username" value={username} onChange={e => onChange(e)} required/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Password>Password</Password>
    <Input type="password" placeholder="Password" name="password" minLength="7" value={password} onChange={e => onChange(e)} required/>
  </Form.Group>
  <SignInButton variant="primary" type="submit">
    Submit
  </SignInButton>
  </Form>
  <p className="my-1">
    Don't have an account? <Link to="/register">Sign up</Link>
  </p> 
            </Container>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
