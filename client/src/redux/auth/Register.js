import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth'; 
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Container } from '../../components/homeContainer.js';
import Form from 'react-bootstrap/Form';

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


const Register = ({
    setAlert,
    register,
    isAuthenticated
}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        username: ''
      });
    const { name, email, password, username} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmit = async e => {
        e.preventDefault();
          register({
            name,
            email,
            password,
            username
          });
    }
    if (isAuthenticated) {
        return <Redirect to="/profile" />
    }
    return (
        <Container>
            <Form onSubmit={e => onSubmit(e)}>
  <Form.Group controlId="formBasicEmail">
    <Text>Name</Text>
    <Input type="name" 
        placeholder="Name" 
        name="name" 
        value={name} 
        onChange={e => onChange(e)} required/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Text>Email</Text>
    <Input type="email" 
    placeholder="Email" 
    name="email" 
    value={email} 
    onChange={e => onChange(e)} required/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Text>Username</Text>
    <Input type="username"
    placeholder="Username"
    name="username"
    value={username}
    onChange={e => onChange(e)} required/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Text>Password</Text>
    <Input type="password"
    type="password"
    placeholder="Password"
    name="password"
    minLength="6"
    value={password} 
    onChange={e => onChange(e)} 
    required/>
  </Form.Group>
  <RegisterButton variant="primary" type="submit">
    Register
  </RegisterButton>
  <p className="my-1">
        Already have an account? <Link to="/signin">Sign In</Link>
 </p> 
    </Form>
            </Container>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {
    setAlert,
    register
})(Register);
