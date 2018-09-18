import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import GigDetail from './containers/GigDetail';
import GigList from './containers/GigList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reacty</h1>
        </header>
        <Switch>
          <Route path="/gig/:id" component={GigDetail} />
          <Route path="/gigs" component={GigList} />
        </Switch>
      </div>
    );
  }
}

export default App;
