import React, { Fragment,useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Landing from "./pages/home.js";
import Login from './redux/auth/Login';
import Register from './pages/register.js';
import Profile from './pages/profile.js';
import NightInFood from './pages/NightIn/NightInFood';
import NightInMovie from './pages/NightIn/NightInMovie';
import NightOutTheaters from './pages/NightOut/NightOutTheaters';
import NightOutFood from './pages/NightOut/NightOutFood';

import { Provider } from 'react-redux';
import store from './redux/store';
import { loadUser } from './redux/actions/auth';
import setAuthToken from './redux/utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}



const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
    return (
      <Provider store={store}>
      <Router>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/recipes" component={NightInFood}/>
        <Route exact path="/movie" component={NightInMovie}/>
        <Route exact path="/signin" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/food" component={NightOutFood}/>
        <Route exact path="/theaters" component={NightOutTheaters}/>
        <Route exact path="/profile" component={Profile}/>
      </Router>
      </Provider>
    )
}

export default App;
