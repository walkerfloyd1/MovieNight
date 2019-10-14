import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Landing from "./pages/home.js";
import Signin from './pages/signin.js';
import Register from './pages/register.js';
import Profile from './pages/profile.js';
import NightInFood from './pages/NightIn/NightInFood';
import NightInMovie from './pages/NightIn/NightInMovie';
import NightOutTheaters from './pages/NightOut/NightOutTheaters';
import NightOutFood from './pages/NightOut/NightOutFood';



class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/recipes" component={NightInFood}/>
        <Route exact path="/movie" component={NightInMovie}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/food" component={NightOutFood}/>
        <Route exact path="/theaters" component={NightOutTheaters}/>
        <Route exact path="/profile" component={Profile}/>
      </Router>
    )
  }
}

export default App;
