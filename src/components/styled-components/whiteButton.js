import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

const whiteButton = styled.button`
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
        `;
export function wButton({
    children
}) {
    return (
        <whiteButton>
            {children}
        </whiteButton>
    )
}