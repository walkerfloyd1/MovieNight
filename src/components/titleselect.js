import React, { Component } from 'react';
import styled from 'styled-components';

var TitleButton = styled.button`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;`;

class TitleSelect extends Component {
    render () {
        return (
            <div>
                <TitleButton> Title </TitleButton>
            </div>
        )
    }
}

export default TitleSelect;