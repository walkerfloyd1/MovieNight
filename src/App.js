import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home.js";
import Preferences from './pages/preferences.js';
import Movie from './pages/result.js';
import Signin from './pages/signin.js';
import Register from './pages/register.js';
import About from './pages/about.js';
import Snacks from './pages/snacks.js';
import Profile from './pages/profile.js';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/input" component={Preferences}/>
        <Route exact path="/movie" component={Movie}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/snacks" component={Snacks}/>
        <Route exact path="/profile" component={Profile}/>
      </Router>
    )
  }
}

export default App;
