import React, { Component } from 'react';
import styled from 'styled-components';

var ActorButton = styled.button`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;`;

class ActorSelect extends Component {
    render () {
        return (
            <div>
                <ActorButton> Actor </ActorButton>
            </div>
        )
    }
}

export default ActorSelect;
