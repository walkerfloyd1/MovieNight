import React, { Component } from 'react';
import { List, ListItem } from '../list.js';

class TitleResults extends Component {

    componentDidMount() {

        fetch("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(results => {
            return results.json();
        }).then(data => {
            const movies = data.hits.map((movie) => {
                return (
                <List>
                    <ListItem>{movie.Title}</ListItem>
                    <ListItem>{movie.Rated}</ListItem>
                </List>
                )
            })
        })
    }
    render() {
        return (
            <div className="container" style={{
                backgroundColor: "#D8CBCB",
                position: "fixed",
                top: '10%',
                left: '57%',
                paddingBottom: '2px',
                alignContent: 'center',
                textAlign: 'center'
            }}>
            <h1>Results</h1>
                {this.state.articles}
            </div>
        )
    }
}

export default TitleResults;