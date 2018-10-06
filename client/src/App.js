import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import GigDetail from './containers/GigDetail';
import GigList from './containers/GigList';
import BandDetail from './containers/BandDetail';
import BandList from './containers/BandList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavLink className="App-title" to="/gigs" activeClassName="selected">
            Gigs
          </NavLink>
          <NavLink className="App-title" to="/bands" activeClassName="selected">
            Bands
          </NavLink>
        </header>
        <Switch>
          <Route path="/gig/:id" component={GigDetail} />
          <Route path="/gigs" component={GigList} />
          <Route path="/band/:id" component={BandDetail} />
          <Route path="/bands" component={BandList} />
        </Switch>
      </div>
    );
  }
}

export default App;
