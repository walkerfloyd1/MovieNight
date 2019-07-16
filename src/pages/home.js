import React, { Component } from 'react';

import ActorSelect from '../components/actorselect.js';
import GenreSelect from '../components/genreselect.js';
import TitleSelect from '../components/titleselect.js';

class Home extends Component {
    render () {
        return (
            <div className="Introduction">
            <h1> Welcome to MovieNight</h1>
                <br></br>
            <h1> Please make a selection below below to start your ultimate movie date night.</h1>
            <ActorSelect />
            <GenreSelect />
            <TitleSelect />
            </div>
        )
    }
}

export default Home;