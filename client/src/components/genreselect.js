import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

const genreOptions = [
    'Genre', 'Romantic Comedy', 'Action Movie'
];

const defaultOption = genreOptions[0];
    

class GenreSelect extends Component {
    render () {
        return (
            <div>
                <Dropdown
      onChange={this._onSelect}
      value={defaultOption}
      placeholder="Select Genre"
      options={genreOptions}
                />
            </div>
        )
    }
}

export default GenreSelect;