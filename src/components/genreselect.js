import React, { Component } from 'react';
import styled from 'styled-components';

var GenreButton = styled.button`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;`;

class GenreSelect extends Component {
    render () {
        return (
            <div>
                <GenreButton> Genre </GenreButton>
            </div>
        )
    }
}

export default GenreSelect;