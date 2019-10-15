import React from 'react';
import Profile from '../../pages/profile.js';
import NightInFood from '../../pages/NightIn/NightInFood';
import NightInMovie from '../../pages/NightIn/NightInMovie';
import NightOutTheaters from '../../pages/NightOut/NightOutTheaters';
import NightOutFood from '../../pages/NightOut/NightOutFood';
import PrivateRoute from './PrivateRoute';
import { Route, Switch } from 'react-router';

const Routes = props => {
    return (
        <Switch>
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/nightinfood" component={NightInFood} />
            <PrivateRoute exact path="/nightinmovie" component={NightInMovie} />
            <PrivateRoute exact path="/nightoutfood" component={NightOutFood} />
            <PrivateRoute exact path="/nightouttheaters" component={NightOutTheaters} />
        </Switch>
    )
}

export default Routes;
