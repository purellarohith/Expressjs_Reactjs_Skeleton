import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

//Screens

import Home from "./Components/Home";
import List from "./Components/List";

export default class App extends React.Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
        </Switch>
      </div>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}


