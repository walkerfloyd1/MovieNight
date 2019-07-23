import React, { Component } from 'react';

import Navbar from '../components/navbar.js';

class Homepage extends Component {
    render () {
        return (
            <div>
            <Navbar />
            <h1>This is where you will be able to choose if you would like NightIn or NightOut</h1>
            </div>
        )
    }
}

export default Homepage;