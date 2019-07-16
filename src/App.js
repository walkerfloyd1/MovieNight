import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home.js";
import Preferences from './pages/preferences.js';
import Movie from './pages/result.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/input" component={Preferences}/>
        <Route exact path="/movie" component={Movie}/>
      </Router>
    )
  }
}

export default App;
