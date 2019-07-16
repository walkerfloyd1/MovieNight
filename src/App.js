import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home}/>
      </Router>
    )
  }
}

export default App;
