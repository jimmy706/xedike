import React, { Component } from 'react';
import "./App.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from "./containers/home";
import ProfilePage from "./containers/profile";
import TripListPage from "./containers/trip-list";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/profile" component={ProfilePage} ></Route>
          <Route path="/trips" component={TripListPage} ></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
