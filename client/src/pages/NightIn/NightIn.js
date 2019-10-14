import React, { Component } from 'react';

import { Button } from 'reactstrap';

import NightInResults from '../../components/APIs/NightIn/omdbApiResults';
import Navbar from '../../components/navbar.js';


class NightIn extends Component {
    render() {
        return (
        <div>
            <Navbar />
            <NightInResults />
            <Button color="danger">Test</Button>
        </div>
        )
    }
}

export default NightIn;