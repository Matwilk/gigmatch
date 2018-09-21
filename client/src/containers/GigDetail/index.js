import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchGig } from '../../actions';
import NotFound from '../../components/NotFound';
import Loading from '../../components/Loading';

class GigDetail extends Component {
  /**
   *	Props implementation.
   */
  static propTypes = {
    fetchGig: PropTypes.func,
    gig: PropTypes.object,
    code: PropTypes.number,
    match: PropTypes.object
  };

  componentDidMount() {
    this.props.fetchGig(this.props.match.params.id);
  }

  render() {
    if (this.props.code === 404) {
      return NotFound;
    }

    if (!this.props.gig) {
      return Loading;
    }

    //console.log('render', this.props);
    return (
      <div>
        <h1>{this.props.gig.title}</h1>
        <p>Location: {this.props.gig.location}</p>
        <p>Fee: {this.props.gig.fee}</p>
        <p>Description: {this.props.gig.description}</p>
      </div>
    );
  }
}

function mapStateToProps({ gigs }, ourProps) {
  //console.log('mapStateToProps', gigs);
  return {
    code: gigs.code,
    gig: gigs.list[ourProps.match.params.id]
  };
}

export default connect(
  mapStateToProps,
  { fetchGig }
)(GigDetail);
