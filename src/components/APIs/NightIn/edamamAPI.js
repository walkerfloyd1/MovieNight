import React, { Component } from 'react';

import { ListItem } from '../../list';

class RecipeResults extends Component {
    constructor() {
    super();
    this.state = {
        recipes: [],
    }
}
componentDidMount() {
    //switch API Key and Keyword
    fetch("https://api.edamam.com/search?q=water&app_id=8be1af92&app_key=15679ef3f60e06063a6bd1988936772c&health=vegan").then(results => {
        return results.json();
    }).then(data => {
        let recipes = data.hits.slice(-3).map((hit) => {
            return (
                <ul>
                    <ListItem><a href={hit.recipe.url}>{hit.recipe.label}</a></ListItem>
               </ul>
            )
        })
        this.setState({recipes: recipes})
        console.log("recipes", this.state.recipes);
    })
}
    render() {
        return (
        <div>
            <div className="container" style={{
                backgroundColor: "#D8CBCB",
                position: "fixed",
                top: '60%',
                left: '4%',
                paddingBottom: '2px',
                alignContent: 'center',
                textAlign: 'center'
            }}>
            <h1>Diet: </h1>
            {this.state.recipes}
            </div>
        </div>
        )
    }
}



export default RecipeResults;