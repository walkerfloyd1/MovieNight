import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Landing from "./pages/home.js";
import NightIn from './pages/NightIn/NightIn';
import Signin from './pages/signin.js';
import Register from './pages/register.js';
import NightOut from './pages/NightOut/NightOut';
import Profile from './pages/profile.js';



class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/nightin" component={NightIn}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/nightout" component={NightOut}/>
        <Route exact path="/profile" component={Profile}/>
      </Router>
    )
  }
}

export default App;
