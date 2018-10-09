import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import GigDetail from './containers/GigDetail';
import GigList from './containers/GigList';
import BandDetail from './containers/BandDetail';
import BandList from './containers/BandList';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

import './App.css';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  appBar: {
    position: 'relative'
  },
  toolbarTitle: {
    flex: 1
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2
    }
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`
  }
});

class App extends Component {
  /**
   *	Props implementation.
   */
  static propTypes = {
    classes: PropTypes.object,
    location: PropTypes.string
  };

  render() {
    const {
      classes,
      location: { pathname }
    } = this.props;

    return (
      <div className="App">
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              <img src={logo} className="App-logo" alt="logo" />
              Gig Match
            </Typography>
            <MenuItem
              component={Link}
              to="/gigs"
              selected={'/gigs' === pathname}
            >
              Gigs
            </MenuItem>
            <MenuItem
              component={Link}
              to="/bands"
              selected={'/bands' === pathname}
            >
              Bands
            </MenuItem>
            <MenuItem
              component={Link}
              to="/venues"
              selected={'/venues' === pathname}
            >
              Venues
            </MenuItem>
          </Toolbar>
        </AppBar>
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

export default compose(
  withRouter,
  withStyles(styles)
)(App);
