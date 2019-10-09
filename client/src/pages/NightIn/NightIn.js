import React, { Component } from 'react';

import NightInResults from '../../components/APIs/NightIn/omdbApiResults';
import Navbar from '../../components/navbar.js';


class NightIn extends Component {
    render() {
        return (
        <div>
            <Navbar />
            <NightInResults />
        </div>
        )
    }
}

export default NightIn;