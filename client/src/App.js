import React, { Fragment,useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Landing from "./pages/home.js";
import Login from './redux/auth/Login';
import Register from './redux/auth/Register';
import Routes from './redux/routing/Routes';

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
        <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/signin" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route component={Routes} />
        </Switch>
      </Router>
      </Provider>
    )
}

export default App;
