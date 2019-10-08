import React from 'react';

import axios from 'axios';

import { Container } from '../../homeContainer.js';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles(theme => ({
//     root: {
//         width: '100%',
//         maxWidth: 360,
//         backgroundColor: theme.palette.background.paper,
//     },
//     inline: {
//         display: 'inline',
//     },
// }));

class ZomatoResults extends React.Component {

    constructor() {
        super ();
        this.state = {
            restaurants: [],
        }
    }

    componentDidMount () {
        const config = { headers: {'user-key': '2ffbbf3d242039cdbc944efbd700bd6e'} }; 
        axios.get('https://developers.zomato.com/api/v2.1/geocode?lat=34.1562756&lon=-118.1236828', config)
        .then(res => {
            let nearby = res.data.nearby_restaurants;
            let restaurants = nearby.map((food) => {
                return (
                    <List className="list">
                        <ListItem alignItems="flex-start">
                            <ListItemText
                            primary={food.name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                    component="span"
                                    variant="body2"
                                    className="inline"
                                    color="textPrimary">
                                        {food.url}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                )
            })
        this.setState({restaurants: restaurants})
        console.log("restaurants", this.state.restaurants)
        })
    }
    render () {
        return (
            <div>
                {this.state.restaurants}
            </div>
        )
    }
}

export default ZomatoResults;