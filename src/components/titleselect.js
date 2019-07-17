import React, { Component } from 'react';
import styled from 'styled-components';
import '../styles/titleInput.css';

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

class TitleInput extends Component {
    render () {
        return (
            <div>
                <Input type="text" />
            </div>
        )
    }
};

export default TitleInput;